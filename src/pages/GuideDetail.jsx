import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { getGuide, guides } from "../data/guides";
import { godMap } from "../data/gods";
import { duoMap } from "../data/duos";
import { builds } from "../data/builds";
import NotFound from "./NotFound";
import { BuildCard, Medallion } from "../components/UI";
import { ArrowIcon, ChevronIcon, ScrollIcon, SparkIcon } from "../components/Icons";
import usePageTitle from "../components/usePageTitle";

function ArticleSection({ section }) {
  return (
    <section className="article-section" id={section.id}>
      <h2>{section.heading}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.list && (
        <ul className="article-list">
          {section.list.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
      {section.roomChoices && (
        <ul className="room-choice-list">
          {section.roomChoices.map((item) => (
            <li key={item.text}>
              <span
                className={`room-choice-icons ${item.icons.length > 1 ? "is-pair" : ""}`}
              >
                {item.icons.map((icon) => (
                  <img
                    key={icon.id}
                    src={`/icons/rooms/${icon.id}.png`}
                    alt={`${icon.label}图标`}
                  />
                ))}
              </span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      )}
      {section.ordered && (
        <ol className="article-list article-list-ordered">
          {section.ordered.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      )}
      {section.table && (
        <div className="article-table-wrap">
          <table className="article-table">
            <thead>
              <tr>
                {section.table.headers.map((header) => (
                  <th key={header}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.table.rows.map((row) => (
                <tr key={row.join("|")}>
                  {row.map((cell) => (
                    <td key={cell}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {section.callout && (
        <div className="article-callout panel">
          <div className="callout-mark">
            <SparkIcon size={16} />
          </div>
          <div>
            <span className="kicker">NOTE</span>
            <h4>{section.callout.title}</h4>
            <p>{section.callout.text}</p>
          </div>
        </div>
      )}
      {section.link && (
        <p className="article-section-link">
          <Link className="text-link" to={section.link.to}>
            {section.link.label}
            <ArrowIcon />
          </Link>
        </p>
      )}
    </section>
  );
}

export default function GuideDetail() {
  const { guideId } = useParams();
  const { hash } = useLocation();
  const guide = getGuide(guideId);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");
  const articleRef = useRef(null);
  usePageTitle(guide ? `${guide.title} · 冥府秘典` : "攻略未找到 · 冥府秘典");

  useEffect(() => {
    if (!hash) return undefined;
    const id = hash.slice(1);
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 180);
    return () => window.clearTimeout(timer);
  }, [hash, guideId]);

  useEffect(() => {
    if (!guide) return undefined;
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const max =
          document.documentElement.scrollHeight - window.innerHeight;
        setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [guide]);

  useEffect(() => {
    if (!guide) return undefined;
    const ids = [
      ...guide.sections.map((section) => section.id),
      ...(guide.showBuilds ? ["builds"] : []),
    ];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveSection(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0, 1] },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [guide]);

  if (!guide) {
    return <NotFound />;
  }

  const guideIndex = guides.findIndex((item) => item.id === guide.id);
  const previous = guides[(guideIndex - 1 + guides.length) % guides.length];
  const next = guides[(guideIndex + 1) % guides.length];
  const relatedGods = (guide.relatedGods ?? []).map((id) => godMap[id]);
  const relatedDuos = (guide.relatedDuos ?? []).map((id) => duoMap[id]);
  const toc = [
    ...guide.sections.map((section) => ({
      id: section.id,
      label: section.heading,
    })),
  ];
  if (guide.showBuilds) {
    toc.splice(1, 0, { id: "builds", label: "五套构筑" });
  }

  return (
    <div className="page article-page">
      <div className="reading-progress" style={{ width: `${progress}%` }} />

      <section className="article-hero">
        <div className="container">
          <nav className="breadcrumb" aria-label="面包屑">
            <Link to="/guides">攻略站</Link>
            <ChevronIcon size={12} />
            <span>{guide.category}</span>
          </nav>
          <div className="article-hero-inner">
            <div className="article-hero-main">
              <span className="category">{guide.category}</span>
              <h1>{guide.title}</h1>
              <p>{guide.summary}</p>
              <div className="article-meta">
                <span>
                  <ScrollIcon size={14} />
                  {guide.readTime}
                </span>
                <span>{guide.level}</span>
                <span>更新于 {guide.updated}</span>
              </div>
              <div className="tag-row">
                {guide.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="article-seal" aria-hidden="true">
              <span>{guide.en}</span>
              <ScrollIcon size={46} />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container article-grid">
          <article className="article-body" ref={articleRef}>
            {guide.sections.map((section, index) => (
              <div key={section.id}>
                <ArticleSection section={section} />
                {guide.showBuilds && index === 0 && (
                  <section className="article-section build-section" id="builds">
                    <h2>五套构筑，按节奏挑一套</h2>
                    <p>
                      每套都写清楚核心祝福、双重祝福、武器形态与成型顺序。
                      先照抄，再根据当局拿到的祝福微调。
                    </p>
                    <div className="build-grid build-grid-article">
                      {builds.map((build, buildIndex) => (
                        <BuildCard
                          key={build.id}
                          build={build}
                          index={buildIndex}
                          gods={build.gods.map((id) => godMap[id])}
                        />
                      ))}
                    </div>
                  </section>
                )}
              </div>
            ))}

            {(relatedGods.length > 0 || relatedDuos.length > 0) && (
              <div className="article-related panel">
                <span className="kicker">RELATED</span>
                <h2>相关图鉴</h2>
                {relatedGods.length > 0 && (
                  <div className="related-gods">
                    {relatedGods.map((god) => (
                      <Link key={god.id} to={`/gods/${god.id}`} className="related-god">
                        <Medallion god={god} size={40} />
                        <span className="related-god-copy">
                          <strong>{god.name}</strong>
                          <small>{god.domain}</small>
                        </span>
                        <ArrowIcon size={14} />
                      </Link>
                    ))}
                  </div>
                )}
                {relatedDuos.length > 0 && (
                  <div className="related-duos">
                    {relatedDuos.map((duo) => (
                      <Link key={duo.id} to={`/duos#${duo.id}`}>
                        {duo.name}
                        <span>{duo.en}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className="article-footnote">
              <span>最后说明</span>
              <p>
                本文基于 Hades v1.0 的基础机制与实战经验整理。祝福数值、热度悬赏与
                敌人行为可能随版本变化；若与游戏内文本冲突，请以游戏内为准。
              </p>
            </div>
          </article>

          <aside className="article-aside">
            <div className="toc panel">
              <span className="kicker">IN THIS GUIDE</span>
              <nav aria-label="本篇目录">
                {toc.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={activeSection === item.id ? "is-active" : ""}
                    onClick={() => {
                      setActiveSection(item.id);
                      document.getElementById(item.id)?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              <Link className="text-link" to="/guides">
                返回攻略站
                <ArrowIcon />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="pager">
            <Link className="pager-link" to={`/guides/${previous.id}`}>
              <span>上一篇</span>
              <strong>
                <ChevronIcon size={13} />
                {previous.title}
              </strong>
            </Link>
            <Link className="pager-link pager-next" to={`/guides/${next.id}`}>
              <span>下一篇</span>
              <strong>
                {next.title}
                <ChevronIcon size={13} />
              </strong>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
