import React from 'react'

const Heading = ({children, vari, className = "" }) => {
    const variants = {
        pri: "sm:leading-120 leading-[113%]",
        sec: "sm:leading-130 ",
        
        
    }
  return (

    <h2 className={`font-normal lg:text-50 md:text-5xl sm:text-44 text-40 tracking-[-2%] bg-[linear-gradient(90deg,#fff_10%,#F3E9FC_20%,#E0C5F6_70%)] bg-clip-text text-transparent ${variants[vari]} ${className}`}> {children} </h2>

  )
}

export default Heading