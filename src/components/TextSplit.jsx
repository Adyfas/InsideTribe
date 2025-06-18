import { useRef, useLayoutEffect, useState } from "react";
import gsap from "gsap";

export default function TextSplit({ text, duration = 0.6, className = "", delay = 0 }) {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useLayoutEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (textRef.current) observer.observe(textRef.current);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (!isVisible || !textRef.current) return;
    const letters = text
      .split("")
      .map(
        (c) =>
          `<span style="display:inline-block;">${c === " " ? "&nbsp;" : c}</span>`
      )
      .join("");
    textRef.current.innerHTML = letters;

    gsap.fromTo(
      textRef.current.children,
      { yPercent: 100, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        stagger: 0.03,
        duration: duration,
        delay: delay,
        ease: "power2.out",
      }
    );
  }, [isVisible, text, duration, delay]);

  return (
    <span ref={textRef} className={className} />
  );
} 