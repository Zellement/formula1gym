import React from "react"
import { motion } from "framer-motion"
import { GiTicket } from "react-icons/gi"
import Img from "gatsby-image"
import { AiFillCalendar } from "react-icons/ai"
import Logo from "../components/logo"

const item = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Hero = ({ pageTitle, pageIntro, showStars, date, featuredImage }) => {
  console.log(featuredImage)
  return (
    <div className="flex flex-col p-8 text-white w-100">
      {showStars ? (
        <GiTicket className="self-center inline-block p-2 mb-4 -mt-4 rounded-full text-8xl text-yellow custom-pulse" />
      ) : null}
      <div className="flex flex-col md:flex-row md:justify-center">
        <motion.p
          className="mb-1 mr-4 text-3xl font-display md:text-4xl lg:text-5xl lg:mr-12"
          variants={item}
          transition="easeInOut"
        >
          {pageTitle}
        </motion.p>
        <motion.p
          className="max-w-sm m-0 font-bold md:my-auto text-orange-semidark"
          variants={item}
          transition="easeInOut"
        >
          {pageIntro}
        </motion.p>
      </div>
      {date ? (
        <div className="grid w-full max-w-screen-md grid-cols-2 mx-auto mt-8">
          {featuredImage ? (
            <div className="flex w-full">
              <Img className="w-full" fluid={featuredImage.fluid} />
            </div>
          ) : null}
          {date ? (
            <motion.div
              className="p-8 md:my-auto text-orange-semidark"
              variants={item}
              transition="easeInOut"
            >
              <p className="mb-2 text-white">Written by</p>
              <Logo />

              <p className="flex flex-row items-center gap-2 mt-8">
                <AiFillCalendar />
                {date}
              </p>
            </motion.div>
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export default Hero
