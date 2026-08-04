import React from 'react'

const Button = ({children, vari, className = "" }) => {
    const variants = {
        pri: "font-medium w-50.25 h-12.75 border border-none bg-[linear-gradient(91.05deg,#8E2EE0_7.21%,#AF7EF4_86.3%)] hover:scale-105  hover:bg-white/6 hover:border-border flex items-center justify-center",
        sec: "font-medium w-52.25 h-12.75 border border-border bg-white/6 hover:scale-105 hover:bg-[linear-gradient(91.05deg,#8E2EE0_7.21%,#AF7EF4_86.3%)] flex items-center justify-center",
        dan: "font-medium w-93.25 h-13 border border-border bg-transparent hover:scale-105 hover:bg-[linear-gradient(91.05deg,#8E2EE0_7.21%,#AF7EF4_86.3%)] flex items-center justify-center",
        out: "font-normal py-4 px-8.5 border border-border bg-transparent hover:scale-105 hover:bg-[linear-gradient(91.05deg,#8E2EE0_7.21%,#AF7EF4_86.3%)]",
        not: "font-medium w-44.75 h-13 border border-none bg-[linear-gradient(91.05deg,#8E2EE0_7.21%,#AF7EF4_86.3%)] hover:scale-105 hover:bg-transparent flex items-center justify-center",
        
        
    }
  return (

    <button className={`text-base leading-100 text-white rounded-[114.9px] transition-all duration-500 cursor-pointer ${variants[vari]} ${className}`}> {children} </button>

  )
}

export default Button