import { LOGOS_DATA } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'
import Icons from '../common/Icons'

const Marquee = () => {
  return (
    <section className='bg-black lg:pt-[125.46px] md:pt-20 pt-9 -mt-px'>
      <div className='max-w-361.75 mx-auto w-full flex items-center overflow-hidden flex-col pt-6 pb-2.25'>
        <h2 className='font-normal  text-2xl leading-121 tracking-[-2%] text-center text-white/80 mb-9 sm:mb-9.5 md:mb-10'>Trusted by hundreds of technology <br className='sm:hidden' /> leaders from companies like</h2>
        <div className='w-full overflow-hidden'>
          <div className=' absolute -mt-40 left-0 h-40 z-20'>
            <Icons icon={'elipsethree'} />
          </div>
          <div className=' sm:flex hidden absolute -mt-40 left-0 h-40 z-20'>
            <Icons icon={'elipsethree'} />
          </div>
          <div className=' absolute -mt-40 right-0 h-40 z-20'>
            <Icons icon={'elipsefour'} />
          </div>
          <div className='sm:flex hidden  absolute -mt-40 right-0 h-40 z-20'>
            <Icons icon={'elipsefour'} />
          </div>
          {/* <div className=' absolute max-w-360 w-full h-20 sm:h-50 z-20 bg-black/35'>

          </div> */}
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
                      className=' lg:h-19.5 md:h-15 sm:h-12.5 h-[37.86px] opacity-30'
                    />
                  </div>
                ))}

              </div>

            </div>


          </div >
        </div>
      </div >
    </section >
  )
}

export default Marquee