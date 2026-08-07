import React from "react";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Image from "next/image";
import Icons from "../common/Icons";

const Future = () => {
  return (
    <section className="lg:px-4 bg-black -mt-0.5 ">
      <div className="max-w-291.5 w-full mx-auto flex min-[1100px]:flex-row relative z-10 flex-col justify-between items-center lg:mt-[-150.25px] md:-mt-60 sm:-mt-70 -mt-14.5">
        <div className="sm:max-w-116.75 max-w-97.25 max-lg:px-4  w-full ">
          <button className="py-1.5 px-4 rounded-[114.9px] mb-3.25 bg-white/6 border-border border  text-white font-normal text-[14px] leading-121">
            What Is Waves of Innovation?
          </button>
          <Heading
            children={"Don't Predict the Future. Map It With Patterns."}
            vari={"pri"}
          />
          <div className="flex flex-col gap-5 sm:mt-6.25 mt-5.75 max-sm:max-w-95.75 w-full">
            <Para
              children={
                "Waves of Innovation is a living system of insights, rooted in historical evidence, built to help leaders understand how technology, human behavior, and organizational change evolve together."
              }
              vari={"sec"}
            />
            <Para children={"Each Wave captures patterns, disruptions, and opportunities—giving you the clarity needed to plan, adapt, and make informed decisions in an environment that never stops moving."} vari={"sec"} />
          </div>
        </div>
        <div className="relative max-[1100px]:mt-17.5 max-sm:mt-15">
          <Image src={"/assets/webp/futurebg.webp"} height={480} width={600} className="lg:w-150 md:w-135 sm:w-117.5 w-107.5  lg:h-120 md:h-110 sm:h-101.25 h-96.75 object-cover rounded-none sm:rounded-[20px] object-center max-lg:h-auto " />
          <Image src={"/assets/webp/earth.webp"} width={160.52} height={160.52} className="lg:w-[160.52px] md:w-35 sm:w-30 w-22.5 lg:h-[160.52px] md:h-35 sm:h-30 h-22.5 absolute top-32 sm:top-38 lg:top-40 right-42 sm:right-43 md:right-50 lg:right-55 animate-earth" />
          
          <div className=" absolute top-19 sm:top-23 md:top-20 lg:top-21 right-40 sm:right-43 md:right-50 lg:right-55 future-btn btn-top">
            <div className="group relative w-fit rounded-[114.9px] border border-border p-[0.5px] overflow-hidden transition-all duration-500">
              <span className="absolute inset-0 rounded-[114.9px] bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[120%]"></span>
              <button className="relative z-10 flex items-center justify-center gap-2 rounded-[114.9px] lg:px-13 md:px-11 sm:px-9 px-[25.56px] lg:py-3.25 md:py-3 sm:py-2.5 py-[8.5px] sm:text-base text-sm leading-106 font-normal text-white bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.1)_100%)] transition-all duration-300 group-hover:shadow-[inset_0_0_18px_rgba(255,255,255,0.18)]" >
                <Icons icon="hub" className={"sm:w-4 sm:h-4 w-2 h-2"} />
                Hub
              </button>
            </div>
          </div>

          <div className=" absolute top-30 sm:top-37 md:top-39 lg:top-41 right-4 md:right-6 lg:right-8 future-btn btn-right">
            <div className="group relative w-fit rounded-[114.9px] border border-border p-[0.5px] overflow-hidden transition-all duration-500">
              <span className="absolute inset-0 rounded-[114.9px] bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[120%]"></span>
              <button className="relative z-10 flex items-center justify-center gap-2 rounded-[114.9px] lg:px-[58.09px] md:px-13 sm:px-12 px-[42.40px] lg:py-3.25 md:py-3 sm:py-2.5 py-[8.5px] sm:text-base text-sm leading-106 font-normal text-white bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.1)_100%)] transition-all duration-300 group-hover:shadow-[inset_0_0_18px_rgba(255,255,255,0.18)]" >
                <Icons icon="book" />
                Book
              </button>
            </div>
          </div>

          <div className=" absolute top-46 sm:top-60.5 md:top-64 lg:top-69 right-4 sm:right-3.5 md:right-6 lg:right-8 future-btn btn-right">
            <div className="group relative w-fit rounded-[114.9px] border border-border p-[0.5px] overflow-hidden transition-all duration-500">
              <span className="absolute inset-0 rounded-[114.9px] bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[120%]"></span>
              <button className="relative z-10 flex items-center justify-center gap-2 rounded-[114.9px] lg:px-8.5 md:px-7.75 sm:px-7 px-[21.40px] lg:py-3.25 md:py-3 sm:py-2.5 py-[8.5px] sm:text-base text-sm leading-106 font-normal text-white bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.1)_100%)] transition-all duration-300 group-hover:shadow-[inset_0_0_18px_rgba(255,255,255,0.18)]" >
                <Icons icon="assessment" />
                Assessment
              </button>
            </div>
          </div>

          <div className=" absolute bottom-18 sm:bottom-18 md:bottom-20 lg:bottom-21 right-40 sm:right-43 md:right-50 lg:right-55 future-btn btn-bottom">
            <div className="group relative w-fit rounded-[114.9px] border border-border p-[0.5px] overflow-hidden transition-all duration-500">
              <span className="absolute inset-0 rounded-[114.9px] bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[120%]"></span>
              <button className="relative z-10 flex items-center justify-center gap-2 rounded-[114.9px] lg:px-9.5 md:px-8.5 sm:px-6 px-[13.48px] lg:py-3.25 md:py-3 sm:py-2.5 py-[8.5px] sm:text-base text-sm leading-106 font-normal text-white bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.1)_100%)] transition-all duration-300 group-hover:shadow-[inset_0_0_18px_rgba(255,255,255,0.18)]" >
                <Icons icon="podcast" />
                Podcast
              </button>
            </div>
          </div>

          <div className=" absolute top-30 sm:top-37 md:top-39 lg:top-41 left-5 sm:left-4 md:left-6 lg:left-8 future-btn btn-left">
            <div className="group relative w-fit rounded-[114.9px] border border-border p-[0.5px] overflow-hidden transition-all duration-500">
              <span className="absolute inset-0 rounded-[114.9px] bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[120%]"></span>
              <button className="relative z-10 flex items-center justify-center gap-2 rounded-[114.9px] lg:px-[23.5px] md:px-5 sm:px-4.25 px-[12.20px] lg:py-3.25 md:py-3 sm:py-2.5 py-[8.5px] sm:text-base text-sm leading-106 font-normal text-white bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.1)_100%)] transition-all duration-300 group-hover:shadow-[inset_0_0_18px_rgba(255,255,255,0.18)]" >
                <Icons icon="monthly" />
                Monthly Report
              </button>
            </div>
          </div>

          <div className=" absolute top-46 sm:top-59.5 md:top-64 lg:top-69 left-4.5 md:left-6 lg:left-8 future-btn btn-left">
            <div className="group relative w-fit rounded-[114.9px] border border-border p-[0.5px] overflow-hidden transition-all duration-500">
              <span className="absolute inset-0 rounded-[114.9px] bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/20 blur-md transition-all duration-700 group-hover:left-[120%]"></span>
              <button className="relative z-10 flex items-center justify-center gap-2 rounded-[114.9px] lg:px-[47.5px] md:px-11 sm:px-10 px-[33.10px] lg:py-3.25 md:py-3 sm:py-2.5 py-[8.5px] sm:text-base text-sm leading-106 font-normal text-white bg-[linear-gradient(180deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.1)_100%)] transition-all duration-300 group-hover:shadow-[inset_0_0_18px_rgba(255,255,255,0.18)]" >
                <Icons icon="patterns" />
                Patterns
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Future;
