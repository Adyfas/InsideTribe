import React, { useEffect } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Tribes } from "./pages/Tribes";
import Explore from "./pages/Explore";
import { Contact } from "./pages/Contact";
import Lenis from "@studio-freight/lenis";
import NewsExplore from "./pages/NewsExplore";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.0,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1.2,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <>
      <Loading />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tribes" element={<Tribes />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/explore/:title" element={<NewsExplore />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
