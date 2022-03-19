import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import HowItWorks from "../components/how-it-works"
import HeroIndex from "../components/hero-index"
import ReadyToBegin from "../components/ready-to-begin"
import GalleryCarousel from "../components/gallery-carousel"
import { HTMLContent } from "../components/content"
import { GiStarsStack } from "react-icons/gi"

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
        title="Gym Nottingham City Centre | Formula One Gym"
        description="No joining fee or contract, just £19pm. Our independant Nottingham gym offers free weights, resistance machines, cardio machines, classes, saunas and sunbeds. See our website to find out more!" />

      <motion.section variants={container} initial="hidden" animate="visible">
        <motion.div
          className="shadow-lg gradient-orange--vertical-broken-dark"
          variants={item}
          transition="easeInOut"
        >
          <HeroIndex />
        </motion.div>

        {/* <motion.div
          className="p-8 mb-2 text-center text-white shadow-lg bg-hotpink-500"
          variants={item}
          transition="easeInOut"
        >

            <p className="flex flex-col md:flex-row md:items-center md:justify-center">
              <GiStarsStack className="inline mx-auto text-5xl md:mx-0 text-yellow" />
              <span className="m-0 text-lg font-bold leading-tight uppercase">Student Offer</span>
              <span className="mx-2 my-0 leading-tight">£100 until July 2022!</span>
              <span className="m-0 mx-4 text-sm leading-tight opacity-75">Available until end of October.</span>
            </p> 

			      <Link className="inline-block mt-4 btn btn-hotpink-700" to="/prices/">Find Out More</Link>

        </motion.div> */}

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
