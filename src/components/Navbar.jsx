import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import LogoNavbar from "./Navbar/LogoNavbar";
import { ItemsNavbar } from "./Navbar/ItemsNavbar";
import ItemsButtonNavbar from "./Navbar/ItemsButtonNavbar";
import ButtonMenuMobile from "./Navbar/ButtonMenuMobile";
import OverlayMenuNavbarMobile from "./Navbar/OverlayMenuNavbarMobile";
import {
  NavbarItems,
  NavbarButtonItems,
} from "../components/items/NavbarItems";

export const Navbar = () => {
  const location = useLocation();
  const [overlayMenu, setOverlayMenu] = useState(false);
  const [isOnDark, setIsOnDark] = useState(false);
  const navbarRef = useRef(null);
  const detectorRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
    });
  }, []);

  useEffect(() => {
    const detector = detectorRef.current;
    if (!detector) return;

    const checkBackgroundColor = () => {
      if (!navbarRef.current) return;
      const elementsBelow = document.elementsFromPoint(
        window.innerWidth / 2,
        navbarRef.current.getBoundingClientRect().bottom + 5
      );

      const backgroundElement = elementsBelow.find(
        (el) =>
          !navbarRef.current.contains(el) && !el.classList.contains("aos-init")
      );

      if (!backgroundElement) return;

      const bgColor = getComputedStyle(backgroundElement).backgroundColor;

      if (bgColor === "rgba(0, 0, 0, 0)" || bgColor === "transparent") {
        let parent = backgroundElement.parentElement;
        while (parent) {
          const parentColor = getComputedStyle(parent).backgroundColor;
          if (
            parentColor !== "rgba(0, 0, 0, 0)" &&
            parentColor !== "transparent"
          ) {
            setIsOnDark(isColorDark(parentColor));
            return;
          }
          parent = parent.parentElement;
        }
        setIsOnDark(false);
        return;
      }

      setIsOnDark(isColorDark(bgColor));
    };

    const isColorDark = (color) => {
      const rgb = color.match(/\d+/g);
      if (!rgb || rgb.length < 3) return false;

      const r = parseInt(rgb[0]);
      const g = parseInt(rgb[1]);
      const b = parseInt(rgb[2]);

      const brightness = (r * 299 + g * 587 + b * 114) / 1000;

      return brightness < 128;
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            checkBackgroundColor();
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(detector);

    window.addEventListener("scroll", checkBackgroundColor);

    checkBackgroundColor();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", checkBackgroundColor);
    };
  }, []);

  return (
    <>
      <nav
        ref={navbarRef}
        className={`fixed w-full top-0 flex justify-between items-center z-40 bg-transparent p-6 transition-all duration-500`}
      >
        <LogoNavbar isOnDark={isOnDark} />
        <ItemsNavbar
          items={NavbarItems}
          location={location}
          isOnDark={isOnDark}
        />
        <ItemsButtonNavbar
          itemsButton={NavbarButtonItems}
          isOnDark={isOnDark}
        />
        <ButtonMenuMobile setOverlayMenu={setOverlayMenu} isOnDark={isOnDark}/>
        <OverlayMenuNavbarMobile
          items={NavbarItems}
          itemsButton={NavbarButtonItems}
          overlayMenu={overlayMenu}
          setOverlayMenu={setOverlayMenu}
        />
      </nav>

      <div
        ref={detectorRef}
        style={{
          position: "fixed",
          top: "80px",
          left: 0,
          width: "100%",
          height: "1px",
          pointerEvents: "none",
          zIndex: -1,
        }}
      />
    </>
  );
};
