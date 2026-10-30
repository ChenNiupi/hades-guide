import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import SearchOverlay from "./SearchOverlay";
import { CloseIcon, MenuIcon, SearchIcon } from "./Icons";

const NAV = [
  { to: "/", label: "首页", end: true },
  { to: "/gods", label: "诸神祝福" },
  { to: "/duos", label: "双重祝福" },
  { to: "/weapons", label: "武器选择" },
  { to: "/guides", label: "攻略站" },
];

function MeanderMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" aria-hidden="true">
      <path
        d="M3 27V5h22v18H9V11h12v8H13"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function Layout({ children }) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const onKeyDown = (event) => {
      const tag = event.target?.tagName;
      const typing =
        tag === "INPUT" || tag === "TEXTAREA" || event.target?.isContentEditable;
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      } else if (event.key === "/" && !typing) {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="site">
      <a
        className="skip-link"
        href="#main"
        onClick={(event) => {
          event.preventDefault();
          const main = document.getElementById("main");
          main?.scrollIntoView({ behavior: "smooth" });
          main?.focus();
        }}
      >
        跳到主要内容
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" to="/" aria-label="冥府秘典首页">
            <span className="brand-mark">
              <MeanderMark />
            </span>
            <span className="brand-copy">
              <strong>冥府秘典</strong>
              <small>HADES I · CODEX</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="主要导航">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "is-active" : ""}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="search-trigger"
              onClick={() => setSearchOpen(true)}
            >
              <SearchIcon size={16} />
              <span>搜索</span>
              <kbd>Ctrl K</kbd>
            </button>
            <button
              type="button"
              className="icon-button mobile-search"
              onClick={() => setSearchOpen(true)}
              aria-label="搜索"
            >
              <SearchIcon size={19} />
            </button>
            <button
              type="button"
              className="icon-button menu-trigger"
              onClick={() => setMobileOpen((value) => !value)}
              aria-label={mobileOpen ? "关闭菜单" : "打开菜单"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mobile-nav">
            <div className="container">
              {NAV.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    `mobile-nav-link ${isActive ? "is-active" : ""}`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
              <button
                type="button"
                className="mobile-search-link"
                onClick={() => {
                  setMobileOpen(false);
                  setSearchOpen(true);
                }}
              >
                <SearchIcon size={17} />
                搜索祝福与攻略
              </button>
            </div>
          </div>
        )}
      </header>

      <main id="main" className="site-main" tabIndex={-1}>
        {children}
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="footer-mark">
                <span className="brand-mark">
                  <MeanderMark />
                </span>
                <span>
                  <strong>冥府秘典</strong>
                  <small>HADES I · CODEX</small>
                </span>
              </div>
              <p>
                写给扎格列欧斯的中文逃亡手册。整理诸神祝福、双重祝福与实战攻略，
                让每一次逃亡都少一点遗憾。
              </p>
            </div>

            <div className="footer-col">
              <span className="footer-title">图鉴</span>
              <Link to="/gods">诸神祝福</Link>
              <Link to="/duos">双重祝福</Link>
              <Link to="/weapons">武器选择</Link>
              <Link to="/gods/chaos">混沌祝福</Link>
              <Link to="/gods/hermes">赫尔墨斯</Link>
            </div>

            <div className="footer-col">
              <span className="footer-title">攻略</span>
              <Link to="/guides/start-here">新手开局</Link>
              <Link to="/guides/five-builds">五套构筑</Link>
              <Link to="/guides/bosses">Boss 攻略</Link>
              <Link to="/guides/heat">热度系统</Link>
            </div>

            <div className="footer-col">
              <span className="footer-title">关于</span>
              <Link to="/guides">全部攻略</Link>
              <Link to="/guides/resources">资源规划</Link>
              <span className="footer-note">数据基于 Hades v1.0</span>
            </div>
          </div>

          <div className="footer-divider" aria-hidden="true" />

          <div className="footer-bottom">
            <p>
              非官方粉丝攻略站。Hades © Supergiant Games。神明图标、立绘、祝福名称与
              游戏内文本版权归 Supergiant Games，本站仅作非商业粉丝攻略展示；数值以
              基础效果为准，请以游戏内文本为准。
            </p>
            <p className="footer-year">MMXXVI · 献给所有试图逃出冥界的人</p>
          </div>
        </div>
      </footer>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </div>
  );
}
