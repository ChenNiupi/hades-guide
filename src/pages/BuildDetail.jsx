import { Link, useParams } from "react-router-dom";
import { buildMap, builds } from "../data/builds";
import { godMap, gods } from "../data/gods";
import { duoMap } from "../data/duos";
import { allAspects } from "../data/weapons";
import { getBoonInfo } from "../data/boonInfo";
import { DuoCard, Medallion, Tag, TierBadge } from "../components/UI";
import WeaponIcon from "../components/WeaponIcon";
import { BoonChip } from "../components/BoonInfo";
import { ArrowIcon, ChevronIcon, SparkIcon } from "../components/Icons";
import usePageTitle from "../components/usePageTitle";
import NotFound from "./NotFound";

const CORE_SPLIT = " · ";

function parseCore(item) {
  const parts = item.split(CORE_SPLIT);
  const godName = parts.length > 1 ? parts[0] : null;
  const label = parts.length > 1 ? parts.slice(1).join(CORE_SPLIT) : item;
  const slotMatch = label.match(/（(.*?)）/);
  return {
    godName,
    name: label.replace(/（.*?）$/, "").trim(),
    slot: slotMatch ? slotMatch[1] : null,
  };
}

function groupCore(core, godsOfBuild) {
  const groups = [];
  core.forEach((item) => {
    const parsed = parseCore(item);
    // 优先按写法里的神名，其次按祝福所属神明，最后按全站神明表兜底
    let god =
      godsOfBuild.find((candidate) => candidate.name === parsed.godName) ?? null;

    if (!god) {
      const godId = getBoonInfo(parsed.name)?.godIds?.[0];
      god = godId ? godMap[godId] ?? null : null;
    }

    if (!god && parsed.godName) {
      god = gods.find((candidate) => candidate.name === parsed.godName) ?? null;
    }

    const key = god?.id ?? parsed.godName ?? "other";
    let group = groups.find((entry) => entry.key === key);
    if (!group) {
      group = { key, god, name: god?.name ?? parsed.godName ?? "综合", items: [] };
      groups.push(group);
    }
    group.items.push(parsed);
  });
  return groups;
}

function resolveAspects(build) {
  return (build.aspectPaths ?? [])
    .map((path) =>
      allAspects.find((aspect) => `${aspect.weapon.id}-${aspect.id}` === path),
    )
    .filter(Boolean);
}

