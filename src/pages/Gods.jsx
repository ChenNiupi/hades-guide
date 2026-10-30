import { useMemo, useState } from "react";
import { gods } from "../data/gods";
import { GodCard, SectionHead } from "../components/UI";
import { CloseIcon, SearchIcon, SparkIcon } from "../components/Icons";
import usePageTitle from "../components/usePageTitle";

const FILTERS = ["全部", "输出", "控制", "生存", "功能"];

export default function Gods() {
  usePageTitle("诸神祝福 · 冥府秘典");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("全部");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return gods.filter((god) => {
      const matchesFilter = filter === "全部" || god.tags.includes(filter);
      if (!matchesFilter) return false;
      if (!q) return true;
      const haystack = [
        god.name,
        god.en,
        god.title,
        god.domain,
        god.tagline,
        god.overview,
        ...god.tags,
        ...(god.boons ?? []).flatMap((boon) => [
          boon.name,
          boon.en,
          boon.effect,
        ]),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, filter]);

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div>
              <span className="kicker">
                <span className="kicker-line" />
                THE OLYMPIAN CODEX
              </span>
              <h1>
                诸神的<span className="gold-text">祝福</span>
              </h1>
              <p>
                十位神明，各自代表一种战斗语言。先看定位与核心祝福，
                再决定这一局要把哪个槽位交给谁。
              </p>
            </div>
            <div className="page-hero-aside">
              <span className="aside-number">{gods.length}</span>
              <span className="aside-label">位神明 / 包括赫尔墨斯与卡俄斯</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="filter-bar panel">
            <label className="search-field">
              <SearchIcon size={18} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="搜索神明或祝福，例如：海潮冲刺、Divine Dash"
                aria-label="搜索神明或祝福"
              />
              {query && (
                <button
                  type="button"
                  className="clear-button"
                  onClick={() => setQuery("")}
                  aria-label="清空搜索"
                >
                  <CloseIcon size={15} />
                </button>
              )}
            </label>
            <div className="filter-chips" role="group" aria-label="按定位筛选">
              {FILTERS.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`chip ${filter === item ? "is-active" : ""}`}
                  onClick={() => setFilter(item)}
                  aria-pressed={filter === item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="result-bar">
            <span>
              <SparkIcon size={14} />
              {filtered.length} 位神明
              {query && ` · 搜索「${query}」`}
            </span>
            {(query || filter !== "全部") && (
              <button
                type="button"
                className="text-button"
                onClick={() => {
                  setQuery("");
                  setFilter("全部");
                }}
              >
                重置筛选
              </button>
            )}
          </div>

          {filtered.length > 0 ? (
            <div className="god-grid">
              {filtered.map((god) => (
                <GodCard key={god.id} god={god} />
              ))}
            </div>
          ) : (
            <div className="empty-state panel">
              <span className="kicker">NO GODS FOUND</span>
              <h2>没有匹配的神明</h2>
              <p>换一个关键词，或把定位筛选切回「全部」。</p>
            </div>
          )}

          <div className="data-note">
            <span>阅读提示</span>
            <p>
              本页祝福名称与效果描述取自 Hades v1.0 游戏内简体中文文本；状态名沿用
              游戏内叫法（如「醉酒」「冷冻」「心惊胆战」）。数值会随稀有度与等级变化，
              完整数值请以游戏内为准。神明图标与立绘来自游戏内资源，仅作非商业粉丝展示。
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead
            kicker="NEXT STEP"
            title="从一位神，走向一组双重祝福"
            desc="祝福图鉴负责告诉你单神能做什么，双重祝福负责告诉你两位神能一起做什么。"
            action={{ to: "/duos", label: "浏览双重祝福" }}
          />
        </div>
      </section>
    </div>
  );
}
