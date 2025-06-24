import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
  wordAnimationEnd = "bottom bottom",
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="inline-block word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef && scrollContainerRef.current
        ? scrollContainerRef.current
        : window;

    gsap.fromTo(
      el,
      { 
        transformOrigin: "0% 50%", 
        rotate: baseRotation,
        scale: 0.95,
        y: 50
      },
      {
        ease: "power3.out",
        rotate: 0,
        scale: 1,
        y: 0,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: 1.5,
        },
      }
    );

    const wordElements = el.querySelectorAll(".word");

    gsap.fromTo(
      wordElements,
      { 
        opacity: baseOpacity, 
        willChange: "opacity",
        y: 30,
        scale: 0.8
      },
      {
        ease: "power2.out",
        opacity: 1,
        y: 0,
        scale: 1,
        stagger: 0.08,
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom-=20%",
          end: wordAnimationEnd,
          scrub: 1.2,
        },
      }
    );

    if (enableBlur) {
      gsap.fromTo(
        wordElements,
        { 
          filter: `blur(${blurStrength}px)`,
          y: 20
        },
        {
          ease: "power2.out",
          filter: "blur(0px)",
          y: 0,
          stagger: 0.08,
          scrollTrigger: {
            trigger: el,
            scroller,
            start: "top bottom-=20%",
            end: wordAnimationEnd,
            scrub: 1.2,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [
    scrollContainerRef,
    enableBlur,
    baseRotation,
    baseOpacity,
    rotationEnd,
    wordAnimationEnd,
    blurStrength,
  ]);

  return (
    <div ref={containerRef} className={`${containerClassName}`}>
      <h1 className={`text-6xl leading-[1.6] font-medium ${textClassName}`}>
        {splitText}
      </h1>
    </div>
  );
};

export default ScrollReveal;
