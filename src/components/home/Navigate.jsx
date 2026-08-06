import Image from "next/image";
import React from 'react'
import Heading from "../common/Heading";
import Button from "../common/Button";
import Para from "../common/Para";
import Icons from "../common/Icons";

const Navigate = () => {
  return (
    <div>
      <section className=" bg-black max-[440px]:mt-0 -mt-5 overflow-hidden">
        <div className=" relative bg-[url('/assets/webg/navigate.webp')] px-4 bg-cover bg-center rounded-b-2xl md:min-h-161 sm:min-h-141 min-h-188.25  max-w-7xl mx-auto md:pt-71 sm:pt-50 pt-84.75">

          <div className="absolute max-sm:hidden inset-0 left-26 z-0 pointer-events-none flex justify-center items-center">
            <Icons icon={"navigatebgstar"} className="max-w-[1116.61px] w-full h-auto" />
          </div>

          <div className="absolute sm:hidden top-30.5 left-18.5 translate-x-[-65%] pointer-events-none">
            <Icons
              icon={"cardbgleft"}
              className="w-[306.34px] h-auto"
            />
          </div>

          <div className="absolute sm:hidden top-31 right-10.5 translate-x-[65%] pointer-events-none">
            <Icons
              icon={"navigateright"}
              className="w-[306.34px] h-auto scale-x-[-1]"
            />
          </div>
          <div className="sm:max-w-222 max-w-97.5 mx-auto flex flex-col justify-center items-center text-center ">

            <button className="px-4 py-1.5 text-white border-border border  bg-white/6 rounded-[114.9px] text-[14px]  mb-3.25">
              How It Works
            </button>
            <Heading children={"Ready to Navigate the Next Wave?"} vari={"sec"} />
            <div className="text-center mt-5 mb-7.5">
              <Para children={"Join a community built for technology leaders by hands-on practitioners. Get direct access to our expert insights, monthly reports, podcast, and the strategic tools we use to guide the world’s leading companies."} vari={"sec"} />

            </div>
            <Button vari={"out"}>Join the Community</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Navigate