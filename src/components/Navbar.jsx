import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
P
import LogoNavbar from "./Navbar/LogoNavbar";
import { ItemsNavbar } from "./Navbar/ItemsNavbar";
import ItemsButtonNavbar from "./Navbar/ItemsButtonNavbar";
import ButtonMenuMobile from "./Navbar/ButtonMenuMobile";
import OverlayMenuNavbarMobile from "./Navbar/OverlayMenuNavbarMobile";

export const Navbar = ({ items, itemsButton }) => {
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

    // Fungsi untuk mendeteksi warna background di belakang navbar
    const checkBackgroundColor = () => {
      // Dapatkan semua elemen yang berada di bawah navbar
      const elementsBelow = document.elementsFromPoint(
        window.innerWidth / 2,
        navbarRef.current.getBoundingClientRect().bottom + 5
      );

      // Cari elemen pertama yang bukan navbar atau turunannya
      const backgroundElement = elementsBelow.find(
        (el) =>
          !navbarRef.current.contains(el) && !el.classList.contains("aos-init")
      );

      if (!backgroundElement) return;

      // Dapatkan warna background elemen
      const bgColor = getComputedStyle(backgroundElement).backgroundColor;

      // Jika warna background adalah transparan, coba cari elemen induk
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

      // Tentukan apakah warna tergolong gelap
      setIsOnDark(isColorDark(bgColor));
    };

    // Fungsi untuk menentukan apakah warna tergolong gelap
    const isColorDark = (color) => {
      // Konversi warna ke format RGB
      const rgb = color.match(/\d+/g);
      if (!rgb || rgb.length < 3) return false;

      const r = parseInt(rgb[0]);
      const g = parseInt(rgb[1]);
      const b = parseInt(rgb[2]);

      // Hitung kecerahan (brightness)
      const brightness = (r * 299 + g * 587 + b * 114) / 1000;

      // Jika kecerahan kurang dari 128, dianggap gelap
      return brightness < 128;
    };

    // Setup Intersection Observer untuk mendeteksi perubahan
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

    // Observasi elemen detector
    observer.observe(detector);

    // Setup event listener untuk scroll
    window.addEventListener("scroll", checkBackgroundColor);

    // Panggil sekali di awal
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
        className={`fixed w-full top-0 flex justify-between items-center z-50 bg-transparent p-6 transition-all duration-500 ${
          isOnDark ? "text-white" : "text-black"
        }`}
      >
        <LogoNavbar />
        <ItemsNavbar items={items} location={location} />
        <ItemsButtonNavbar itemsButton={itemsButton} />
        <ButtonMenuMobile setOverlayMenu={setOverlayMenu} />
        <OverlayMenuNavbarMobile
          items={items}
          itemsButton={itemsButton}
          overlayMenu={overlayMenu}
          setOverlayMenu={setOverlayMenu}
        />
      </nav>

      {/* Elemen pendeteksi untuk menentukan warna background di belakang navbar */}
      <div
        ref={detectorRef}
        style={{
          position: "fixed",
          top: "80px", // Sesuaikan dengan tinggi navbar
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
