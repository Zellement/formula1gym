import React from "react"
import { motion } from "framer-motion"

const item = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Hero = ({pageTitle, pageIntro}) => {
  return (
    <div className="w-100 text-white p-8 flex flex-col md:flex-row md:justify-center">
      <motion.p
        className="text-3xl mb-1 mr-4 font-display md:text-4xl lg:text-5xl lg:mr-12" 
        variants={item}
        transition="easeInOut">{pageTitle}</motion.p>
      <motion.p
        className="text-orange-semidark font-bold m-0 max-w-sm"
        variants={item}
        transition="easeInOut">{pageIntro}</motion.p>
    </div>
  )
}

export default Hero
