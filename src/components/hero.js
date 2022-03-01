import React from "react"
import { motion } from "framer-motion"
import { GiTicket } from "react-icons/gi"

const item = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Hero = ({pageTitle, pageIntro, showStars}) => {
  return (
    <div className="flex flex-col p-8 text-white w-100">
      { showStars ? 
       <GiTicket className="self-center inline-block p-2 mb-4 -mt-4 rounded-full text-8xl text-yellow custom-pulse" />
      : null }
      <div className="flex flex-col md:flex-row md:justify-center">
        <motion.p
          className="mb-1 mr-4 text-3xl font-display md:text-4xl lg:text-5xl lg:mr-12" 
          variants={item}
          transition="easeInOut">{pageTitle}</motion.p>
        <motion.p
          className="max-w-sm m-0 font-bold md:my-auto text-orange-semidark"
          variants={item}
        transition="easeInOut">{pageIntro}</motion.p>
        </div>
    </div>
  )
}

export default Hero
