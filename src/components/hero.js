import React from "react"
import { motion } from "framer-motion"
import { GiTicket } from "react-icons/gi"
import Img from "gatsby-image"
import { AiFillCalendar } from "react-icons/ai"
import Logo from "../components/logo"
import { Link } from "gatsby"

const item = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const Hero = ({ pageTitle, pageIntro, showStars, date, categories }) => {
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
      {categories ? (
        <ul className="flex flex-row flex-wrap items-center justify-center gap-2 mt-4">
          {categories.edges.map((edge) => {
            console.log(edge)
            return (
              <Link
                className="p-1 px-2 text-sm text-white transition-all duration-300 border border-current rounded-full hover:text-orange-semidark"
                to={`/help-advice/category/${edge.node.uid}/`}
              >
                {edge.node.data.category_title.text}
              </Link>
            )
          })}
        </ul>
      ) : null}
    </div>
  )
}

export default Hero
