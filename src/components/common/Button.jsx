import React from 'react'

const Button = ({ children, vari, className = "" }) => {
  const variants = {
    pri: "font-medium lg:w-50.25 md:w-48 sm:w-44 w-41.75 lg:h-12.75 md:h-12 sm:h-11.5 h-10.75  border border-transparent  hover:border-border flex items-center justify-center",
    sec: "font-medium lg:w-52.25 md:w-50.5 sm:w-48.5 w-47.25 lg:h-12.75 md:h-12 sm:h-11.5 h-10.75 border border-border flex items-center justify-center",
    dan: "font-medium w-93.25 h-13 border border-border flex items-center justify-center",
    out: "font-normal lg:py-4 md:py-3.75 sm:py-3.25 py-3  lg:px-8.25 md:px-7.5 sm:px-7 max-[400px]:px-4 px-6.25 whitespace-nowrap border border-border",
    not: "font-medium w-44.75 h-13 border border-transparent flex items-center justify-center hover:border-border",


  }
  return (

    <button className={` group relative overflow-hidden text-base leading-100 text-white rounded-[114.9px] transition-all duration-500 cursor-pointer ${variants[vari]} ${className}`}>

      <span
        className={`absolute inset-0 transition-opacity duration-500 ${vari === "pri" || vari === "not"
          ? "bg-[linear-gradient(91.05deg,#8E2EE0_7.21%,#AF7EF4_86.3%)] group-hover:opacity-0"
          : "bg-white/6 group-hover:opacity-0"
          }`}
      ></span>

      <span
        className={`absolute inset-0 opacity-0 transition-opacity duration-500 ${vari === "pri" || vari === "not"
            ? "bg-white/6 group-hover:opacity-100"
            : "bg-[linear-gradient(91.05deg,#8E2EE0_7.21%,#AF7EF4_86.3%)] group-hover:opacity-100"
          }`}
      ></span>
      <span className=' relative z-10 flex items-center justify-center w-full h-full'>
      {children}
      </span>


    </button>

  )
}

export default Button