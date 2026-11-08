import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gods, slotLabel } from "../data/gods";
import { duos } from "../data/duos";
import { guides } from "../data/guides";
import { builds } from "../data/builds";
import { weapons } from "../data/weapons";
import GodIcon from "./GodIcon";
import { ArrowIcon, CloseIcon, ScrollIcon, SearchIcon } from "./Icons";

const TYPE_ORDER = ["神明", "祝福", "双重祝福", "武器", "构筑", "攻略"];

export default function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  const index = useMemo(
    () => [
      ...gods.map((god) => ({
        type: "神明",
        id: `god-${god.id}`,
        title: god.name,
        subtitle: `${god.en} · ${god.title}`,
        meta: god.domain,
        text: god.overview,
        to: `/gods/${god.id}`,
        tone: god.color,
        sigil: god.id,
      })),
      ...gods.flatMap((god) =>
        (god.boons ?? []).map((boon) => ({
          type: "祝福",
          id: `boon-${god.id}-${boon.en}`,
          title: boon.name,
          subtitle: `${boon.en} · ${god.name}`,
          meta: slotLabel(boon.slot),
          text: boon.effect,
          to: `/gods/${god.id}`,
          tone: god.color,
          sigil: god.id,
        })),
      ),
      ...duos.map((duo) => ({
        type: "双重祝福",
        id: `duo-${duo.id}`,
        title: duo.name,
        subtitle: `${duo.en} · ${gods.find((g) => g.id === duo.gods[0]).name} + ${
          gods.find((g) => g.id === duo.gods[1]).name
        }`,
        meta: duo.prereq,
        text: duo.effect,
        keywords: [
          duo.prereq,
          ...(duo.prereqGroups ?? []).flatMap((group) => [
            group.label,
            ...group.options.flatMap((option) => [option.name, option.tag]),
          ]),
        ].join(" "),
        to: `/duos#${duo.id}`,
        tone: gods.find((g) => g.id === duo.gods[0]).color,
        sigil: duo.gods[0],
      })),
      ...weapons.map((weapon) => ({
        type: "武器",
        id: `weapon-${weapon.id}`,
        title: weapon.name,
        subtitle: `${weapon.alias} · ${weapon.en}`,
        meta: `${weapon.role} · ${weapon.aspects.length} 种形态`,
        text: weapon.overview,
        to: `/weapons#${weapon.id}`,
        tone: weapon.color,
        iconSrc: weapon.icon,
      })),
      ...weapons.flatMap((weapon) =>
        weapon.aspects.map((aspect) => ({
          type: "武器",
          id: `aspect-${weapon.id}-${aspect.id}`,
          title: aspect.name,
          subtitle: `${weapon.name} · ${aspect.en}`,
          meta: `难度 ${aspect.difficulty}`,
          text: aspect.playstyle,
          to: `/weapons#${weapon.id}-${aspect.id}`,
          tone: weapon.color,
          iconSrc: weapon.icon,
        })),
      ),
      ...guides.map((guide) => ({
        type: "攻略",
        id: `guide-${guide.id}`,
        title: guide.title,
        subtitle: `${guide.category} · ${guide.readTime}`,
        meta: guide.tags.join(" / "),
        text: guide.summary,
        to: `/guides/${guide.id}`,
        tone: "#e8c37a",
        sigil: null,
      })),
      ...builds.map((build) => ({
        type: "构筑",
        id: `build-${build.id}`,
        title: build.name,
        subtitle: `${build.en} · ${build.gods
          .map((id) => gods.find((god) => god.id === id)?.name)
          .filter(Boolean)
          .join(" + ")}`,
        meta: `${build.weapon} · 难度 ${build.difficulty} · ${build.heat}`,
        text: `${build.tagline} ${build.playstyle} ${build.core.join(" ")}`,
        to: `/builds/${build.id}`,
        tone: gods.find((god) => god.id === build.gods[0])?.color ?? "#e8c37a",
        sigil: build.gods[0],
      })),
    ],
    [],
  );

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return index
      .filter((item) =>
        [item.title, item.subtitle, item.meta, item.text, item.keywords]
          .join(" ")
          .toLowerCase()
          .includes(q),
      )
      .slice(0, 28);
  }, [index, query]);

  const grouped = useMemo(() => {
    return TYPE_ORDER.map((type) => ({
      type,
      items: results.filter((item) => item.type === type).slice(0, 6),
    })).filter((group) => group.items.length > 0);
  }, [results]);

  useEffect(() => {
    if (!open) return undefined;
    setQuery("");
    const timer = window.setTimeout(() => inputRef.current?.focus(), 30);
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeRef.current();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) return null;

  const go = (to) => {
    onClose();
    navigate(to);
  };

  const onInputKeyDown = (event) => {
    if (event.key === "Enter" && results.length > 0) {
      event.preventDefault();
      go(results[0].to);
    }
  };

  const quickLinks = [
    { label: "诸神祝福图鉴", meta: "10 位神明 · 核心祝福", to: "/gods", tone: "#e8c37a", sigil: "zeus" },
    { label: "双重祝福", meta: `${duos.length} 组组合`, to: "/duos", tone: "#8b6cc9", sigil: "chaos" },
    {
      label: "武器选择",
      meta: "6 把武器 · 24 种形态",
      to: "/weapons",
      tone: "#f4d47c",
      iconSrc: "/icons/weapons/sword.png",
    },
    { label: "新手开局", meta: "从 0 开始的前 10 次逃亡", to: "/guides/start-here", tone: "#65d9cf", sigil: "hermes" },
    { label: "五套推荐构筑", meta: "每套一份独立档案", to: "/builds", tone: "#ff9fc4", sigil: "aphrodite" },
  ];

  return (
    <div
      className="search-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="全站搜索"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="search-shell">
        <div className="search-input-wrap">
          <SearchIcon size={22} />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={onInputKeyDown}
            placeholder="搜索神明、祝福、双重祝福、构筑或攻略…"
            aria-label="搜索关键词"
          />
          <button className="icon-button" type="button" onClick={onClose} aria-label="关闭搜索">
            <CloseIcon />
          </button>
        </div>

        <div className="search-body">
          {!query && (
            <div className="search-quick">
              <span className="kicker">QUICK ACCESS</span>
              {quickLinks.map((item) => (
                <button
                  key={item.to}
                  type="button"
                  className="search-row"
                  onClick={() => go(item.to)}
                  style={{ "--tone": item.tone }}
                >
                  <span className="search-icon">
                    {item.iconSrc ? (
                      <img className="search-weapon-icon" src={item.iconSrc} alt="" />
                    ) : (
                      <GodIcon id={item.sigil} size={26} />
                    )}
                  </span>
                  <span className="search-copy">
                    <strong>{item.label}</strong>
                    <small>{item.meta}</small>
                  </span>
                  <ArrowIcon />
                </button>
              ))}
            </div>
          )}

          {query && results.length === 0 && (
            <div className="search-empty">
              <span className="kicker">NO RESULT</span>
              <p>没有找到「{query}」。</p>
              <small>试试祝福英文名，例如 Sea Storm、Divine Dash。</small>
            </div>
          )}

          {query &&
            grouped.map((group) => (
              <div className="search-group" key={group.type}>
                <span className="search-group-label">{group.type}</span>
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className="search-row"
                    onClick={() => go(item.to)}
                    style={{ "--tone": item.tone }}
                  >
                    <span className="search-icon">
                      {item.iconSrc ? (
                        <img className="search-weapon-icon" src={item.iconSrc} alt="" />
                      ) : item.sigil ? (
                        <GodIcon id={item.sigil} size={26} />
                      ) : (
                        <ScrollIcon size={22} />
                      )}
                    </span>
                    <span className="search-copy">
                      <strong>{item.title}</strong>
                      <small>{item.subtitle}</small>
                      <em>{item.text}</em>
                    </span>
                    <span className="search-meta">{item.meta}</span>
                  </button>
                ))}
              </div>
            ))}
        </div>

        <div className="search-foot">
          <span>
            <kbd>Enter</kbd> 打开第一个结果
          </span>
          <span>
            <kbd>Esc</kbd> 关闭
          </span>
          <span className="search-count">{results.length > 0 ? `${results.length} 条结果` : ""}</span>
        </div>
      </div>
    </div>
  );
}
