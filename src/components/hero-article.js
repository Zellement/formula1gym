import React from "react"
import { motion } from "framer-motion"
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

const HeroArticle = ({
  pageTitle,
  pageIntro,
  date,
  featuredImage,
  category,
}) => {
  console.log(featuredImage)
  return (
    <div className="flex flex-col p-8 w-100 lg:pb-16">
      <div className="grid w-full grid-cols-1 mx-auto mt-8 text-white md:gap-16 md:grid-cols-2">
        {featuredImage ? (
          <div className="flex w-full">
            <Img className="w-full" fluid={featuredImage.fluid} />
          </div>
        ) : null}
        <motion.div
          className="flex flex-col py-8 text-white lg:p-8 md:my-auto"
          variants={item}
          transition="easeInOut"
        >
          <motion.p
            className="text-3xl leading-none font-display md:text-4xl lg:text-5xl "
            variants={item}
            transition="easeInOut"
          >
            {pageTitle}
          </motion.p>

          <motion.p
            className="mt-2 font-bold text-orange-semidark"
            variants={item}
            transition="easeInOut"
          >
            {pageIntro}
          </motion.p>
          <div className="flex flex-col gap-2 lg:gap-4 opacity-60">
            <p className="mt-8 text-white ">Written by</p>
            <Logo />
            <p className="flex flex-row items-center gap-2 mb-4 ">
              <AiFillCalendar />
              {date}
            </p>
          </div>

          <Link
            className="self-start p-2 mt-6 text-sm text-white transition-all duration-300 rounded-full bg-orange-semidark hover:bg-white hover:text-orange"
            to={`/help-advice/category/${category.uid}/`}
          >
            {category.document.data.category_title.text}
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroArticle
