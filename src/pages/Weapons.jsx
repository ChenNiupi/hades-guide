import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  getWeapon,
  totalAspects,
  weaponMap,
  weapons,
} from "../data/weapons";
import { weaponPlans } from "../data/weaponPlans";
import { godMap } from "../data/gods";
import { duoMap } from "../data/duos";
import { builds } from "../data/builds";
import { guides } from "../data/guides";
import WeaponIcon from "../components/WeaponIcon";
import { Medallion, TierBadge } from "../components/UI";
import { BoonChip, BoonTerm } from "../components/BoonInfo";
import { aspectArchetypes, archetypeSource } from "../data/aspectArchetypes";
import { ArrowIcon, SparkIcon } from "../components/Icons";
import usePageTitle from "../components/usePageTitle";

const WEAPON_SHORT = {
  sword: "剑",
  spear: "矛",
  shield: "盾",
  bow: "弓",
  fist: "拳",
  rail: "炮",
};

const NUMERALS = ["一", "二", "三", "四"];

const KIND_CLASS = {
  主推: "kind-main",
  一般向: "kind-alt",
  娱乐向: "kind-fun",
};

function buildKey(name) {
  return name
    .replace(/·/g, "")
    .replace(/debuff/gi, "")
    .replace(/\s+/g, "")
    .replace(/流派$/, "")
    .replace(/流$/, "");
}

function matchesPlan(build, plan) {
  const a = buildKey(build.name);
  const p = buildKey(plan.name);
  if (!a || !p) return false;
  if (a === p) return true;
  // 雷海流派在不同形态下叫法不一，但属于同一套构筑。
  return a.startsWith("雷海") && p.startsWith("雷海");
}

function ArchetypePlanCard({ build, index }) {
  return (
    <article className="weapon-plan">
      <header className="plan-head">
        <span className="kicker">推荐搭配 {String(index + 1).padStart(2, "0")}</span>
        <div className="plan-title-row">
          <h4>{build.name}</h4>
          <span className={`archetype-kind ${KIND_CLASS[build.kind] ?? "kind-alt"}`}>
            {build.kind}
          </span>
        </div>
      </header>

      {build.hammer && (
        <div className="plan-line">
          <b>锤子</b>
          <p className="plan-text">{build.hammer}</p>
        </div>
      )}
      <div className="plan-line">
        <b>配置</b>
        <p className="plan-text">{build.loadout.join(" · ")}</p>
      </div>
      {build.core?.length > 0 && (
        <div className="plan-line">
          <b>核心祝福</b>
          <div className="aspect-chips">
            {build.core.map((name) => (
              <BoonChip className="aspect-chip" key={name} name={name} />
            ))}
          </div>
        </div>
      )}
      <p className="plan-play">{build.review}</p>
      {build.note && <p className="plan-note">{build.note}</p>}
    </article>
  );
}

