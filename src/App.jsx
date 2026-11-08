import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/Layout";
import { BoonInfoProvider } from "./components/BoonInfo";
import Home from "./pages/Home";
import Gods from "./pages/Gods";
import GodDetail from "./pages/GodDetail";
import Duos from "./pages/Duos";
import Weapons from "./pages/Weapons";
import Guides from "./pages/Guides";
import GuideDetail from "./pages/GuideDetail";
import Builds from "./pages/Builds";
import BuildDetail from "./pages/BuildDetail";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BoonInfoProvider>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gods" element={<Gods />} />
          <Route path="/gods/:godId" element={<GodDetail />} />
          <Route path="/duos" element={<Duos />} />
          <Route path="/weapons" element={<Weapons />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/guides/:guideId" element={<GuideDetail />} />
          <Route path="/builds" element={<Builds />} />
          <Route path="/builds/:buildId" element={<BuildDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BoonInfoProvider>
  );
}
