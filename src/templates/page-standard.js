import React from "react"
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import { motion } from "framer-motion"
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

const IndexPage = ({data}) => {

  const post = data.prismicPage

  // console.log({data})

  return (
    <>
      <SEO title="Home" />

      <motion.section variants={container} initial="hidden" animate="visible">

        <motion.div
          className="gradient-orange--vertical-dark"
          variants={item}
          transition="easeInOut"
        >

          <motion.div className="container" variants={container}>
            <Hero
              pageTitle={post.data.page_title.text}
              pageIntro={post.data.page_intro.text}
              />
          </motion.div>

        </motion.div>

        <motion.div
          className="container"
          variants={item}
          transition="easeInOut"
        >


        </motion.div>
        
      </motion.section>
    </>
  )
}

export default IndexPage

export const query = graphql`
query($slug: String!) {
  prismicPage(uid: {eq: $slug}) {
    id
    data {
      page_intro {
        text
      }
      page_title {
        text
      }
    }
  }
}
`