function PlanCard({ plan, index, archetype }) {
  const duo = duoMap[plan.duoId];
  const core = archetype
    ? [...new Set([...plan.core, ...(archetype.core ?? [])])]
    : plan.core;

  return (
    <article className="weapon-plan">
      <header className="plan-head">
        <span className="kicker">推荐搭配 {String(index + 1).padStart(2, "0")}</span>
        <div className="plan-title-row">
          <h4>{plan.name}</h4>
          <span className="plan-title-side">
            {archetype && (
              <span className={`archetype-kind ${KIND_CLASS[archetype.kind] ?? "kind-alt"}`}>
                {archetype.kind}
              </span>
            )}
            {duo && (
              <Link className="plan-duo" to={`/duos#${duo.id}`}>
                {duo.name}
                <ArrowIcon size={12} />
              </Link>
            )}
          </span>
        </div>
      </header>

      <div className="plan-combo">
        {plan.combo.map((part, comboIndex) => {
          const god = godMap[part.god];
          return (
            <span className="plan-combo-item" key={`${part.god}-${part.boon}`}>
              {comboIndex > 0 && <span className="plan-plus">+</span>}
              <Medallion god={god} size={30} />
              <BoonTerm
                className="plan-combo-copy"
                name={part.boon}
                tag={part.tag}
              >
                <strong>{part.boon}</strong>
                <small>
                  {part.tag} · {god?.name}
                </small>
              </BoonTerm>
            </span>
          );
        })}
      </div>

      {archetype?.hammer && (
        <div className="plan-line">
          <b>锤子</b>
          <p className="plan-text">{archetype.hammer}</p>
        </div>
      )}

      <div className="plan-line">
        <b>核心祝福</b>
        <div className="aspect-chips">
          {core.map((name) => (
            <BoonChip className="aspect-chip" key={name} name={name} />
          ))}
        </div>
      </div>

      <div className="plan-line">
        <b>剩下的神可选</b>
        <div className="plan-optional">
          {plan.optionalGods.map((id) => {
            const god = godMap[id];
            if (!god) return null;
            return (
              <Link className="plan-optional-god" to={`/gods/${god.id}`} key={id}>
                <Medallion god={god} size={20} />
                {god.name}
              </Link>
            );
          })}
        </div>
        <p className="plan-optional-note">{plan.optionalNote}</p>
      </div>

      <p className="plan-play">{plan.play}</p>
      {archetype?.note && <p className="plan-note">{archetype.note}</p>}
    </article>
  );
}

const PICK_ADVICE = {
  sword: "想练基础连段、暴击或厄运爆发，先从剑开始。",
  spear: "想中距离消耗，或围绕投弹做文章，选矛。",
  shield: "想稳、想格挡，或想玩雷盾/投弹盾，选盾。",
  bow: "想安全远程、追踪输出或装填投弹，选弓。",
  fist: "想贴脸高频、雷海或醉酒流，选拳。",
  rail: "想远程连射、自爆增伤或狙击，选炮。",
};

const buildMap = Object.fromEntries(builds.map((build) => [build.id, build]));
const guideMap = Object.fromEntries(guides.map((guide) => [guide.id, guide]));

