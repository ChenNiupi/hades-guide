import { Link, useNavigate } from "react-router-dom";
import GodIcon from "./GodIcon";
import { ArrowIcon } from "./Icons";
import { BoonChip } from "./BoonInfo";
import { duoByGod } from "../data/duos";
import { godMap } from "../data/gods";

export function Medallion({ god, size = 54, className = "" }) {
  return (
    <span
      className={`medallion ${className}`}
      style={{ "--tone": god?.color ?? "#e8c37a", width: size, height: size }}
    >
      <GodIcon id={god?.id ?? "chaos"} size={Math.round(size * 0.74)} />
    </span>
  );
}

export function TierBadge({ tier }) {
  return (
    <span className={`tier tier-${(tier ?? "b").toLowerCase()}`} title={`评级 ${tier}`}>
      {tier}
    </span>
  );
}

export function Tag({ children }) {
  return <span className="tag">{children}</span>;
}

export function SectionHead({ kicker, title, desc, action }) {
  return (
    <div className="section-head">
      <div className="section-head-copy">
        {kicker && <span className="kicker">{kicker}</span>}
        <h2>{title}</h2>
        {desc && <p>{desc}</p>}
      </div>
      {action && (
        <Link className="text-link section-action" to={action.to}>
          {action.label}
          <ArrowIcon />
        </Link>
      )}
    </div>
  );
}

