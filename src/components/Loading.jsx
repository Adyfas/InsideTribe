import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import TextSplit from "./TextSplit";
import { LoadingText } from "./items/LoadingText";

export default function Loading({ onComplete }) {
  const overlay = useRef(null);
  const LoadingTexts =
    LoadingText[Math.floor(Math.random() * LoadingText.length)];

  useLayoutEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      onComplete: () => onComplete?.(),
    });

    tl.to(
      overlay.current,
      {
        clipPath: "inset(50% 0 50% 0)",
        duration: 0.8,
      },
      3
    ).set(overlay.current, { display: "none" });
  }, [onComplete]);

  return (
    <div
      ref={overlay}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      <TextSplit
        text={LoadingTexts}
        duration={0.6}
        className="text-white text-6xl max-md:text-3xl font-semibold overflow-hidden"
      />
    </div>
  );
}
