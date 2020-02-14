import React from "react"
import SEO from "../components/seo"
import { motion } from 'framer-motion'

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
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

const AboutPage = () => {
  return (
    <>
      <SEO title="About Us" />
      
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
      >
        
        <div className="gradient-orange--vertical-dark">
            
          <motion.div 
            className="content"
            variants={item}
            transition="easeInOut"
          >
            
           trhjrtohi

          </motion.div>

        </div>

      </motion.section>
    </>
  )
}

export default AboutPage