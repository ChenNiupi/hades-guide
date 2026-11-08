import { Link } from "react-router-dom";
import { builds } from "../data/builds";
import { godMap } from "../data/gods";
import { duoMap } from "../data/duos";
import { BuildCard, Medallion } from "../components/UI";
import { ArrowIcon } from "../components/Icons";
import usePageTitle from "../components/usePageTitle";

export default function Builds() {
  usePageTitle("推荐构筑 · 冥府秘典");

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-inner">
            <div>
              <span className="kicker">
                <span className="kicker-line" />
                THE BUILD ARCHIVE
              </span>
              <h1>
                五套<span className="gold-text">构筑</span>
              </h1>
              <p>
                每一套都有独立的档案页：核心祝福、成型顺序、实战提醒、关键双重与适配武器形态。
                先照抄一套能稳定通关的，再慢慢改成自己的。
              </p>
            </div>
            <div className="page-hero-aside">
              <span className="aside-number">{builds.length}</span>
              <span className="aside-label">套实战构筑 / 覆盖 0–30 热度</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tight">
        <div className="container">
          <div className="build-grid build-grid-article">
            {builds.map((build, index) => (
              <BuildCard
                key={build.id}
                build={build}
                index={index}
                gods={build.gods.map((id) => godMap[id])}
                compact
              />
            ))}
          </div>

          <div className="build-compare panel">
            <div className="build-compare-head">
              <div>
                <span className="kicker">AT A GLANCE</span>
                <h2>横向对照</h2>
              </div>
              <Link className="text-link" to="/guides/five-builds">
                读完整的构筑文章
                <ArrowIcon />
              </Link>
            </div>
            <div className="build-compare-scroll">
              <table className="build-compare-table">
                <thead>
                  <tr>
                    <th>构筑</th>
                    <th>主神</th>
                    <th>武器</th>
                    <th>难度</th>
                    <th>热度</th>
                    <th>核心双重</th>
                  </tr>
                </thead>
                <tbody>
                  {builds.map((build, index) => {
                    const duo = duoMap[build.duoId];
                    return (
                      <tr key={build.id}>
                        <td>
                          <Link className="build-compare-name" to={`/builds/${build.id}`}>
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            {build.name}
                          </Link>
                        </td>
                        <td>
                          <span className="build-compare-gods">
                            {build.gods.map((id) => (
                              <Medallion key={id} god={godMap[id]} size={22} />
                            ))}
                            <span>
                              {build.gods.map((id) => godMap[id].name).join(" + ")}
                            </span>
                          </span>
                        </td>
                        <td>{build.weapon}</td>
                        <td>{build.difficulty}</td>
                        <td>{build.heat.replace(/^适合\s*/, "")}</td>
                        <td>
                          {duo ? (
                            <Link to={`/duos#${duo.id}`}>{duo.name}</Link>
                          ) : (
                            "—"
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="build-links">
            <Link className="button button-primary" to="/guides/five-builds">
              读《五套构筑》文章
            </Link>
            <Link className="button button-ghost" to="/weapons">
              先挑一把武器
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