function weaponFromHash(hash) {
  const raw = hash.replace(/^#/, "");
  if (!raw) return "sword";
  if (weaponMap[raw]) return raw;
  const owner = weapons.find(
    (weapon) =>
      raw.startsWith(`${weapon.id}-`) &&
      weapon.aspects.some((aspect) => `${weapon.id}-${aspect.id}` === raw),
  );
  return owner?.id ?? "sword";
}

export default function Weapons() {
  usePageTitle("武器选择 · 冥府秘典");
  const { hash } = useLocation();
  const [selectedId, setSelectedId] = useState(() => weaponFromHash(hash));
  const [activeTab, setActiveTab] = useState("summary");
  const selected = getWeapon(selectedId) ?? weapons[0];

  useEffect(() => {
    const raw = hash.replace(/^#/, "");
    if (!raw) return;
    const owner = weapons.find(
      (weapon) =>
        weapon.id === raw ||
        (raw.startsWith(`${weapon.id}-`) &&
          weapon.aspects.some((aspect) => `${weapon.id}-${aspect.id}` === raw)),
    );
    if (!owner) return;
    const aspect = owner.aspects.find((item) => `${owner.id}-${item.id}` === raw);
    setSelectedId(owner.id);
    setActiveTab(aspect?.id ?? "summary");
    if (aspect) {
      const timer = window.setTimeout(() => {
        document.getElementById(raw)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 120);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [hash]);

  const selectWeapon = (id) => {
    setSelectedId(id);
    setActiveTab("summary");
    window.history.replaceState(null, "", `#/weapons#${id}`);
  };

  const selectTab = (tab) => {
    setActiveTab(tab);
    const key = tab === "summary" ? selected.id : `${selected.id}-${tab}`;
    window.history.replaceState(null, "", `#/weapons#${key}`);
  };

  const activeAspect = selected.aspects.find((aspect) => aspect.id === activeTab);
  const activeAspectIndex = selected.aspects.findIndex(
    (aspect) => aspect.id === activeTab,
  );
  const activePlans = activeAspect
    ? weaponPlans[`${selected.id}-${activeAspect.id}`] ?? []
    : [];
  const activeArchetypes = activeAspect
    ? aspectArchetypes[`${selected.id}-${activeAspect.id}`] ?? null
    : null;
  const matchedArchetypes = activePlans.map(
    (plan) =>
      activeArchetypes?.builds.find((build) => matchesPlan(build, plan)) ?? null,
  );
  const usedArchetypes = new Set(matchedArchetypes.filter(Boolean));
  const extraArchetypes = (activeArchetypes?.builds ?? []).filter(
    (build) => !usedArchetypes.has(build),
  );
  const activeBuilds = (activeAspect?.buildIds ?? [])
    .map((id) => buildMap[id])
    .filter(Boolean);
  const activeGuide = activeAspect?.guideId
    ? guideMap[activeAspect.guideId] ?? null
    : null;

  return (
    <div
      className="page weapons-page"
      style={{ "--weapon": selected.color }}
    >
      <section className="page-hero weapons-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div>
              <span className="kicker">
                <span className="kicker-line" />
                THE ARSENAL
              </span>
              <h1>
                武器<span className="gold-text">选择</span>
              </h1>
              <p>
                六把武器、二十四种形态。每一把都有自己的距离、节奏和答案。
                先选一把顺手的，再决定今晚把哪些祝福交给它。
              </p>
            </div>
            <div className="page-hero-aside">
              <span className="aside-number">{totalAspects}</span>
              <span className="aside-label">种形态 / 6 把武器</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section weapons-section">
        <div className="container">
          <div className="weapon-picker" role="tablist" aria-label="选择武器">
            {weapons.map((weapon) => {
              const active = weapon.id === selected.id;
              return (
                <button
                  key={weapon.id}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  className={`weapon-pick panel ${active ? "is-active" : ""}`}
                  style={{ "--weapon": weapon.color }}
                  onClick={() => selectWeapon(weapon.id)}
                >
                  <WeaponIcon id={weapon.id} size={54} />
                  <span className="weapon-pick-copy">
                    <strong>{weapon.name}</strong>
                    <small>{weapon.en}</small>
                    <em>{weapon.role}</em>
                  </span>
                  <TierBadge tier={weapon.rating} />
                </button>
              );
            })}
          </div>

          <div className="weapon-detail panel" id="weapon-detail">
            <header className="weapon-detail-head">
              <div className="weapon-large-icon">
                <WeaponIcon id={selected.id} size={108} />
              </div>
              <div className="weapon-title">
                <span className="kicker">
                  {selected.alias} · {selected.en.toUpperCase()}
                </span>
                <h2>{selected.name}</h2>
                <p>{selected.tagline}</p>
                <div className="tag-row">
                  <span className="mini-chip">{selected.role}</span>
                  <span className="mini-chip">{selected.range}</span>
                  <span className="mini-chip">难度 {selected.difficulty}</span>
                </div>
              </div>
              <div className="weapon-head-meta">
                <div className="weapon-meta-row">
                  <span>综合评级</span>
                  <TierBadge tier={selected.rating} />
                </div>
                <div className="weapon-meta-row">
                  <span>形态数量</span>
                  <strong>{selected.aspects.length}</strong>
                </div>
                <div className="weapon-meta-row">
                  <span>上手难度</span>
                  <strong>{selected.difficulty}</strong>
                </div>
                <Link className="text-link" to="/guides/weapons">
                  武器速览
                  <ArrowIcon />
                </Link>
              </div>
            </header>

            <div className="weapon-tabs" role="tablist" aria-label={`${selected.name}攻略`}>
              <button
                type="button"
                role="tab"
                id="weapon-tab-summary"
                aria-selected={activeTab === "summary"}
                className={`weapon-tab ${activeTab === "summary" ? "is-active" : ""}`}
                onClick={() => selectTab("summary")}
              >
                <span>总结</span>
                <small>总览与选择</small>
              </button>
              {selected.aspects.map((aspect, index) => (
                <button
                  key={aspect.id}
                  type="button"
                  role="tab"
                  id={`weapon-tab-${aspect.id}`}
                  aria-selected={activeTab === aspect.id}
                  className={`weapon-tab ${activeTab === aspect.id ? "is-active" : ""}`}
                  onClick={() => selectTab(aspect.id)}
                >
                  <span>
                    {WEAPON_SHORT[selected.id]}
                    {NUMERALS[index]}
                  </span>
                  <small>{aspect.name.replace(/形态$/, "")}</small>
                </button>
              ))}
            </div>

            {activeTab === "summary" ? (
              <div
                className="weapon-tab-panel"
                id="weapon-summary"
                role="tabpanel"
                aria-labelledby="weapon-tab-summary"
              >
                <div className="weapon-detail-body">
                  <div>
                    <p className="lead-paragraph">{selected.overview}</p>
                    <div className="weapon-moves">
                      <h4>基础操作</h4>
                      <ul>
                        {selected.moves.map((move) => (
                          <li key={move}>{move}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <aside className="weapon-advice">
                    <span className="kicker">PICK THIS IF</span>
                    <p>{PICK_ADVICE[selected.id]}</p>
                    <div className="weapon-advice-aspects">
                      {selected.aspects.map((aspect) => (
                        <span key={aspect.id}>{aspect.name}</span>
                      ))}
                    </div>
                  </aside>
                </div>

                <div className="aspect-overview-grid">
                  {selected.aspects.map((aspect, index) => {
                    const plans = weaponPlans[`${selected.id}-${aspect.id}`] ?? [];
                    return (
                      <button
                        type="button"
                        className="aspect-overview-card"
                        key={aspect.id}
                        onClick={() => selectTab(aspect.id)}
                      >
                        <span className="aspect-overview-no">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="aspect-overview-copy">
                          <span className="kicker">{aspect.en}</span>
                          <strong>{aspect.name}</strong>
                          <small>{aspect.playstyle}</small>
                          {plans[0] && <em>推荐搭配 · {plans[0].name}</em>}
                        </span>
                        <span className="aspect-overview-side">
                          <TierBadge tier={aspect.rating} />
                          <span className="text-link">
                            查看攻略
                            <ArrowIcon size={13} />
                          </span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              activeAspect && (
                <div
                  className="weapon-tab-panel weapon-aspect-panel"
                  id={`${selected.id}-${activeAspect.id}`}
                  role="tabpanel"
                  aria-labelledby={`weapon-tab-${activeAspect.id}`}
                >
                  <header className="weapon-aspect-head">
                    <div>
                      <span className="kicker">
                        ASPECT {String(activeAspectIndex + 1).padStart(2, "0")} ·{" "}
                        {activeAspect.en}
                      </span>
                      <h3>{activeAspect.name}</h3>
                      <p>{activeAspect.playstyle}</p>
                    </div>
                    <TierBadge tier={activeAspect.rating} />
                  </header>

                  <div className="weapon-aspect-top">
                    <div className="aspect-official">
                      <span>官方描述</span>
                      <p>{activeAspect.official}</p>
                    </div>
                    <div className="weapon-aspect-side">
                      <div className="aspect-meta">
                        {activeAspect.tags.map((tag) => (
                          <span className="mini-chip" key={tag}>
                            {tag}
                          </span>
                        ))}
                        <span className="mini-chip">难度 {activeAspect.difficulty}</span>
                        <span className="mini-chip">{activeAspect.heat}</span>
                      </div>
                      <p>
                        先按推荐搭配拿核心祝福，再用备选神明补生存、控制或移速。
                        数值会随泰坦之血等级提升。
                      </p>
                    </div>
                  </div>

                  {(activeArchetypes?.hammer || activeArchetypes?.note) && (
                    <div className="plan-intro">
                      {activeArchetypes.hammer && (
                        <p>
                          <b>形态锤子</b>
                          {activeArchetypes.hammer.join(" · ")}
                        </p>
                      )}
                      {activeArchetypes.note && <p>{activeArchetypes.note}</p>}
                    </div>
                  )}

                  <div className="weapon-plan-grid">
                    {activePlans.map((plan, index) => (
                      <PlanCard
                        plan={plan}
                        index={index}
                        archetype={matchedArchetypes[index]}
                        key={plan.name}
                      />
                    ))}
                    {extraArchetypes.map((build, index) => (
                      <ArchetypePlanCard
                        build={build}
                        index={activePlans.length + index}
                        key={build.name}
                      />
                    ))}
                  </div>

                  {activeArchetypes && (
                    <p className="plan-source">
                      部分流派整理自小黑盒玩家{" "}
                      <a
                        href={archetypeSource.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {archetypeSource.author}《{archetypeSource.collection}》
                      </a>
                      ，实战评价为原作者观点。
                    </p>
                  )}

                  <div className="weapon-aspect-bottom">
                    <div className="weapon-aspect-tips">
                      <b>实战要点</b>
                      <ul className="aspect-tips">
                        {activeAspect.tips.map((tip) => (
                          <li key={tip}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                    {(activeBuilds.length > 0 || activeGuide) && (
                      <div className="aspect-builds">
                        <b>推荐攻略</b>
                        <div>
                          {activeBuilds.map((build) => (
                            <Link
                              key={build.id}
                              to={`/guides/five-builds#build-${build.id}`}
                            >
                              {build.name}
                              <ArrowIcon />
                            </Link>
                          ))}
                          {activeGuide && (
                            <Link to={`/guides/${activeGuide.id}`}>
                              {activeGuide.title}
                              <ArrowIcon />
                            </Link>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            )}

            <p className="weapon-detail-note">
              形态效果取自游戏内官方描述，具体数值会随泰坦之血等级提升；
              推荐祝福、双重祝福与构筑为本站实战建议。
            </p>
          </div>

          <div className="weapon-notes">
            <div className="section-head">
              <div>
                <span className="kicker">
                  <span className="kicker-line" />
                  HOW TO PICK
                </span>
                <h2>怎么选武器</h2>
                <p>先看距离和节奏，再看形态是否匹配你今晚想玩的祝福。</p>
              </div>
            </div>
            <div className="weapon-note-grid">
              <article className="weapon-note panel">
                <span className="weapon-note-no">01</span>
                <h3>先看距离</h3>
                <p>
                  想贴身连段选剑或拳，想中距离选矛，想安全输出选弓或炮。
                  盾介于两者之间，能格挡也能远程弹射。
                </p>
              </article>
              <article className="weapon-note panel">
                <span className="weapon-note-no">02</span>
                <h3>再看节奏</h3>
                <p>
                  高频触发选拳/炮，蓄力重击选弓/亚瑟剑，投弹循环选矛/盾/赫拉弓。
                  节奏不合，再高的面板也会打得很累。
                </p>
              </article>
              <article className="weapon-note panel">
                <span className="weapon-note-no">03</span>
                <h3>最后看形态</h3>
                <p>
                  每把武器先挑一个 S 或 A 级形态上手，熟悉基础操作后再换形态。
                  隐藏形态往往需要特定信物与前置，不建议第一次通关就硬玩。
                </p>
              </article>
            </div>
          </div>

          <div className="weapon-cta panel">
            <div>
              <span className="kicker">
                <SparkIcon size={14} /> NEXT
              </span>
              <h3>选好武器，再把祝福装进去。</h3>
              <p>五套稳定构筑、武器速览与热度建议，都可以继续往下看。</p>
            </div>
            <div className="weapon-cta-links">
              <Link className="button button-primary" to="/guides/five-builds">
                查看五套构筑
                <ArrowIcon />
              </Link>
              <Link className="button button-ghost" to="/guides/weapons">
                武器速览
                <ArrowIcon />
              </Link>
              <Link className="button button-ghost" to="/guides/heat">
                热度攻略
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
