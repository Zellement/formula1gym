import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import Hero from "../components/hero"
import Img from "gatsby-image"
import { AiFillCalendar } from "react-icons/ai"
import ReadyToBegin from "../components/ready-to-begin"

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

const CategoryPage = ({ data }) => {
  const post = data.prismicCategories
  const articles = data.allPrismicHelpAdvice
  console.log(post)

  return (
    <>
      <SEO
        title={post?.data?.meta_title.text}
        description={post?.data?.meta_description.text}
      />

      <motion.section variants={container} initial="hidden" animate="visible">
        <motion.div
          className="gradient-orange--vertical-broken-dark"
          variants={item}
          transition="easeInOut"
        >
          <motion.div className="container" variants={container}>
            <Hero
              pageTitle={post.data.category_title?.text}
              pageIntro={post.data.category_intro?.text}
            />
          </motion.div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="container"
        >
          <ul className="grid grid-cols-1 gap-8 px-8 py-16 md:grid-cols-2 xl:grid-cols-3">
            {articles.edges.map((edge) => {
              console.log(edge.node)
              if (edge.node.data.category.uid === post.uid) {
                return (
                  <li key={edge.node.id} className="relative">
                    <Link
                      className="flex flex-col gap-8 p-8 transition-all duration-300 border-t-2 shadow-lg hover:border-blue border-orange hover:shadow-xl"
                      to={`/help-advice/${edge.node.uid}/`}
                    >
                      <Img
                        className="flex w-full h-40"
                        fluid={edge.node.data.featured_image?.fluid}
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
              }
              return null
            })}
          </ul>
        </motion.div>

        <ReadyToBegin />
      </motion.section>
    </>
  )
}

export default CategoryPage

export const query = graphql`
  query ($slug: String!) {
    prismicCategories(uid: { eq: $slug }) {
      id
      uid
      data {
        category_title {
          text
        }
        category_intro {
          text
        }
        meta_description {
          text
        }
        meta_title {
          text
        }
      }
    }
    allPrismicHelpAdvice {
      edges {
        node {
          uid
          id
          first_publication_date(formatString: "DD MM YYYY")
          data {
            category {
              uid
            }
            page_title {
              text
            }
            page_intro {
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
