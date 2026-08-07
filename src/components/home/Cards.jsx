import Image from 'next/image'
import React from 'react'
import { CRAD_DATA } from '@/utils/helper'
import Icons from '../common/Icons'
import Heading from '../common/Heading'
import Button from '../common/Button'


const Cards = () => {
    return (
        <div className='bg-black -mt-1 px-4 lg:pt-[150.6px] md:pt-20 sm:pt-15 pt-25 '>
            <div className='max-w-321 mx-auto w-full flex flex-col items-center justify-center'>

                <div className="relative max-w-[1147.05px] w-full flex-col flex items-center justify-center overflow-hidden">

                    <div className="absolute max-sm:hidden inset-0 z-0 pointer-events-none flex justify-center items-center">
                        <Icons icon={"cardbgstar"} className="w-full max-w-[1147.05px] h-auto" />
                    </div>

                    <div className="absolute sm:hidden -top-8.5 left-1.5 translate-x-[-65%] pointer-events-none">
                        <Icons
                            icon={"cardbgleft"}
                            className="w-[306.34px] h-auto"
                        />
                    </div>

                    <div className="absolute sm:hidden -top-8.5 right-0.5 translate-x-[65%] pointer-events-none">
                        <Icons
                            icon={"cardbgright"}
                            className="w-[306.34px] h-auto scale-x-[-1]"
                        />
                    </div>

                    <div className="relative max-w-151.25 w-full flex-col flex items-center justify-center">
                        <button className='px-[15.5px] py-[6.5px] font-normal text-sm leading-100 text-white border border-border rounded-[114.9px] bg-transparent mb-3.25'>Waves of Innovation</button>
                        <Heading vari={"sec"} className='text-center'>Explore the Waves of Innovation Ecosystem</Heading>
                    </div>
                </div>
                <div className=' md:mt-15 mt-10 flex flex-row flex-wrap gap-x-5.25 gap-y-5 justify-center'>
                    {CRAD_DATA.map((item, index) => {
                        return (
                            <div key={index}>
                                <div className=' group relative'>
                                    <div className="absolute hidden group-hover:flex duration-500 rounded-[20px] overflow-hidden transition-all ease-in-out">
                                        <Icons icon="elipsetwo" />
                                    </div>
                                    <div className='lg:w-[413.1px] w-[350.1px] min-[405px]:w-[389.1px] md:w-[350.1px] flex justify-between flex-col p-6 sm:p-5 h-auto min-[405px]:h-[350.1px] md:h-[388.1px] rounded-[20px] bg-white/3 border border-white/12 transition-all duration-500 ease-in-out'>
                                        <div className='mt-3 ml-3 w-fit relative z-10 transition-all duration-500 ease-in-out'>
                                            <Icons icon={item.icon} className="max-sm:max-w-15 max-sm:h-15" />
                                        </div>
                                        <div className='w-7 absolute bg-transparent z-0 mt-4 ml-2 transition-all duration-500 ease-in-out group-hover:shadow-[20px_20px_64px_20px_#8E2EE0]'></div>
                                        <div>
                                            <p className='sm:ml-3 text-white text-2xl md:text-28 leading-120 tracking-[-2%] '>{item.title}</p>
                                            <p className='mt-4 max-sm:mr-6.25 sm:ml-3 text-white/70 max-w-[350.1px] text-sm md:text-base leading-164 sm:leading-144 font-normal mb-6.25'>{item.description}</p>
                                            <Button vari={"dan"} className='w-full py-3.5 max-[767.1px]:max-w-[341.1px]'>
                                                {item.btn}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div >
    )
}

export default Cards