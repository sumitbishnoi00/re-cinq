import React from 'react'

const Heading = ({children, vari, className = "" }) => {
    const variants = {
        pri: "leading-120",
        sec: "leading-130",
        
        
    }
  return (

    <h2 className={`font-normal text-50 tracking-[-2%] text-white ${variants[vari]} ${className}`}> {children} </h2>

  )
}

export default Heading