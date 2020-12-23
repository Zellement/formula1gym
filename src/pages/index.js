import React from "react"
import { graphql } from "gatsby"
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

const IndexPage = ({ data }) => {
  const post = data.prismicHomepage.data.body[0]
  return (
    <>
      <SEO
        title="Formula One Gym | Nottingham City Centre"
        description="No Joining Fee or Contract, Just £19 per month. Free Weights, 60+ Resistance Machines, 40+ Cardio Machines and Classes. See our website to find out more!" />

      <motion.section variants={container} initial="hidden" animate="visible">
        <motion.div
          className="gradient-orange--vertical-broken-dark"
          variants={item}
          transition="easeInOut"
        >
          <HeroIndex />
        </motion.div>

        <motion.div
          className="container"
          variants={item}
          transition="easeInOut"
        >
          <div id="howitworks">
            <HowItWorks />
          </div>
        </motion.div>

        <ReadyToBegin />

        <div className="container">
          <div className="flex flex-col lg:flex-row lg:py-10">
            <div className="max-w-xl p-8 mx-auto lg:w-1/2">
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
        ... on PrismicHomepageBodyTextGallery {
          id
          items {
            image {
              fluid {
                ...GatsbyPrismicImageFluid
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
}

`
