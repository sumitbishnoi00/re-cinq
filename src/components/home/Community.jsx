import Image from "next/image";
import React from "react";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Button from "../common/Button";

const Community = () => {
  return (
    <div>
      <div className=" bg-black -mt-px sm:px-4 ">
        <div className="max-w-[1280.1px] w-full mx-auto pt-15 sm:pt-30 md:pt-40 lg:pt-51.25  ">
          <div className="flex w-full items-center min-[1025]:flex-row flex-col max-xl:justify-between  xl:gap-21 gap-2 ">
            <Image
              src={"/assets/webg/cloude.webp"}
              width={575}
              height={539}
              alt="books"
              className="object-cover object-center max-xl:h-auto "
            />
            <div className="flex flex-col sm:px-0 px-4  lg:text-start lg:items-start max-lg:mt-10">
              <div className=" sm:max-w-126 max-w-97.25 w-full ">

                <button className="font-normal max-w-max max-sm:max-w-77.5 w-full  text-[14px] text-left sm:py-1.5 py-2 sm:mb-3.25 mb-3 sm:px-4 px-3 bg-white/6 border-border border  text-white lg:rounded-[114.9px] md:rounded-[80px] sm:rounded-[40px] rounded-xl cursor-pointer sm:leading-[129%] leading-[123%]">
                  From Cloud Native to AI Native: Catching the next wave of
                  innovation
                </button>
                <Heading vari={"pri"} >The Foundation  of <br className="sm:hidden"></br>  Our Community</Heading>
                  
                <div className="sm:mt-6.25 mt-5.5 " >
                  <Para  vari={"sec"}> Our book is the intellectual core that unifies this entire community. It provides the foundational frameworks and shared language that connect our podcast insights, transformation patterns, and strategic assessments into a single, cohesive system for mastering the AI Native wave. We recommend every leader start here.</Para>
                    
                </div>
                <div>
                  <div className="flex flex-row md:gap-4  sm:gap-3.5 gap-3.25 lg:mt-10 md:mt-9 sm:mt-8 mt-7">
                    <Button vari={"pri"}>Explore the Book</Button>
                    <Button vari={"out"} >Explore the Patterns</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
