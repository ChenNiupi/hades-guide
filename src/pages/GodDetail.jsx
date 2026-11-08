import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SLOTS, getGod, gods } from "../data/gods";
import { duoByGod } from "../data/duos";
import NotFound from "./NotFound";
import { DuoCard, Medallion, Tag, TierBadge } from "../components/UI";
import { BoonChip } from "../components/BoonInfo";
import { ArrowIcon, ChevronIcon, SparkIcon } from "../components/Icons";
import usePageTitle from "../components/usePageTitle";

function BoonRow({ boon }) {
  return (
    <div className={`boon-row ${boon.slot === "legendary" ? "is-legendary" : ""}`}>
      <div className="boon-name">
        <h4>
          <BoonChip className="boon-name-button" name={boon.name} />
        </h4>
        <span>{boon.en}</span>
      </div>
      <div className="boon-body">
        <p>{boon.effect}</p>
        {boon.note && <small>{boon.note}</small>}
      </div>
      <div className="boon-side">
        <TierBadge tier={boon.tier} />
      </div>
    </div>
  );
}

export default function GodDetail() {
  const { godId } = useParams();
  const god = getGod(godId);
  const [slot, setSlot] = useState("all");
  usePageTitle(
    god ? `${god.name} · 诸神祝福 · 冥府秘典` : "神明未找到 · 冥府秘典",
  );

  const boons = god?.boons ?? [];
  const duos = useMemo(() => (god ? duoByGod(god.id) : []), [god]);

  const slotCounts = useMemo(() => {
    const counts = {};
    boons.forEach((boon) => {
      counts[boon.slot] = (counts[boon.slot] ?? 0) + 1;
    });
    return counts;
  }, [boons]);

  const groups = useMemo(() => {
    if (!god) return [];
    return SLOTS.map((item) => ({
      ...item,
      boons: boons.filter((boon) => boon.slot === item.id),
    })).filter(
      (group) =>
        group.boons.length > 0 && (slot === "all" || slot === group.id),
    );
  }, [god, boons, slot]);

  if (!god) {
    return <NotFound />;
  }

  const godIndex = gods.findIndex((item) => item.id === god.id);
  const previous = gods[(godIndex - 1 + gods.length) % gods.length];
  const next = gods[(godIndex + 1) % gods.length];
  const isChaos = god.id === "chaos";

  return (
    <div className="page god-detail" style={{ "--god": god.color, "--god-soft": god.colorSoft }}>
      <section className="god-hero">
        <div className="container">
          <div className="god-hero-card panel">
            <span className="god-hero-ghost" aria-hidden="true">
              {god.en.toUpperCase()}
            </span>
            <span className="god-hero-frame" aria-hidden="true" />
            <span className="god-hero-crown" aria-hidden="true" />
            <nav className="breadcrumb" aria-label="面包屑">
              <Link to="/gods">诸神祝福</Link>
              <ChevronIcon size={12} />
              <span>{god.name}</span>
            </nav>

            <div className="god-hero-grid">
              <div className="god-hero-main">
                <div className="god-identity">
                  <Medallion god={god} size={94} />
                  <div>
                    <span className="kicker">
                      {god.en.toUpperCase()} · {isChaos ? "PRIMORDIAL" : "OLYMPIAN"}
                    </span>
                    <h1>{god.name}</h1>
                    <p className="god-epithet">
                      {god.title} · {god.domain}
                    </p>
                  </div>
                </div>
                <p className="god-lead">{god.tagline}</p>
                <div className="tag-row">
                  {god.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
                  ))}
                  <span className="mini-chip">难度 {god.difficulty}</span>
                </div>

                <div className="god-stats">
                  <div className="god-stat">
                    <span>综合评级</span>
                    <TierBadge tier={god.rating} />
                  </div>
                  <div className="god-stat">
                    <span>上手难度</span>
                    <strong>{god.difficulty}</strong>
                  </div>
                  <div className="god-stat">
                    <span>核心祝福</span>
                    <strong>
                      {isChaos ? "诅咒 / 祝福成对" : `${boons.length} 条`}
                    </strong>
                  </div>
                  <div className="god-stat">
                    <span>双重祝福</span>
                    <strong>
                      {isChaos || god.id === "hermes" ? "不参与" : `${duos.length} 组`}
                    </strong>
                  </div>
                  <Link className="text-link god-stats-link" to="/duos">
                    查看全部双重祝福
                    <ArrowIcon />
                  </Link>
                </div>
              </div>

              <figure className="god-portrait-card">
                <img
                  src={`/images/gods/${god.id}.png`}
                  width="640"
                  height="800"
                  alt={`${god.name}官方立绘`}
                  loading="eager"
                  decoding="async"
                />
                <span className="portrait-vignette" aria-hidden="true" />
                <figcaption className="portrait-caption plate">
                  <span>官方立绘</span>
                  <strong>{god.en}</strong>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container detail-grid">
          <div className="detail-main">
            <div className="prose-block">
              <span className="kicker">OVERVIEW</span>
              <h2>神格速写</h2>
              <p className="lead-paragraph">{god.overview}</p>
              <p>{god.playstyle}</p>
            </div>

            <div className="core-callout panel">
              <div className="callout-mark">
                <SparkIcon size={18} />
              </div>
              <div>
                <span className="kicker">CORE IDEA</span>
                <p>{god.core}</p>
              </div>
            </div>

            <div className="pros-cons">
              <div className="panel pros-box">
                <span className="kicker">STRENGTHS</span>
                <h3>擅长</h3>
                <ul>
                  {god.pros.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="panel cons-box">
                <span className="kicker">LIMITS</span>
                <h3>局限</h3>
                <ul>
                  {god.cons.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {isChaos ? (
              <div className="boon-section">
                <div className="section-head-inline">
                  <div>
                    <span className="kicker">CHAOS RULES</span>
                    <h2>混沌的规则</h2>
                  </div>
                </div>
                <p className="boon-intro">{god.chaos.intro}</p>
                <div className="chaos-steps panel">
                  <h3>如何获得</h3>
                  <ol>
                    {god.chaos.steps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                </div>
                <div className="chaos-examples">
                  {god.chaos.examples.map((item) => (
                    <div className="chaos-example panel" key={item.note}>
                      <div className="chaos-pair">
                        <span className="chaos-curse">{item.curse}</span>
                        <span className="chaos-arrow">→</span>
                        <span className="chaos-blessing">{item.blessing}</span>
                      </div>
                      <p>{item.note}</p>
                    </div>
                  ))}
                </div>
                <div className="data-note">
                  <span>说明</span>
                  <p>
                    以上为混沌祝福的典型取舍示例，具体词条与数值以游戏内刷新结果为准。
                    混沌祝福不占用奥林匹斯槽位，也不能出售或用力量石榴升级。
                  </p>
                </div>
              </div>
            ) : (
              <div className="boon-section" id="boons">
                <div className="section-head-inline">
                  <div>
                    <span className="kicker">BOON LIST</span>
                    <h2>核心祝福</h2>
                  </div>
                  <span className="count-label">{boons.length} 条</span>
                </div>
                <p className="boon-intro">
                  按动作槽位浏览。同一槽位只能装备一位神的祝福，选择前先确认它是否与你的主输出方向一致。
                </p>

                <div className="tab-row" role="group" aria-label="按槽位筛选祝福">
                  <button
                    type="button"
                    className={`tab ${slot === "all" ? "is-active" : ""}`}
                    onClick={() => setSlot("all")}
                    aria-pressed={slot === "all"}
                  >
                    全部 <span>{boons.length}</span>
                  </button>
                  {SLOTS.filter((item) => slotCounts[item.id] > 0).map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      className={`tab ${slot === item.id ? "is-active" : ""}`}
                      onClick={() => setSlot(item.id)}
                      aria-pressed={slot === item.id}
                    >
                      {item.label} <span>{slotCounts[item.id]}</span>
                    </button>
                  ))}
                </div>

                <div className="boon-groups">
                  {groups.map((group) => (
                    <div className="boon-group" key={group.id}>
                      <div className="boon-group-head">
                        <span>{group.label}</span>
                        <small>{group.hint}</small>
                        <em>{group.boons.length}</em>
                      </div>
                      {group.boons.map((boon) => (
                        <BoonRow key={boon.en} boon={boon} />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="duo-section">
              <div className="section-head-inline">
                <div>
                  <span className="kicker">DUO BOONS</span>
                  <h2>与 {god.name} 相关的双重祝福</h2>
                </div>
                {duos.length > 0 && (
                  <Link className="text-link" to="/duos">
                    全部 {duos.length} 组
                    <ArrowIcon />
                  </Link>
                )}
              </div>
              {duos.length > 0 ? (
                <div className="duo-grid duo-grid-detail">
                  {duos.map((duo) => (
                    <DuoCard key={duo.id} duo={duo} />
                  ))}
                </div>
              ) : (
                <div className="empty-state panel empty-compact">
                  <h3>{god.name} 不提供双重祝福</h3>
                  <p>
                    {god.id === "hermes"
                      ? "赫尔墨斯的祝福可以出现在任何构筑里，但他不与其他神明组成双重祝福。"
                      : "卡俄斯属于独立体系，混沌祝福不参与双重祝福组合。"}
                  </p>
                </div>
              )}
            </div>
          </div>

          <aside className="detail-side">
            <div className="side-card panel">
              <span className="kicker">QUICK TAKE</span>
              <h3>上手建议</h3>
              <p>{god.core}</p>
              <div className="side-links">
                <Link className="text-link" to="/guides/build-fundamentals">
                  看懂构筑底层
                  <ArrowIcon />
                </Link>
                <Link className="text-link subdued" to="/builds">
                  直接抄一套构筑
                </Link>
              </div>
            </div>
            <div className="side-card panel side-index">
              <span className="kicker">ALL GODS</span>
              <div className="side-god-list">
                {gods.map((item) => (
                  <Link
                    key={item.id}
                    to={`/gods/${item.id}`}
                    className={item.id === god.id ? "is-active" : ""}
                  >
                    <Medallion god={item} size={28} />
                    <span>{item.name}</span>
                    <TierBadge tier={item.rating} />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="pager">
            <Link className="pager-link" to={`/gods/${previous.id}`}>
              <span>上一位</span>
              <strong>
                <ChevronIcon size={13} />
                {previous.name}
              </strong>
            </Link>
            <Link className="pager-link pager-next" to={`/gods/${next.id}`}>
              <span>下一位</span>
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
