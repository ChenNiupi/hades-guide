import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { guideCategories, guides } from "../data/guides";
import { GuideCard } from "../components/UI";
import { ArrowIcon, CloseIcon, SearchIcon, SparkIcon } from "../components/Icons";
import usePageTitle from "../components/usePageTitle";

export default function Guides() {
  usePageTitle("攻略站 · 冥府秘典");
  const [category, setCategory] = useState("全部");
  const [query, setQuery] = useState("");
  const featured = guides.find((guide) => guide.featured) ?? guides[0];

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return guides.filter((guide) => {
      if (category !== "全部" && guide.category !== category) return false;
      if (!q) return true;
      return [guide.title, guide.summary, guide.category, ...guide.tags]
        .join(" ")
        .toLowerCase()
        .includes(q);
    });
  }, [category, query]);

  const showFeatured = category === "全部" && !query;
  const gridGuides = showFeatured
    ? filtered.filter((guide) => guide.id !== featured.id)
    : filtered;

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div>
              <span className="kicker">
                <span className="kicker-line" />
                THE GUIDE HALL
              </span>
              <h1>
                攻略<span className="gold-text">站</span>
              </h1>
              <p>
                从第一次逃亡到高热度挑战。先看机制，再看构筑，最后把 Boss 的招式
                拆成可以练习的节拍。
              </p>
            </div>
            <div className="page-hero-aside">
              <span className="aside-number">{guides.length}</span>
              <span className="aside-label">篇实战攻略 / 持续更新</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          {showFeatured && (
            <Link className="featured-guide panel" to={`/guides/${featured.id}`}>
              <div className="featured-guide-main">
                <span className="kicker">START HERE</span>
                <h2>{featured.title}</h2>
                <p>{featured.summary}</p>
                <div className="tag-row">
                  {featured.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="button button-primary">
                  从这篇开始
                  <ArrowIcon />
                </span>
              </div>
              <div className="featured-guide-side">
                <span className="featured-category">{featured.category}</span>
                <span className="featured-read">{featured.readTime}</span>
                <span className="featured-seal" aria-hidden="true">
                  <SparkIcon size={34} />
                </span>
                <small>写给第一次逃出冥界的你</small>
              </div>
            </Link>
          )}

          <div className="filter-bar panel guide-filter">
            <label className="search-field">
              <SearchIcon size={18} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="搜索攻略，例如：Boss、热度、投弹"
                aria-label="搜索攻略"
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
            <div className="filter-chips" role="group" aria-label="按分类筛选攻略">
              {guideCategories.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`chip ${category === item ? "is-active" : ""}`}
                  onClick={() => setCategory(item)}
                  aria-pressed={category === item}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="result-bar">
            <span>
              <SparkIcon size={14} />
              {filtered.length} 篇攻略
              {query && ` · 搜索「${query}」`}
            </span>
            {(query || category !== "全部") && (
              <button
                type="button"
                className="text-button"
                onClick={() => {
                  setQuery("");
                  setCategory("全部");
                }}
              >
                重置筛选
              </button>
            )}
          </div>

          {gridGuides.length > 0 ? (
            <div className="guide-grid guide-grid-page">
              {gridGuides.map((guide) => (
                <GuideCard key={guide.id} guide={guide} />
              ))}
            </div>
          ) : (
            <div className="empty-state panel">
              <span className="kicker">NO GUIDES FOUND</span>
              <h2>没有匹配的攻略</h2>
              <p>换一个分类或关键词试试。</p>
            </div>
          )}

          <div className="reading-path panel">
            <div className="reading-path-head">
              <span className="kicker">READING PATH</span>
              <h2>推荐阅读顺序</h2>
              <p>不用一次读完。按逃亡阶段来，缺什么补什么。</p>
            </div>
            <div className="reading-steps">
              <Link to="/guides/start-here">
                <span>01</span>
                <strong>先活下来</strong>
                <small>新手开局</small>
              </Link>
              <Link to="/guides/build-fundamentals">
                <span>02</span>
                <strong>看懂构筑</strong>
                <small>槽位与状态</small>
              </Link>
              <Link to="/builds">
                <span>03</span>
                <strong>抄一套</strong>
                <small>五套稳定构筑</small>
              </Link>
              <Link to="/guides/bosses">
                <span>04</span>
                <strong>拆 Boss</strong>
                <small>招式攻略</small>
              </Link>
              <Link to="/guides/heat">
                <span>05</span>
                <strong>加热度</strong>
                <small>惩罚契约</small>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
