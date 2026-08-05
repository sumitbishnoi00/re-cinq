import React from "react";
import Para from "../common/Para";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="herobg min-h-231 w-full ">
      <div className="max-w-[652.50px] w-full mx-auto mt-[171.36px] text-center justify-items-center">
        <button className="py-[5.5px] pr-1.5 pl-4 rounded-[114.9px] font-normal text-[14px] leading-100 flex flex-row gap-2.5 items-center text-white bg-white/6">
          Waves of innovation
          <span className="py-0.5 px-2 bg-[linear-gradient(0deg,#8E2EE0,#8E2EE0),linear-gradient(42.59deg,#8E2EE0_16.29%,#AF7EF4_77.08%)] text-[12px] font-medium leading-[124%] rounded-[60px] text-white">
            HUB
          </span>
        </button>
        <h1 className="font-normal text-[65px] leading-[126%]  text-white mt-[14.82px] tracking-[-2px] ">
           The Community for the AI Native Era
        </h1>
        <div className="max-w-148.5 w-full mt-4.5 ">

       <Para children={"Join leaders navigating the shift from Cloud Native to AI Native. Access the shared language, historical context, and patterns to lead with certainty."} vari={"pri"} />
       <div className="flex flex-row gap-4 justify-end mt-[29.18px]">
        <Button vari={"pri"} >Explore the Book</Button>
        <Button children={"Explore the Patterns"} vari={"sec"} />
       </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
