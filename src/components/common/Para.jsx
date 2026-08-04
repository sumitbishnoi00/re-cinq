import React from 'react'

const Para = ({children, vari, className = "" }) => {
    const variants = {
        pri: "text-white",
        sec: "text-white/80",


    }
  return (

    <p className={`font-normal text-base leading-156  ${variants[vari]} ${className} `}> {children} </p>

  )
}

export default Para