export default function BuildDetail() {
  const { buildId } = useParams();
  const build = buildMap[buildId];
  usePageTitle(build ? `${build.name} · 五套构筑 · 冥府秘典` : "构筑未找到 · 冥府秘典");

  if (!build) {
    return <NotFound />;
  }

  const buildIndex = builds.findIndex((item) => item.id === build.id);
  const previous = builds[(buildIndex - 1 + builds.length) % builds.length];
  const next = builds[(buildIndex + 1) % builds.length];

  const godsOfBuild = build.gods.map((id) => godMap[id]).filter(Boolean);
  const primaryGod = godsOfBuild[0];
  const duo = duoMap[build.duoId];
  const coreGroups = groupCore(build.core, godsOfBuild);
  const aspectCards = resolveAspects(build);

  const styleVars = {
    "--god": primaryGod?.color ?? "#e8c37a",
    "--god-soft": primaryGod?.colorSoft ?? "rgba(232, 195, 122, 0.12)",
  };

  return (
    <div className="page build-detail" style={styleVars}>
      <section className="god-hero build-hero">
        <div className="container">
          <div className="god-hero-card panel">
            <span className="god-hero-ghost" aria-hidden="true">
              {build.en.toUpperCase()}
            </span>
            <span className="god-hero-frame" aria-hidden="true" />

            <nav className="breadcrumb" aria-label="面包屑">
              <Link to="/">首页</Link>
              <ChevronIcon size={12} />
              <Link to="/builds">推荐构筑</Link>
              <ChevronIcon size={12} />
              <span>{build.name}</span>
            </nav>

            <div className="god-hero-grid">
              <div className="god-hero-main build-hero-main">
                <span className="kicker">
                  BUILD {String(buildIndex + 1).padStart(2, "0")} · {build.en.toUpperCase()}
                </span>
                <h1>{build.name}</h1>
                <p className="god-lead">{build.tagline}</p>

                <div className="build-hero-gods">
                  {godsOfBuild.map((god) => (
                    <Link
                      className="build-hero-god"
                      key={god.id}
                      to={`/gods/${god.id}`}
                      style={{ "--tone": god.color }}
                    >
                      <Medallion god={god} size={38} />
                      <span>
                        <strong>{god.name}</strong>
                        <small>{god.domain}</small>
                      </span>
                    </Link>
                  ))}
                </div>

                <div className="build-stats">
                  <div className="build-stat">
                    <span>上手难度</span>
                    <strong>{build.difficulty}</strong>
                  </div>
                  <div className="build-stat">
                    <span>适用热度</span>
                    <strong>{build.heat.replace(/^适合\s*/, "")}</strong>
                  </div>
                  <div className="build-stat">
                    <span>核心双重</span>
                    <strong>{duo?.name ?? "无"}</strong>
                  </div>
                </div>
              </div>

              <aside className="build-recipe panel">
                <span className="kicker">LOADOUT</span>
                <h3>本套配方</h3>
                <dl>
                  <div>
                    <dt>武器</dt>
                    <dd>{build.weapon}</dd>
                  </div>
                  <div>
                    <dt>形态</dt>
                    <dd>{build.aspects.join(" / ")}</dd>
                  </div>
                  <div>
                    <dt>核心双重</dt>
                    <dd>{duo ? `${duo.name}（${duo.en}）` : "不依赖双重祝福"}</dd>
                  </div>
                </dl>
                {duo && (
                  <Link className="text-link" to={`/duos#${duo.id}`}>
                    看这组双重的前置
                    <ArrowIcon />
                  </Link>
                )}
              </aside>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container detail-grid">
          <div className="detail-main">
            <div className="prose-block">
              <span className="kicker">OVERVIEW</span>
              <h2>这套怎么打</h2>
              <p className="lead-paragraph">{build.playstyle}</p>
              <p>{build.tagline}</p>
            </div>

            <div className="core-callout panel">
              <div className="callout-mark">
                <SparkIcon size={18} />
              </div>
              <div>
                <span className="kicker">WIN CONDITION</span>
                <p>
                  先把「{parseCore(build.core[0] ?? "").name || "核心祝福"}」拿稳，
                  再按顺序补齐双神前置。祝福不必一次齐，缺哪条就按下面的成型顺序补。
                </p>
              </div>
            </div>

            <section className="build-block-section">
              <div className="section-head-inline">
                <div>
                  <span className="kicker">CORE BOONS</span>
                  <h2>核心祝福</h2>
                </div>
                <span className="count-label">{build.core.length} 条</span>
              </div>
              <p className="section-lede">
                点任意祝福名可以查看效果与槽位。括号里的槽位决定它能替换哪一路输出。
              </p>
              <div className="build-core-grid">
                {coreGroups.map((group) => (
                  <article
                    className="build-core-card panel"
                    key={group.key}
                    style={{ "--tone": group.god?.color ?? "#e8c37a" }}
                  >
                    <header>
                      {group.god ? (
                        <Medallion god={group.god} size={34} />
                      ) : (
                        <span className="build-core-dot" aria-hidden="true" />
                      )}
                      <div>
                        <strong>{group.name}</strong>
                        <small>{group.god?.domain ?? "祝福组合"}</small>
                      </div>
                      <em>{group.items.length}</em>
                    </header>
                    <ul>
                      {group.items.map((item) => (
                        <li key={`${item.godName}-${item.name}`}>
                          <BoonChip className="build-boon" name={item.name} />
                          {item.slot && <span className="build-slot">（{item.slot}）</span>}
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="build-block-section">
              <div className="section-head-inline">
                <div>
                  <span className="kicker">ROUTE</span>
                  <h2>成型顺序</h2>
                </div>
                <span className="count-label">{build.steps.length} 步</span>
              </div>
              <ol className="route-steps">
                {build.steps.map((step, stepIndex) => (
                  <li key={step}>
                    <span className="route-step-no">
                      {String(stepIndex + 1).padStart(2, "0")}
                    </span>
                    <p>{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="build-block-section">
              <div className="section-head-inline">
                <div>
                  <span className="kicker">IN PRACTICE</span>
                  <h2>实战提醒</h2>
                </div>
              </div>
              <ul className="build-tips build-tips-loose">
                {build.tips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </section>

            {duo && (
              <section className="build-block-section">
                <div className="section-head-inline">
                  <div>
                    <span className="kicker">DUO BOON</span>
                    <h2>这套的核心双重</h2>
                  </div>
                  <TierBadge tier={duo.tier} />
                </div>
                <div className="duo-grid duo-grid-single">
                  <DuoCard duo={duo} />
                </div>
              </section>
            )}

            <section className="build-block-section">
              <div className="section-head-inline">
                <div>
                  <span className="kicker">ASPECTS</span>
                  <h2>适配武器形态</h2>
                </div>
                <Link className="text-link" to="/weapons">
                  全部武器
                  <ArrowIcon />
                </Link>
              </div>
              <div className="build-aspect-list">
                {aspectCards.map((aspect) => (
                  <article className="build-aspect-card panel" key={`${aspect.weapon.id}-${aspect.id}`}>
                    <header>
                      <WeaponIcon id={aspect.weapon.id} size={34} />
                      <div>
                        <span className="kicker">
                          {aspect.weapon.name} · {aspect.weapon.en}
                        </span>
                        <h3>{aspect.name}</h3>
                      </div>
                      <TierBadge tier={aspect.rating} />
                    </header>
                    <p className="build-aspect-official">
                      <span>官方描述</span>
                      {aspect.official}
                    </p>
                    <p className="build-aspect-play">{aspect.playstyle}</p>
                    <div className="build-aspect-meta">
                      <span className="mini-chip">难度 {aspect.difficulty}</span>
                      <span className="mini-chip">{aspect.heat}</span>
                      {aspect.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </div>
                    <div className="build-aspect-boons">
                      {aspect.recommendedBoons.slice(0, 5).map((name) => (
                        <BoonChip className="build-aspect-boon" key={name} name={name} />
                      ))}
                    </div>
                    <Link
                      className="text-link build-aspect-more"
                      to={`/weapons#${aspect.weapon.id}-${aspect.id}`}
                    >
                      看 {aspect.weapon.name} · {aspect.name} 详情
                      <ArrowIcon />
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          </div>

          <aside className="detail-side">
            <div className="side-card panel">
              <span className="kicker">QUICK TAKE</span>
              <h3>一句话用法</h3>
              <p>{build.tagline}</p>
              <div className="side-links">
                <Link className="text-link" to={`/guides/five-builds#build-${build.id}`}>
                  在《五套构筑》里对照读
                  <ArrowIcon />
                </Link>
                <Link className="text-link subdued" to="/guides/build-fundamentals">
                  看懂构筑底层
                </Link>
              </div>
            </div>

            <div className="side-card panel side-index">
              <span className="kicker">ALL BUILDS</span>
              <div className="side-build-list">
                {builds.map((item, index) => (
                  <Link
                    key={item.id}
                    to={`/builds/${item.id}`}
                    className={item.id === build.id ? "is-active" : ""}
                  >
                    <span className="side-build-no">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="side-card panel side-tags">
              <span className="kicker">TAGS</span>
              <div className="tag-row">
                <Tag>难度 {build.difficulty}</Tag>
                <Tag>{build.heat.replace(/^适合\s*/, "")}</Tag>
                {godsOfBuild.map((god) => (
                  <Tag key={god.id}>{god.name}</Tag>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="pager">
            <Link className="pager-link" to={`/builds/${previous.id}`}>
              <span>上一套</span>
              <strong>
                <ChevronIcon size={13} />
                {previous.name}
              </strong>
            </Link>
            <Link className="pager-link pager-next" to={`/builds/${next.id}`}>
              <span>下一套</span>
              <strong>
                {next.name}
                <ChevronIcon size={13} />
              </strong>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
