import React from "react"
//import { graphql } from 'gatsby'
import SEO from "../components/seo"
import { motion } from "framer-motion"
import HowItWorks from "../components/how-it-works"
import HeroIndex from "../components/hero-index"

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

const IndexPage = () => {
  return (
    <>
      <SEO title="Home" />

      <motion.section variants={container} initial="hidden" animate="visible">

        <motion.div
          className="gradient-orange--vertical-broken-dark"
          variants={item}
          transition="easeInOut"
        >

          <div id="howitworks" className="container">
            <HeroIndex />
          </div>

        </motion.div>

        <motion.div
          className="container"
          variants={item}
          transition="easeInOut"
        >

          <HowItWorks />

        </motion.div>
        
      </motion.section>
    </>
  )
}

export default IndexPage

// export const query = graphql`
// query ContactPage {
//   prismicHomepage {
//     id
//     uid
//     data {
//       how_it_works {
//         image {
//           alt
//           copyright
//           url
//         }
//         text {
//           html
//           text
//         }
//         title {
//           html
//           text
//         }
//       }
//     }
//   }
// }
// `
