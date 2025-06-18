import React from "react";
import { Link } from "react-router-dom";
import TextSplit from "../TextSplit";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";

const HeroSection = ({ Video }) => {
  const wrapper = useRef();

  useLayoutEffect(() => {
    const el = wrapper.current;
    setTimeout(() => {
      gsap.fromTo(
        el,
        { scaleX: 0, transformOrigin: "center center", opacity: 0 },
        {
          scaleX: 1,
          opacity: 1,
          ease: "power3.out",
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top center",
            end: "bottom top",
            scrub: false,
            once: true,
          },
        }
      );
    }, 3000);
  }, []);
  return (
    <>
      <section className="flex justify-center items-center h-screen my-5">
        <div className="flex items-center flex-col gap-5 absolute z-10">
          <h1 className="text-white font-bold text-center text-5xl max-md:hidden">
            <TextSplit
              text={"Beyond the Surface, Deep Into Tradition"}
              duration={0.6}
              delay={0.3}
            />
          </h1>

          {/* <Link
            to={"/"}
            className="text-white font-bold text-center bg-gray-900/50 backdrop-blur-3xl rounded-2xl p-4 text-2xl max-md:hidden flex items-center gap-4"
          >
            Explore Now{" "}
            <svg
              className="transition-all duration-500"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              >
                <path strokeDasharray={20} strokeDashoffset={20} d="M3 12h17.5">
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    dur="0.2s"
                    values="20;0"
                  ></animate>
                </path>
                <path
                  strokeDasharray={12}
                  strokeDashoffset={12}
                  d="M21 12l-7 7M21 12l-7 -7"
                >
                  <animate
                    fill="freeze"
                    attributeName="stroke-dashoffset"
                    begin="0.2s"
                    dur="0.2s"
                    values="12;0"
                  ></animate>
                </path>
              </g>
            </svg>
          </Link> */}
        </div>
        <video
          id="hero"
          ref={wrapper}
          className="relative top-[24px] left-0 w-[97%] h-[85%] object-cover -z-10 rounded-4xl my-5 opacity-0"
          src={Video}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* <Link className="text-xl text-white absolute z-10 bottom-5 left-10 max-md:left-5 flex items-center">
          Explore Now
        </Link> */}
      </section>
    </>
  );
};

export default HeroSection;
