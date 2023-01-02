import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import ReadyToBegin from "../components/ready-to-begin"
import Hero from "../components/hero"
import Img from "gatsby-image"
import { AiFillCalendar } from "react-icons/ai"

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

const HelpAdvicePage = ({ data }) => {
  const post = data.allPrismicHelpAdvice.edges
  return (
    <>
      <SEO
        title="Gym Nottingham City Centre | Formula One Gym"
        description="No joining fee or contract, just £22pm. Our independant Nottingham gym offers free weights, resistance machines, cardio machines, classes, saunas and sunbeds. See our website to find out more!"
      />

      <motion.section variants={container} initial="hidden" animate="visible">
        <motion.div
          className="shadow-lg gradient-orange--vertical-broken-dark"
          variants={item}
          transition="easeInOut"
        >
          <Hero
            pageTitle={"Help & Advice Centre"}
            pageIntro={"Read some of our useful opinions and tips"}
          />
        </motion.div>
        <motion.section variants={container} initial="hidden" animate="visible">
          <ul className="container grid-flow-col grid-cols-1 gap-8 px-8 py-16 md:grid-cols-2 xl:grid-cols-3">
            {post.map((edge) => {
              return (
                <li key={edge.node.id}>
                  <Link
                    className="flex flex-col gap-8 p-8 border-t-2 shadow-xl border-orange"
                    to={`/help-advice/${edge.node.uid}/`}
                  >
                    <Img
                      className="flex w-full h-40"
                      fixed={edge.node.data.featured_image?.fluid}
                    />
                    <div className="flex flex-col">
                      <h2>{edge.node.data.page_title.text}</h2>
                      <span className="flex flex-row items-center gap-2 opacity-50">
                        <AiFillCalendar />
                        <span>{edge.node.first_publication_date}</span>
                      </span>
                    </div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </motion.section>

        <ReadyToBegin />
      </motion.section>
    </>
  )
}

export default HelpAdvicePage

export const query = graphql`
  query HAQuery {
    allPrismicHelpAdvice {
      edges {
        node {
          uid
          id
          first_publication_date(formatString: "DD MM YYYY")
          data {
            page_title {
              text
            }
            featured_image {
              alt
              fluid(maxHeight: 300) {
                ...GatsbyPrismicImageFluid
              }
            }
          }
        }
      }
    }
  }
`
