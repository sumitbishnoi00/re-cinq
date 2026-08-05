import Image from "next/image";
import React from "react";
import Heading from "../common/Heading";
import Para from "../common/Para";
import Icons from "../common/Icons";

const Writers = () => {
  return (
    <section className="bg-black px-4 lg:pt-24 md:pt-20  pt-15 min-[768px]:pt-[175.27px] -mb-20 -mt-px">
      <div className="max-w-167 mx-auto flex flex-col justify-center items-center text-center">
        <div className="flex  gap-7 text-center lg:mb-[6.65px] md:mb-4 sm:mb-5 mb-[27.65px]">
          <div>
            <Image
              className="w-[114.71px] xl:h-[128.34px] h-auto "
              width={114.71}
              height={128.34}
              src="/assets/webg/writerfirst.webp"
              alt="Pini Reznik"
            />
            <h2 className="text-base font-normal text-white opacity-80 mt-2.5 leading-156 ">
              Pini Reznik
            </h2>
          </div>
          <div>
            <Image
              className="w-[114.71px] h-[128.34px]"
              width={114.71}
              height={128.34}
              src="/assets/webg/writersecond.webp"
              alt="Michael Müller"
            />
            <h2 className="text-base font-normal text-white opacity-80  mt-2.5 leading-156">
              Pini Reznik
            </h2>
          </div>
        </div>
        <Heading vari={"pri"}>
          A Note From <br className="sm:hidden" /> The Writers
        </Heading>
        <div className="text-center sm:mt-6.25 mt-6">
          <Para vari={"sec"}>
            “Having navigated the Cloud Native wave, the shift to AI Native
            feels familiar. We have seen firsthand the predictable patterns that
            lead to costly mistakes and stalled projects <br className="max-sm:hidden" />
            We created this ecosystem to share those hard-won lessons. Whether
            you are reading the book, using the patterns, or taking the
            assessment, our goal is to give you a pragmatic playbook to make the
            right architectural decisions.”
          </Para>
        </div>

        <div className="sm:mt-2 mt-4 flex flex-row gap-2 items-center">
          <h2 className="text-base font-medium leading-157 italic text-white">
            Pini Reznik
          </h2>
          <span>
            <Icons icon={"row"} />
          </span>
          <h2 className="text-base font-medium leading-157 italic text-white">
            Michael Müller
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Writers;
