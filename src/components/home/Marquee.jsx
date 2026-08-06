import { LOGOS_DATA } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'

const Marquee = () => {
  return (
    <section className='bg-black lg:pt-[125.46px] md:pt-20 pt-9 -mt-px'>
      <div className='max-w-361.75 mx-auto w-full flex items-center overflow-hidden flex-col pt-6 pb-2.25'>
        <h2 className='font-normal  text-2xl leading-121 tracking-[-2%] text-center text-white/80 mb-9 sm:mb-9.5 md:mb-10'>Trusted by hundreds of technology <br className='sm:hidden' /> leaders from companies like</h2>

        <div className='w-full flex items-center justify-center'>
          <div className="marquee-wrapper cursor-pointer">

            <div className="marquee-track gap-7.75 sm:gap-12  md:gap-18 lg:gap-25">

              {[...LOGOS_DATA, ...LOGOS_DATA].map((item, index) => (
                <div
                  key={index}
                  className="shrink-0 flex items-center justify-center"
                >
                  <Image
                    src={item.src}
                    width={item.imgWidth}
                    height={item.imgHeight}
                    alt="logo"
                    className='w-auto lg:h-auto md:h-15 sm:h-12.5 h-[37.86px] opacity-30'
                  />
                </div>
              ))}

            </div>

          </div>


        </div >
      </div >
    </section >
  )
}

export default Marquee