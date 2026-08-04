"use client"

import React, { useEffect, useRef, useState } from 'react'
import { INOVARTION_DROPDOWN, NAV_DATA, SERVICES_DROPDOWN } from '@/utils/helper'
import Link from 'next/link'
import Icons from './Icons'

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileInnovationOpen, setMobileInnovationOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [innovationOpen, setInnovationOpen] = useState(false);
  const menuRef = useRef(null);


  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileOpen]);
  useEffect(() => {
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setServicesOpen(false);
        setInnovationOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  const closeMobile = () => {
    setIsMobileOpen(false)
    setMobileServicesOpen(false)
    setMobileInnovationOpen(false)
  }

  return (
    <div className='w-full px-4 fixed py-5.5 z-50'>

      <div className=" max-w-[1284.1px] border lg:border-border backdrop-blur-3xl  flex flex-row justify-between items-center p-1.5 bg-white/6 rounded-[90px] w-full mx-auto ">
        <div className='lg:ml-3.5'>
          <Link href="/">
            <Icons icon={'navlogo'} />
          </Link>
        </div>

        <div ref={menuRef} className='hidden lg:flex flex-row gap-3 min-[1100px]:gap-7.5'>
          <div className="flex flex-row gap-3 min-[1100px]:gap-7.5">
            <div className="flex flex-row gap-6 items-center">
              {NAV_DATA.map((item, index) => (
                <div
                  key={index} className={`${index === 1 ? "relative flex items-center" : ""}`}>
                  <div className="flex items-center gap-2.5">
                    <Link
                      href="/"
                      onClick={() => {
                        setServicesOpen(false);
                        setInnovationOpen(false);
                      }}
                    >
                      <p className="text-white hover:text-purple-400 duration-300 text-base leading-140 cursor-pointer">
                        {item}
                      </p>
                    </Link>

                    {index === 1 && (
                      <button
                        type="button"
                        onClick={() => {
                          setServicesOpen(!servicesOpen);
                          setInnovationOpen(false);
                        }}
                        className={`duration-500 cursor-pointer ${servicesOpen ? "rotate-180" : ""
                          }`}
                      >
                        <Icons icon="downarrow" />
                      </button>
                    )}
                  </div>
                  {index === 1 && (
                    <div className={`absolute backdrop-blur-xl gap-3  left-0 z-20 top-full -ml-25.5 pt-3 px-5.5 h-46 w-51.75 flex-col bg-[url('/assets/images/png/navbg.png')] bg-cover bg-center bg-no-repeat ${servicesOpen ? "flex" : "hidden"}`}>
                      {SERVICES_DROPDOWN.map((dropdownItem, i) => (
                        <div key={i} className={`${i === 3 ? "" : "border-b border-dark-grey"} pb-2`}>
                          <Link
                            href='/'
                            className={`text-white/60 hover:text-white w-fit h-7.75 mt-3 text-base `}>{dropdownItem}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

            </div>
            <div className="relative flex flex-row items-center">
              <div className="mr-3 min-[1100px]:mr-7.5">
                <Icons icon="line" />
              </div>
              <div className="flex items-center">
                <Link href="/" className="mr-2.5">
                  <p className="text-white hover:text-purple-400 text-base leading-140 duration-300 cursor-pointer">
                    Waves of{" "}
                    <span className="bg-[linear-gradient(90deg,#FFFFFF_44%,#A96DDE_100%)] bg-clip-text text-transparent">
                      innovation
                    </span>
                  </p>
                </Link>

                <button
                  type="button"
                  onClick={() => {
                    setInnovationOpen(!innovationOpen);
                    setServicesOpen(false);
                  }}
                  className={`mt-1 duration-300 cursor-pointer ${innovationOpen ? "rotate-180" : ""
                    }`}
                >
                  <Icons icon="downarrow" />
                </button>
              </div>
              <div className={`absolute z-60 left-0 -ml-8  duration-500 px-5.5 flex-col top-full h-57 pt-2 bg-[url('/assets/images/png/navbg.png')] backdrop-blur-3xl bg-cover bg-no-repeat bg-center text-white w-64 ${innovationOpen ? "flex" : "hidden"}`}>
                {INOVARTION_DROPDOWN.map((item, index) => {
                  return (
                    <div key={index}
                      className={`${index === 4 ? "" : "border-b border-dark-grey"} pt-2.5 pb-2`}>
                      <Link
                        href='/'
                        className={`text-white/60 hover:text-white w-fit h-7.75 mt-3 text-base `}>{item}
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

        </div>
        <div className='rounded-[60px] bg-black/40 border border-border w-fit p-[0.5px] max-lg:hidden'>
          <button className='py-2 px-4.75 w-full font-medium text-base leading-100 text-white'>Take Our Free Online AI Assessment.</button>
        </div>


        <button
          type="button"
          aria-label="Open menu"
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen(true)}
          className=" bg-[url('/assets/webg/hamclose.webp')] bg-center bg-no-repeat bg-cover flex lg:hidden items-center justify-center w-11 h-13 -mt-2 pt-2 shrink-0"
        >
          <span className='relative w-5 h-3.5 flex flex-col justify-between'>
            <span className='block h-[1.5px] w-full bg-white rounded-full' />
            <span className='block h-[1.5px] w-full bg-white rounded-full' />
            <span className='block h-[1.5px] w-full bg-white rounded-full' />
          </span>
        </button>
      </div>

      <div onClick={closeMobile} aria-hidden="true" className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 lg:hidden ${isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} />

      <div
        role="dialog"
        aria-modal="true"
        className={`fixed top-0 right-0 h-dvh w-[82%] max-w-[360.1px] bg-blue lg:hidden overflow-y-auto transition-transform duration-500 ease-in-out ${isMobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        style={{
          backgroundImage:
            'radial-gradient(120% 60% at 100% 0%, rgba(120,60,200,0.25) 0%, rgba(11,7,16,0) 60%), radial-gradient(140% 80% at 0% 100%, rgba(120,60,200,0.18) 0%, rgba(11,7,16,0) 55%)'
        }}
      >
        <div className='flex flex-col min-h-full px-6 pt-6 pb-10'>
          <div className='flex justify-end'>
            <button
              type="button"
              aria-label="Close menu"
              onClick={closeMobile}
              className="w-11 h-13 flex pt-2 items-center justify-center bg-[url('/assets/webg/hamclose.webp')] bg-center bg-no-repeat bg-cover"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M13 1L1 13" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className='flex flex-col mt-6 gap-4.5'>
            {NAV_DATA.map((item, index) => (
              <div key={index} className='flex flex-col gap-4.5'>
                <div
                  className='flex items-center gap-2 cursor-pointer'
                  onClick={() => {
                    if (index === 1) {
                      setMobileServicesOpen((prev) => !prev)
                    } else {
                      closeMobile()
                    }
                  }}
                >
                  {index === 1 ? (
                    <span className='text-white text-base'>{item}</span>
                  ) : (
                    <Link href="/" onClick={closeMobile} className='text-white text-base'>
                      {item}
                    </Link>
                  )}

                  {index === 1 && (
                    <span className={`duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}>
                      <Icons icon="downarrow" />
                    </span>
                  )}
                </div>

                {index === 1 && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${mobileServicesOpen ? 'max-h-60' : 'max-h-0'
                      }`}
                  >
                    <div className='flex flex-col border-l gap-3 border-white/20'>
                      {SERVICES_DROPDOWN.map((dropdownItem, i) => (
                        <p
                          key={i}
                          onClick={closeMobile}
                          className='text-light-gray hover:text-white flex flex-row items-center gap-2 text-sm cursor-pointer'
                        >
                          <div className='w-2 h-px bg-white/20 '></div> {dropdownItem}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className='h-px w-38 bg-white/20 mt-4.5 mb-5' />

          <div className='flex flex-col gap-4.5'>
            <div
              className='flex items-center gap-2 cursor-pointer'
              onClick={() => setMobileInnovationOpen((prev) => !prev)}
            >
              <span className='text-white text-base'>Waves of innovation</span>
              <span className={`duration-300 ${mobileInnovationOpen ? 'rotate-180' : ''}`}>
                <Icons icon="downarrow" />
              </span>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${mobileInnovationOpen ? 'max-h-96' : 'max-h-0'
                }`}
            >
              <div className='flex flex-col gap-3 border-l border-white/20'>
                {INOVARTION_DROPDOWN.map((item, index) => (
                  <p
                    key={index}
                    onClick={closeMobile}
                    className='text-light-gray flex flex-row items-center gap-2 hover:text-white text-sm cursor-pointer'
                  >
                    <div className='w-2 h-px bg-white/20 '></div> {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className='mt-auto pt-8'>
            <div className='rounded-[60px] bg-[linear-gradient(94.09deg,rgba(255,255,255,0.1)_-7.43%,rgba(255,255,255,0.28)_15.39%,rgba(255,255,255,0.1)_44.9%,rgba(255,255,255,0.28)_67.95%,rgba(255,255,255,0.1)_98.21%)] w-full p-[0.5px]'>
              {/* button */}
              <button
                onClick={closeMobile}
                className='py-2 px-4.75 w-full text-center rounded-[60px] bg-[linear-gradient(91.05deg,#8E2EE0_7.21%,#AF7EF4_86.3%)] text-white cursor-pointer'
              >
                Take Our Free Online AI Assessment.
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar