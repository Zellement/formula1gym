import React from "react"
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import { motion } from "framer-motion"
import HowItWorks from "../components/how-it-works"
import HeroIndex from "../components/hero-index"
import ReadyToBegin from "../components/ready-to-begin"
import GalleryCarousel from "../components/gallery-carousel"
import { HTMLContent } from "../components/content"

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
  const post = data.prismicHomepage.data.body[0]
  console.log(data)
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

        <ReadyToBegin />

        <div className="container">
          <div className="flex flex-col lg:flex-row lg:py-10">
            <div className="p-8 lg:w-1/2 max-w-xl mx-auto">
              <HTMLContent
                className="content"
                content={post.primary.text.html}
              />
            </div>

            <div className="lg:p-8 lg:w-1/2">
              <GalleryCarousel images={post.items} />
            </div>
          </div>
        </div>
      </motion.section>
    </>
  )
}

export default IndexPage

export const query = graphql`
query HomeQuery {
  prismicHomepage {
    data {
      body {
        items {
          image {
            localFile {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid_withWebp_tracedSVG
                }
              }
            }
          }
        }
        primary {
          text {
            html
          }
        }
      }
    }
  }
}

`
