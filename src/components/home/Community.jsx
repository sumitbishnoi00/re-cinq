import Image from "next/image";
import React from "react";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Button from "../common/Button";

const Community = () => {
  return (
    <div>
      <div className=" bg-black -mt-px sm:px-4 ">
        <div className="max-w-[1280.1px] w-full mx-auto pt-15 sm:pt-30 md:pt-40 lg:pt-51.25 bg-center bg-no-repeat bg-cover ">
          <div className="flex w-full items-center min-[1025]:flex-row flex-col max-xl:justify-between  min-[1103px]:gap-21">
            <Image
              src={"/assets/webg/cloude.webp"}
              width={575}
              height={539}
              alt="books"
              className="max-w-[575.1px] w-full  h-[539.29px] "
            />
            <div className="flex flex-col sm:px-0 px-4 sm:items-center sm:text-center lg:text-start lg:items-start">
              <div className="max-w-126 w-full ">
                <button className="font-normal  text-[14px] text-left py-1.5 mb-3.25 px-4 bg-white/6 border-border border hover:scale-105 transition-all duration-300 text-white rounded-[114.9px] cursor-pointer leading-[129%]">
                  From Cloud Native to AI Native: Catching the next wave of
                  innovation
                </button>
                <Heading
                  children={"The Foundation of Our Community"}
                  vari={"pri"}
                />
                <div className="mt-6.25">
                  <Para
                    children={
                      "Our book is the intellectual core that unifies this entire community. It provides the foundational frameworks and shared language that connect our podcast insights, transformation patterns, and strategic assessments into a single, cohesive system for mastering the AI Native wave. We recommend every leader start here."
                    }
                    vari={"sec"}
                  />
                </div>
                <div>
                  <div className="flex flex-row gap-4  mt-10">
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
