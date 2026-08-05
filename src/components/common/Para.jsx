import React from 'react'

const Para = ({children, vari, className = "" }) => {
    const variants = {
        pri: "text-white",
        sec: "text-white/80",


    }
  return (

    <p className={`font-normal md:text-base sm:text-15 text-[14px] sm:leading-156 leading-[172%]  ${variants[vari]} ${className} `}> {children} </p>

  )
}

export default Para