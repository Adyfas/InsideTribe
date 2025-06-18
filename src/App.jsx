import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { About } from "./pages/About";
import { Tribes } from "./pages/Tribes";
import Explore from "./pages/Explore";
import Map from "./pages/Map";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/tribes" element={<Tribes />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/explore:title" element={<Explore />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  );
}
