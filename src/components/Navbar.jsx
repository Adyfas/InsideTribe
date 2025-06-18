import React from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LogoNavbar from "./Navbar/LogoNavbar";
import { ItemsNavbar } from "./Navbar/ItemsNavbar";
import ItemsButtonNavbar from "./Navbar/ItemsButtonNavbar";
import ButtonMenuMobile from "./Navbar/ButtonMenuMobile";
import OverlayMenuNavbarMobile from "./Navbar/OverlayMenuNavbarMobile";

export const Navbar = ({ items, itemsButton }) => {
  const location = useLocation();
  const [overlayMenu, setOverlayMenu] = useState(false);
  const [onHero, setOnHero] = useState(true);
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
    const hero = document.querySelector("#hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOnHero(entry.isIntersecting),
      { root: null, threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);
  

  const Color = onHero ? "black" : "white";
  console.log(Color);

  return (
    <nav
      className={`fixed w-full top-0 flex justify-between items-center z-50 bg-transparent p-6 transition-all duration-500 text-${Color}`}
    >
      <LogoNavbar />

      <ItemsNavbar items={items} location={location} Color={Color} />

      <ItemsButtonNavbar itemsButton={itemsButton} />

      <ButtonMenuMobile setOverlayMenu={setOverlayMenu} />

      <OverlayMenuNavbarMobile
        items={items}
        itemsButton={itemsButton}
        overlayMenu={overlayMenu}
        setOverlayMenu={setOverlayMenu}
      />
    </nav>
  );
};
