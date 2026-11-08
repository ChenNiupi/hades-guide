import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { gods, totalBoons } from "../data/gods";
import { duos } from "../data/duos";
import { guides } from "../data/guides";
import { builds } from "../data/builds";
import { weapons } from "../data/weapons";
import { godMap } from "../data/gods";
import { BuildCard, GuideCard, Medallion, SectionHead, Tag } from "../components/UI";
import WeaponIcon from "../components/WeaponIcon";
import { ArrowIcon, ExternalIcon, ScrollIcon, SparkIcon } from "../components/Icons";
import usePageTitle from "../components/usePageTitle";

export default function Home() {
  usePageTitle("冥府秘典 · HADES I 攻略站");
  const navigate = useNavigate();
  const [duoIndex, setDuoIndex] = useState(0);
  const featuredDuo = duos[duoIndex];
  const duoA = godMap[featuredDuo.gods[0]];
  const duoB = godMap[featuredDuo.gods[1]];
  const featuredGuides = guides.filter((guide) => guide.featured).slice(0, 1);
  const homeGuides = [...featuredGuides, ...guides.filter((guide) => guide.id !== "start-here")].slice(0, 3);
  const homeBuilds = builds.slice(0, 3);

  return (
    <>
      <section className="hero">
        <div className="hero-ghost" aria-hidden="true">
          HADES
        </div>
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="hero-kicker">
              <span className="kicker-line" />
              HADES I · 非官方中文秘典
            </span>
            <h1>
              在冥河之畔，
              <br />
              <span className="gold-text">写下你的逃脱路线。</span>
            </h1>
            <p className="hero-lede">
              诸神祝福、双重祝福与实战攻略。无论你是第一次踏出冥府，
              还是准备挑战更高热度，这里都有一份属于你的构筑。
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" to="/gods">
                <SparkIcon size={15} />
                查阅诸神祝福
              </Link>
              <Link className="button button-ghost" to="/guides">
                阅读通关攻略
                <ArrowIcon />
              </Link>
              <a
                className="button button-ghost"
                href="https://hades.fandom.com/zh/wiki/Hades_Wiki"
                target="_blank"
                rel="noopener noreferrer"
                title="前往 Hades 中文维基（外部站点）"
              >
                哈迪斯中文维基
                <ExternalIcon />
              </a>
            </div>
            <div className="hero-stats">
              <div>
                <strong>{gods.length}</strong>
                <span>位神明</span>
              </div>
              <div>
                <strong>{totalBoons}</strong>
                <span>条核心祝福</span>
              </div>
              <div>
                <strong>{duos.length}</strong>
                <span>组双重祝福</span>
              </div>
              <div>
                <strong>{guides.length}</strong>
                <span>篇攻略</span>
              </div>
            </div>
          </div>

          <div className="hero-art">
            <div className="oracle-glow" aria-hidden="true" />
            <div className="oracle-card panel">
              <div className="oracle-top">
                <span className="kicker">DUO OF THE NIGHT</span>
                <span className="oracle-count">
                  {String(duoIndex + 1).padStart(2, "0")} / {duos.length}
                </span>
              </div>
              <div className="oracle-pair">
                <Medallion god={duoA} size={72} />
                <span className="oracle-plus">+</span>
                <Medallion god={duoB} size={72} />
              </div>
              <div className="oracle-names">
                <h2>{featuredDuo.name}</h2>
                <span>{featuredDuo.en}</span>
              </div>
              <p className="oracle-effect">{featuredDuo.effect}</p>
              <div className="oracle-prereq">
                <span>前置</span>
                {featuredDuo.prereq}
              </div>
              <div className="oracle-actions">
                <Link className="text-link" to={`/duos#${featuredDuo.id}`}>
                  查看图鉴
                  <ArrowIcon />
                </Link>
                <button
                  type="button"
                  className="oracle-shuffle"
                  onClick={() => setDuoIndex((index) => (index + 1) % duos.length)}
                >
                  换一个
                </button>
              </div>
              <div className="oracle-dots" aria-hidden="true">
                {duos.slice(0, 8).map((duo, index) => (
                  <button
                    key={duo.id}
                    type="button"
                    className={index === duoIndex % 8 ? "is-active" : ""}
                    onClick={() => setDuoIndex(index)}
                    tabIndex={-1}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section route-section">
        <div className="container">
          <SectionHead
            kicker="THE TWO PATHS"
            title="两条路线，一张冥府地图"
            desc="先认识神，再学会用他们。祝福图鉴负责查，攻略站负责教。"
          />
          <div className="route-grid">
            <Link className="route-card panel" to="/gods">
              <div className="route-top">
                <span className="route-index">01</span>
                <div className="route-sigils">
                  {gods.slice(0, 6).map((god) => (
                    <Medallion key={god.id} god={god} size={36} />
                  ))}
                </div>
              </div>
              <h3>诸神的祝福</h3>
              <p>
                十位神明的核心祝福、定位与搭配方向。按神明、槽位与关键词检索，
                再顺着双重祝福找到下一套构筑。
              </p>
              <div className="route-links">
                <span className="text-link">
                  查看神明图鉴
                  <ArrowIcon />
                </span>
                <span
                  className="text-link subdued"
                  role="link"
                  tabIndex={0}
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    navigate("/duos");
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      event.stopPropagation();
                      navigate("/duos");
                    }
                  }}
                >
                  双重祝福 {duos.length} 组
                </span>
              </div>
              <div className="route-tags">
                <Tag>攻击</Tag>
                <Tag>特殊</Tag>
                <Tag>投弹</Tag>
                <Tag>冲刺</Tag>
                <Tag>求援</Tag>
              </div>
            </Link>

            <Link className="route-card panel route-card-alt" to="/guides">
              <div className="route-top">
                <span className="route-index">02</span>
                <span className="route-icon">
                  <ScrollIcon size={30} />
                </span>
              </div>
              <h3>攻略站</h3>
              <p>
                从第一次逃亡到高热度挑战：开局规划、构筑逻辑、武器形态、Boss 招式、
                热度契约与资源投资。
              </p>
              <div className="route-links">
                <span className="text-link">
                  进入攻略站
                  <ArrowIcon />
                </span>
                <span
                  className="text-link subdued"
                  role="link"
                  tabIndex={0}
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    navigate("/guides/start-here");
                  }}
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      event.stopPropagation();
                      navigate("/guides/start-here");
                    }
                  }}
                >
                  新手从这里开始
                </span>
              </div>
              <div className="route-tags">
                <Tag>入门</Tag>
                <Tag>构筑</Tag>
                <Tag>Boss</Tag>
                <Tag>热度</Tag>
                <Tag>资源</Tag>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section weapon-home-section">
        <div className="container">
          <SectionHead
            kicker="THE ARSENAL"
            title="六把武器，二十四种形态"
            desc="先选距离与节奏，再决定把哪些祝福交给它。"
            action={{ to: "/weapons", label: "进入武器选择" }}
          />
          <div className="weapon-home-grid">
            {weapons.map((weapon) => (
              <Link
                key={weapon.id}
                className="weapon-home-card panel"
                to={`/weapons#${weapon.id}`}
                style={{ "--weapon": weapon.color }}
              >
                <WeaponIcon id={weapon.id} size={40} />
                <span className="weapon-home-copy">
                  <strong>{weapon.name}</strong>
                  <small>{weapon.role}</small>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section builds-section">
        <div className="container">
          <SectionHead
            kicker="TONIGHT'S BUILDS"
            title="本夜推荐构筑"
            desc="不想从零研究？先照抄一套能稳定通关的，再慢慢改成自己的。"
            action={{ to: "/builds", label: "全部五套构筑" }}
          />
          <div className="build-grid">
            {homeBuilds.map((build, index) => (
              <BuildCard
                key={build.id}
                build={build}
                index={index}
                gods={build.gods.map((id) => godMap[id])}
                compact
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section guide-preview-section">
        <div className="container">
          <SectionHead
            kicker="FROM THE CODEX"
            title="先读这三篇"
            desc="把机制弄懂，比多打十局更有用。"
            action={{ to: "/guides", label: "全部攻略" }}
          />
          <div className="guide-grid">
            {homeGuides.map((guide, index) => (
              <GuideCard key={guide.id} guide={guide} featured={index === 0} />
            ))}
          </div>
        </div>
      </section>

      <section className="section starter-section">
        <div className="container">
          <div className="starter-panel panel">
            <div className="starter-copy">
              <span className="kicker">BEFORE YOU DASH</span>
              <h2>出发前，先记住三件事</h2>
              <p>
                哈迪斯的难度曲线不在 BOSS，而在信息量。先建立正确的习惯，
                再谈祝福搭配和热度。
              </p>
              <Link className="button button-primary" to="/guides/start-here">
                阅读新手开局
                <ArrowIcon />
              </Link>
            </div>
            <div className="starter-list">
              <div className="starter-item">
                <span>01</span>
                <div>
                  <h3>冲刺穿过攻击</h3>
                  <p>向后跑会留在弹道里。迎着攻击冲刺，穿过它。</p>
                </div>
              </div>
              <div className="starter-item">
                <span>02</span>
                <div>
                  <h3>先点死亡反抗</h3>
                  <p>多一次复活，就多一次学习 BOSS 的机会。</p>
                </div>
              </div>
              <div className="starter-item">
                <span>03</span>
                <div>
                  <h3>一个槽位只认一位神</h3>
                  <p>先规划主输出槽，再考虑补状态和双重祝福。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="closing-cta">
        <div className="container closing-inner">
          <span className="kicker">THE EXIT IS A LIE</span>
          <h2>但每一次逃亡，都会留下点什么。</h2>
          <p>带上祝福，带上路线，也带上一点不服气。</p>
          <div className="closing-actions">
            <Link className="button button-primary" to="/duos">
              挑一组双重祝福
              <ArrowIcon />
            </Link>
            <Link className="button button-ghost" to="/gods">
              浏览全部神明
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
