import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import { Link } from "gatsby"
import Hero from "../components/hero"

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      delayChildren: duration,
    },
  },
}
const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

const ThankYouPage = () => {
  return (
    <>
      <SEO title="Thank You | Formula One Gym" />

      <motion.section variants={container} initial="hidden" animate="visible">
        <motion.div
          className="gradient-orange--vertical-broken-dark"
          variants={item}
          transition="easeInOut"
        >
          <motion.div className="container" variants={container}>
            <Hero
              pageTitle="Thank you!"
              pageIntro="Thanks for requesting your free induction session. We'll be in touch within 48 hours to get you booked in."
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative p-8 container content"
          variants={item}
          transition="easeInOut"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h1>Thanks again!</h1>

              <p className="mb-6">Please <Link to="/">go to the homepage</Link>.</p>
          
            </div>
            <div className="md:w-1/2">
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default ThankYouPage
