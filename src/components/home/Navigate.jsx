import Image from "next/image";
import React from 'react'
import Heading from "../common/Heading";
import Button from "../common/Button";
import Para from "../common/Para";

const Navigate = () => {
  return (
    <div>
      <section className=" bg-black px-4 max-[440px]:pt-50 max-[440px]:mt-0 -mt-5">
            <div className="bg-[url('/assets/webg/navigate.webp')] px-3 bg-cover bg-center rounded-b-2xl md:min-h-161 min-h-111 max-[500px]:min-h-121 max-w-7xl mx-auto md:pt-71 sm:pt-30 pt-25">
                <div className="max-w-222 mx-auto flex flex-col justify-center items-center ">
                    
                    <button className="px-4 py-1.5 text-white border-border border hover:scale-105 transition-all duration-300 bg-white/6 rounded-[114.9px] cursor-pointer  mb-3.25">
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