export function GodCard({ god }) {
  const duos = duoByGod(god.id);
  const boons = god.boons ?? [];
  const signature = boons
    .filter((boon) => boon.tier === "S")
    .slice(0, 2)
    .map((boon) => boon.name);
  const displaySignature =
    signature.length > 0
      ? signature.join(" / ")
      : boons.length > 0
        ? boons.slice(0, 2).map((boon) => boon.name).join(" / ")
        : "诅咒 / 祝福成对";

  return (
    <Link
      to={`/gods/${god.id}`}
      className="god-card panel"
      style={{ "--god": god.color, "--god-soft": god.colorSoft }}
    >
      <div className="god-card-art" aria-hidden="true">
        <img
          src={`/images/gods/${god.id}.png`}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="god-card-top">
        <Medallion god={god} size={56} />
        <TierBadge tier={god.rating} />
      </div>
      <div className="god-names">
        <h3>{god.name}</h3>
        <span>{god.en}</span>
      </div>
      <p className="god-title">
        {god.title} · {god.domain}
      </p>
      <p className="god-tagline">{god.tagline}</p>
      <div className="tag-row">
        {god.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
        <span className="muted-chip">{duos.length} 组双重</span>
      </div>
      <div className="god-card-foot">
        <span className="foot-label">核心</span>
        <span className="foot-value">{displaySignature}</span>
        <ArrowIcon />
      </div>
    </Link>
  );
}

export function DuoCard({ duo }) {
  const a = godMap[duo.gods[0]];
  const b = godMap[duo.gods[1]];

  return (
    <article
      className="duo-card panel"
      id={duo.id}
      style={{
        "--tone-a": a?.color ?? "#e8c37a",
        "--tone-b": b?.color ?? "#8b6cc9",
      }}
    >
      <header className="duo-top">
        <div className="duo-pair">
          <Medallion god={a} size={46} />
          <span className="duo-plus">+</span>
          <Medallion god={b} size={46} />
        </div>
        <TierBadge tier={duo.tier} />
      </header>
      <div className="duo-names">
        <h3>{duo.name}</h3>
        <span>{duo.en}</span>
      </div>
      <p className="duo-effect">{duo.effect}</p>
      <div className="duo-prereq">
        <div className="prereq-head">
          <span>前置</span>
          <small>每组任选其一</small>
        </div>
        {duo.prereqGroups?.length > 0 ? (
          <div className="prereq-groups">
            {duo.prereqGroups.map((group) => (
              <div className="prereq-group" key={group.label}>
                <b>{group.label}</b>
                <div className="prereq-options">
                  {group.options.map((option) => (
                    <BoonChip
                      className="prereq-chip"
                      key={`${group.label}-${option.name}-${option.tag}`}
                      name={option.name}
                      tag={option.tag}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="prereq-summary">{duo.prereq}</p>
        )}
      </div>
      {duo.note && <p className="duo-note">{duo.note}</p>}
      <footer className="duo-foot">
        <div className="duo-god-links">
          <Link to={`/gods/${a?.id}`}>{a?.name}</Link>
          <span>×</span>
          <Link to={`/gods/${b?.id}`}>{b?.name}</Link>
        </div>
        <div className="tag-row">
          {duo.tags.slice(0, 2).map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </footer>
    </article>
  );
}

export function GuideCard({ guide, featured = false }) {
  return (
    <Link
      to={`/guides/${guide.id}`}
      className={`guide-card panel ${featured ? "guide-card-featured" : ""}`}
    >
      <div className="guide-top">
        <span className="category">{guide.category}</span>
        <span className="guide-read">{guide.readTime}</span>
      </div>
      <div className="guide-copy">
        <h3>{guide.title}</h3>
        <p>{guide.summary}</p>
      </div>
      <div className="tag-row">
        {guide.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <span className="text-link">
        阅读这篇
        <ArrowIcon />
      </span>
    </Link>
  );
}

function BuildCoreItem({ item }) {
  const parts = item.split(" · ");
  const godName = parts.length > 1 ? parts[0] : null;
  const rawName = parts.length > 1 ? parts.slice(1).join(" · ") : item;
  const name = rawName.replace(/（.*?）$/, "");

  return (
    <li>
      {godName && <span className="build-core-god">{godName} · </span>}
      <BoonChip className="build-boon" name={name} />
    </li>
  );
}

export function BuildCard({ build, gods, compact = false, index = 0 }) {
  const navigate = useNavigate();
  const aspectPath = build.aspectPaths?.[0];
  const target = aspectPath ? `/weapons#${aspectPath}` : null;

  const handleCardActivate = (event) => {
    if (!target) return;
    navigate(target);
  };

  const handleCardClick = (event) => {
    if (!target) return;
    // 卡片内的祝福按钮、链接有自己的行为，不触发整卡跳转
    if (event.target.closest("button, a")) return;
    handleCardActivate(event);
  };

  const handleCardKeyDown = (event) => {
    if (!target) return;
    if (event.target !== event.currentTarget) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleCardActivate(event);
    }
  };

  return (
    <article
      className={`build-card panel ${compact ? "build-card-compact" : ""} ${
        target ? "is-clickable" : ""
      }`}
      id={compact ? undefined : `build-${build.id}`}
      onClick={target ? handleCardClick : undefined}
      onKeyDown={target ? handleCardKeyDown : undefined}
      role={target ? "link" : undefined}
      tabIndex={target ? 0 : undefined}
      aria-label={target ? `${build.name}：查看对应武器形态与流派` : undefined}
    >
      <div className="build-top">
        <div className="build-gods">
          {gods.map((god) => (
            <Medallion key={god.id} god={god} size={38} />
          ))}
          <span className="build-no">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="build-chips">
          <span className="mini-chip">难度 {build.difficulty}</span>
          <span className="mini-chip">{build.heat}</span>
        </div>
      </div>
      <div className="build-heading">
        <span className="kicker">BUILD / {build.en}</span>
        <h3>{build.name}</h3>
        <p>{build.tagline}</p>
      </div>
      <div className="build-weapon">
        <span>武器</span>
        {build.weapon}
      </div>
      {compact ? (
        <>
          <ul className="build-core">
            {build.core.map((item) => (
              <BuildCoreItem item={item} key={item} />
            ))}
          </ul>
          <Link className="text-link" to={`/guides/five-builds#build-${build.id}`}>
            查看完整思路
            <ArrowIcon />
          </Link>
        </>
      ) : (
        <>
          <div className="build-body">
            <div className="build-col">
              <ul className="build-core">
                {build.core.map((item) => (
                  <BuildCoreItem item={item} key={item} />
                ))}
              </ul>
              <p className="build-playstyle">{build.playstyle}</p>
            </div>
            <div className="build-col">
              <div className="build-block">
                <h4>成型顺序</h4>
                <ol className="build-steps">
                  {build.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </div>
              <div className="build-block">
                <h4>实战提醒</h4>
                <ul className="build-tips">
                  {build.tips.map((tip) => (
                    <li key={tip}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="build-aspects">
            {build.aspects.map((aspect, aspectIndex) => {
              const path = build.aspectPaths?.[aspectIndex];
              return path ? (
                <Link
                  key={aspect}
                  className="build-aspect-link"
                  to={`/weapons#${path}`}
                >
                  {aspect}
                  <ArrowIcon size={11} />
                </Link>
              ) : (
                <span key={aspect}>{aspect}</span>
              );
            })}
          </div>
        </>
      )}
    </article>
  );
}
