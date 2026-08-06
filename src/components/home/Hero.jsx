import React from "react";
import Para from "../common/Para";
import Button from "../common/Button";
import Icons from "../common/Icons";

const Hero = () => {
  return (
    <section className="herobg sm:min-h-231 min-h-196.25 w-full px-4">
      <div className=" relative max-w-[1216.01px] w-full mx-auto justify-center items-center mt-52.5 sm:mt-47.75 flex">
        <div className="absolute max-md:hidden inset-0 z-0 pointer-events-none flex justify-center items-center">
          <Icons icon={"herobgstar"} className="w-full h-auto" />
        </div>

        <div className="absolute md:hidden inset-0 z-0 -top-15 pointer-events-none flex justify-center items-center">
          <Icons icon={"herobgsmstar"} className="w-full h-auto" />
        </div>
        <div className="sm:max-w-[652.50px] max-w-103 w-full  text-center justify-items-center">

          <button className="py-[5.5px] pr-1.5 pl-4 rounded-[114.9px] border-border border font-normal text-[14px] leading-100 flex flex-row gap-2.5 items-center text-white bg-white/6">
            Waves of innovation
            <span className="py-0.5 px-2 bg-[linear-gradient(0deg,#8E2EE0,#8E2EE0),linear-gradient(42.59deg,#8E2EE0_16.29%,#AF7EF4_77.08%)] text-[12px] font-medium leading-[124%] rounded-[60px] text-white">
              HUB
            </span>
          </button>
          <h1 className="font-normal lg:text-65 md:text-[58px] sm:text-[54px] text-50 sm:leading-126  leading-[110%] text-white sm:mt-[14.82px] mt-3.5 tracking-[-2px] ">
            The Community <br className="sm:hidden" /> for the  AI <br className="sm:hidden " /> Native Era
          </h1>
          <div className="sm:max-w-148.5 max-w-86.5 w-full md:mt-4.5 mt-4 ">
            <Para
              children={
                "Join leaders navigating the shift from Cloud Native to AI Native. Access the shared language, historical context, and patterns to lead with certainty."
              }
              vari={"pri"}
            />
            <div className="flex flex-row lg:gap-4 sm:gap-3.5 gap-3.25  justify-end sm:mt-[29.18px] mt-7">
              <Button vari={"pri"}>Explore the Book</Button>
              <Button vari={"sec"}>Explore the Patterns</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
