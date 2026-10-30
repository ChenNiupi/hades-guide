import { Link } from "react-router-dom";
import { ArrowIcon } from "../components/Icons";
import usePageTitle from "../components/usePageTitle";

export default function NotFound() {
  usePageTitle("迷失于冥界 · 404 · 冥府秘典");
  return (
    <div className="page">
      <section className="section notfound">
        <div className="container">
          <div className="notfound-inner panel">
            <span className="kicker">LOST IN THE UNDERWORLD</span>
            <h1>404</h1>
            <h2>这条冥界通道不存在</h2>
            <p>你可能是走错了门，或者这条路径已经被冥河冲走。</p>
            <div className="notfound-actions">
              <Link className="button button-primary" to="/">
                回到首页
                <ArrowIcon />
              </Link>
              <Link className="button button-ghost" to="/guides">
                去攻略站
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
