import React from "react";
import { Link } from "react-router-dom";
import TextSplit from "../TextSplit";
import { useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const HeroSection = ({ Video }) => {
  const wrapper = useRef();
  const sectionRef = useRef();

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = wrapper.current;
    const section = sectionRef.current;
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
    }, 900);
    gsap.to(el, {
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
      scale: 1,
      y: -100,
      ease: "none",
      overwrite: "auto",
    });
  }, []);
  return (
    <>
      <section className="flex justify-center items-center h-screen my-5">
        <div className="flex items-center flex-col gap-5 absolute z-10">
          {/* <h1 className="text-black font-bold text-center text-5xl ">
            <TextSplit
              text={"Beyond the Surface, Deep Into Tradition"}
              duration={0.6}
              delay={0.3}
            />
          </h1> */}
          <h1 className="text-white font-bold text-center text-5xl max-md:hidden">
            <TextSplit
              text={"Beyond the Surface, Deep Into Tradition"}
              duration={0.6}
              delay={0.9}
            />
          </h1>
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
          {/* <div className="absolute bg-black/50 backdrop-blur-3xl text-white rounded-b-4xl">
            <div className="flex items-center flex-col">
              <h1 className="text-white text-xl text-start">
                {" "}
                <TextSplit
                  text={"Beyond the Surface, Deep Into Tradition"}
                  duration={0.6}
                  delay={0.3}
                />
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                saepe alias illo quo sed atque vel ipsam reprehenderit cumque
                libero sit error quas fugit, facilis eaque voluptatum veritatis
                assumenda id.
              </p>
            </div>
          </div> */}
      </section>
    </>
  );
};

export default HeroSection;
