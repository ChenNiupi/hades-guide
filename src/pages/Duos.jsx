import { useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { duos } from "../data/duos";
import { godMap, gods } from "../data/gods";
import { DuoCard, Medallion, TierBadge } from "../components/UI";
import { BoonChip } from "../components/BoonInfo";
import GodIcon from "../components/GodIcon";
import { ArrowIcon, CloseIcon, SparkIcon } from "../components/Icons";
import usePageTitle from "../components/usePageTitle";

const duoGods = gods.filter((god) => duos.some((duo) => duo.gods.includes(god.id)));

export default function Duos() {
  usePageTitle("双重祝福 · 冥府秘典");
  const [query, setQuery] = useState("");
  const [godPair, setGodPair] = useState(["all", "all"]);
  const { hash } = useLocation();

  const activeGods = useMemo(
    () => [...new Set(godPair.filter((id) => id !== "all"))],
    [godPair],
  );

  const legendaryMode = godPair[0] !== "all" && godPair[0] === godPair[1];
  const legendaryGod = legendaryMode ? godMap[godPair[0]] : null;

  const chooseGod = (row, id) => {
    setGodPair((prev) => {
      const next = [...prev];
      next[row] = id;
      return next;
    });
  };

  const resetFilters = () => {
    setQuery("");
    setGodPair(["all", "all"]);
  };

  useEffect(() => {
    if (!hash) return undefined;
    const id = hash.slice(1);
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 120);
    return () => window.clearTimeout(timer);
  }, [hash]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return duos.filter((duo) => {
      if (activeGods.length && !activeGods.every((id) => duo.gods.includes(id))) return false;
      if (!q) return true;
      const names = duo.gods.map((id) => godMap[id]).flatMap((god) => [
        god.name,
        god.en,
        god.title,
        god.domain,
      ]);
      const haystack = [
        duo.name,
        duo.en,
        duo.effect,
        duo.prereq,
        duo.note,
        ...duo.tags,
        ...names,
        ...(duo.prereqGroups ?? []).flatMap((group) => [
          group.label,
          ...group.options.flatMap((option) => [option.name, option.tag]),
        ]),
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [query, activeGods]);

  const legendaryAll = useMemo(() => {
    if (!legendaryGod) return [];
    return (legendaryGod.boons ?? []).filter((boon) => boon.slot === "legendary");
  }, [legendaryGod]);

  const legendaryBoons = useMemo(() => {
    const q = query.trim().toLowerCase();
    return legendaryAll.filter((boon) => {
      if (!q) return true;
      return [boon.name, boon.en, boon.effect, boon.note]
        .filter(Boolean)
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [legendaryAll, query]);

  return (
    <div className="page">
      <section className="page-hero duo-page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div>
              <span className="kicker">
                <span className="kicker-line" />
                DUO BOONS
              </span>
              <h1>
                双重<span className="gold-text">祝福</span>
              </h1>
              <p>
                两位神明的力量交汇，往往比单神堆叠更彻底地改变一套构筑。
                先凑前置，再等命运把组合递到你面前。
              </p>
            </div>
            <div className="page-hero-aside">
              <span className="aside-number">{duos.length}</span>
              <span className="aside-label">组双重祝福 / 8 位奥林匹斯神明</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="rule-grid">
            <div className="rule-card panel">
              <span className="rule-no">01</span>
              <h3>前置成组</h3>
              <p>
                需要同时满足每组前置中的一项；有些组合还会额外要求反击或特定状态祝福。
                双重祝福卡片中会直接列出全部官方可选前置。
              </p>
            </div>
            <div className="rule-card panel">
              <span className="rule-no">02</span>
              <h3>稀有度加成</h3>
              <p>前置祝福的稀有度越高，双重祝福出现的概率越高。众神遗产同样有效。</p>
            </div>
            <div className="rule-card panel">
              <span className="rule-no">03</span>
              <h3>效果固定</h3>
              <p>双重祝福不受稀有度影响，效果固定，但会占用一个祝福位。</p>
            </div>
          </div>

          <div className="filter-bar panel duo-filter">
            <label className="search-field">
              <span className="sr-only">搜索双重祝福</span>
              <SparkIcon size={17} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={
                  legendaryMode
                    ? `搜索${legendaryGod.name}的传奇祝福`
                    : "搜索双重祝福，例如：海上风暴、狩猎之刃、Sea Storm"
                }
                aria-label={legendaryMode ? "搜索传奇祝福" : "搜索双重祝福"}
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
            <div className="duo-god-rows">
              {["神一", "神二"].map((label, row) => (
                <div className="duo-god-row" key={label}>
                  <span className="duo-god-row-label">{label}</span>
                  <div className="god-filter" role="group" aria-label={`按第${row + 1}位神筛选`}>
                    <button
                      type="button"
                      className={`chip ${godPair[row] === "all" ? "is-active" : ""}`}
                      onClick={() => chooseGod(row, "all")}
                      aria-pressed={godPair[row] === "all"}
                    >
                      不限
                    </button>
                    {duoGods.map((god) => (
                      <button
                        key={god.id}
                        type="button"
                        className={`chip chip-god ${godPair[row] === god.id ? "is-active" : ""}`}
                        onClick={() => chooseGod(row, god.id)}
                        aria-pressed={godPair[row] === god.id}
                        style={{ "--tone": god.color }}
                      >
                        <GodIcon id={god.id} size={16} />
                        {god.name}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="result-bar">
            <span>
              <SparkIcon size={14} />
              {legendaryMode ? (
                <>
                  {legendaryBoons.length} 条传奇祝福 · {legendaryGod.name}
                  {query && ` · 搜索「${query}」`}
                </>
              ) : (
                <>
                  {filtered.length} 组双重祝福
                  {activeGods.length > 0 &&
                    ` · ${activeGods.map((id) => godMap[id].name).join(" × ")}${
                      activeGods.length === 1 ? "参与" : ""
                    }`}
                  {query && ` · 搜索「${query}」`}
                </>
              )}
            </span>
            {(query || activeGods.length > 0) && (
              <button type="button" className="text-button" onClick={resetFilters}>
                重置筛选
              </button>
            )}
          </div>

          {legendaryMode ? (
            legendaryBoons.length > 0 ? (
              <div className="legendary-list">
                {legendaryBoons.map((boon) => (
                  <article
                    className="legendary-spotlight panel"
                    key={boon.name}
                    style={{ "--god": legendaryGod.color }}
                  >
                    <div className="legendary-seal">
                      <Medallion god={legendaryGod} size={96} />
                    </div>
                    <div className="legendary-main">
                      <div className="legendary-topline">
                        <span className="kicker">
                          LEGENDARY BOON · {legendaryGod.en.toUpperCase()}
                        </span>
                        <TierBadge tier={boon.tier} />
                      </div>
                      <h2>{boon.name}</h2>
                      <div className="legendary-meta">
                        <span>{boon.en}</span>
                        <em>
                          {legendaryGod.title} · {legendaryGod.domain}
                        </em>
                      </div>
                      <p className="legendary-effect">{boon.effect}</p>
                      {boon.prereqGroups?.length > 0 && (
                        <div className="legendary-prereq">
                          <div className="prereq-head">
                            <span>前置条件</span>
                            <small>
                              {boon.prereqGroups.length > 1
                                ? "每组任选其一"
                                : "官方要求"}
                            </small>
                          </div>
                          <div className="prereq-groups">
                            {boon.prereqGroups.map((group) => (
                              <div className="prereq-group" key={group.label}>
                                <b>{group.label}</b>
                                <div className="prereq-options">
                                  {group.options.map((option) => (
                                    <BoonChip
                                      className="prereq-chip"
                                      key={option}
                                      name={option}
                                    />
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      {boon.note && (
                        <p className="legendary-note">补充：{boon.note}</p>
                      )}
                      <Link
                        className="text-link"
                        to={`/gods/${legendaryGod.id}`}
                      >
                        查看{legendaryGod.name}全部祝福
                        <ArrowIcon />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="empty-state panel">
                <span className="kicker">
                  {legendaryAll.length === 0 ? "NO LEGENDARY BOON" : "NO LEGENDARY FOUND"}
                </span>
                <h2>
                  {legendaryAll.length === 0
                    ? `${legendaryGod.name}暂无收录的传奇祝福`
                    : "没有匹配的传奇祝福"}
                </h2>
                <p>
                  {legendaryAll.length === 0
                    ? `把任意一行改回「不限」，即可查看与${legendaryGod.name}相关的双重祝福。`
                    : "换一个关键词，或清空搜索后再试。"}
                </p>
              </div>
            )
          ) : filtered.length > 0 ? (
            <div className="duo-grid">
              {filtered.map((duo) => (
                <DuoCard key={duo.id} duo={duo} />
              ))}
            </div>
          ) : (
            <div className="empty-state panel">
              <span className="kicker">NO DUOS FOUND</span>
              <h2>没有匹配的组合</h2>
              <p>这两位神明没有可获取的双重祝福，换一组搭配，或试试英文原名。</p>
            </div>
          )}

          <div className="duo-tips panel">
            <div>
              <span className="kicker">HOW TO FISH FOR DUOS</span>
              <h2>怎么稳定刷出双重祝福</h2>
              <p>
                双重祝福不是纯运气。通过信物、夜之圣镜和祝福品质，你可以明显提高它出现的概率。
              </p>
            </div>
            <ol>
              <li>先确定目标双重祝福，再反推两位神的前置祝福，开局信物按顺序带。</li>
              <li>点出众神遗产，并尽量让前置祝福以高稀有度入手。</li>
              <li>不要为了凑前置拿完全用不上的祝福，否则即使刷出双重祝福也未必能打。</li>
              <li>如果连续几层都不出，及时转向当前已经成型的组合，别把整局赌在一个组合上。</li>
            </ol>
            <button
              type="button"
              className="text-link text-link-button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              回到顶部
              <ArrowIcon />
            </button>
          </div>

          <div className="data-note">
            <span>数据说明</span>
            <p>
              按游戏内实际可获取的前置表收录 28 组双重祝福；「烟幕屏障」仅存在于文本
              资源，未进入实际抽取表，故未收录。中文名称取自 Hades v1.0 游戏内简体中文
              文本，英文原名保留用于对照。神明图标与祝福文本版权归 Supergiant Games，
              本站仅作非商业粉丝展示。赫尔墨斯与卡俄斯不参与双重祝福组合。
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
