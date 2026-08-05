import React from "react";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Image from "next/image";

const Future = () => {
  return (
    <section className="lg:px-4 bg-black ">
      <div className="max-w-291.5 w-full mx-auto flex min-[1025px]:flex-row flex-col justify-between items-center lg:mt-[-150.25px] md:-mt-60 sm:-mt-70 -mt-37.5">
        <div className="sm:max-w-116.75 max-w-97.25 max-lg:px-4  w-full ">
          <button className="py-1.5 px-4 rounded-[114.9px] mb-3.25 bg-white/6 border-border border hover:scale-105 transition-all duration-300 cursor-pointer text-white font-normal text-[14px] leading-121">
            What Is Waves of Innovation?
          </button>
          <Heading
            children={"Don't Predict the Future. Map It With Patterns."}
            vari={"pri"}
          />
          <div className="flex flex-col gap-5 sm:mt-6.25 mt-5.75 ">
            <Para
              children={
                "Waves of Innovation is a living system of insights, rooted in historical evidence, built to help leaders understand how technology, human behavior, and organizational change evolve together."
              }
              vari={"sec"}
            />
            <Para children={"Each Wave captures patterns, disruptions, and opportunities—giving you the clarity needed to plan, adapt, and make informed decisions in an environment that never stops moving."} vari={"sec"}/>
          </div>
        </div>
        <div className="max-[1025px]:mt-17.5 max-sm:mt-15">
          <Image src={"/assets/webg/hub.webp"} height={480} width={600} className="object-cover object-center max-lg:h-auto " />
        </div>
      </div>
    </section>
  );
};

export default Future;
