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
  const cats = data.allPrismicCategories
  return (
    <>
      <SEO
        title="Help & Advice Centre | Formula One Gym"
        description="Visit the Formula One Gym Help & Advice Centre for useful information including posts on exercises and sunbed tanning from your friendly Nottingham team."
      />

      <h1 className="sr-only">Help &amp; Advice Centre</h1>

      <motion.section variants={container} initial="hidden" animate="visible">
        <motion.div
          className="shadow-lg gradient-orange--vertical-broken-dark"
          variants={item}
          transition="easeInOut"
        >
          <Hero
            pageTitle={"Help & Advice Centre"}
            pageIntro={"Read some of our useful opinions and tips"}
            categories={cats}
          />
        </motion.div>
        <motion.section
          variants={container}
          initial="hidden"
          animate="visible"
          className="container"
        >
          <ul className="grid grid-cols-1 gap-8 px-8 py-16 md:grid-cols-2 xl:grid-cols-3">
            {post.map((edge) => {
              return (
                <li key={edge.node.id} className="relative">
                  <Link
                    className="flex flex-col gap-8 p-8 transition-all duration-300 border-t-2 shadow-lg hover:border-blue border-orange hover:shadow-xl"
                    to={`/help-advice/${edge.node.uid}/`}
                  >
                    <Img
                      className="flex w-full h-40"
                      fluid={edge.node.data?.featured_image?.fluid}
                    />
                    <div className="flex flex-col">
                      <h2>{edge.node.data.page_title.text}</h2>
                      <span className="flex flex-row items-center gap-2 opacity-50">
                        <AiFillCalendar />
                        <span>{edge.node.first_publication_date}</span>
                      </span>
                    </div>
                  </Link>
                  {edge.node.data?.category?.uid ? (
                    <Link
                      className="absolute bottom-0 right-0 z-10 p-2 mb-4 mr-4 text-xs text-white transition-all duration-300 rounded-full bg-orange hover:bg-blue"
                      to={`/help-advice/category/${edge.node.data.category.uid}/`}
                    >
                      {
                        edge.node.data.category.document.data.category_title
                          .text
                      }
                    </Link>
                  ) : null}
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
    allPrismicHelpAdvice(
      sort: { fields: first_publication_date, order: DESC }
    ) {
      edges {
        node {
          uid
          id
          first_publication_date(formatString: "DD/MM/YYYY")
          data {
            page_title {
              text
            }
            category {
              uid
              document {
                ... on PrismicCategories {
                  id
                  data {
                    category_title {
                      text
                    }
                  }
                }
              }
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
    allPrismicCategories {
      edges {
        node {
          uid
          data {
            category_title {
              text
            }
          }
        }
      }
    }
  }
`
