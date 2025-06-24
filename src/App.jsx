import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Tribes } from "./pages/Tribes";
import Explore from "./pages/Explore";
import Map from "./pages/Map";
import { Contact } from "./pages/Contact";
import Lenis from "@studio-freight/lenis";
import NewsExplore from "./pages/NewsExplore";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1.2,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tribes" element={<Tribes />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/explore/:title" element={<NewsExplore />} />
      {/* <Route path="/map" element={<Map />} /> */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
