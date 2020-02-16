import React from "react"
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import { motion } from "framer-motion"
import Hero from "../components/hero"
import SliceZone from "../components/slicezone"

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

  return (
    <>
      <SEO
        title={post.data.meta_title}
        description={post.data.meta_title}
      />

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

          <SliceZone allSlices={post.data.page_content} />

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
      page_content {
        ... on PrismicPagePageContentFullWidthImage {
          id
          slice_type
          primary {
            image {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        ... on PrismicPagePageContentTextSection {
          id
          slice_type
          internal {
            content
            description
            ignoreType
            mediaType
          }
          primary {
            rich_text {
              html
            }
          }
        }
        ... on PrismicPagePageContentImageGallery {
          id
          slice_type
          primary {
            gallery_title {
              text
            }
          }
          items {
            image {
              localFile {
                childImageSharp {
                  fixed {
                    ...GatsbyImageSharpFixed
                  }
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
        ... on PrismicPagePageContentQuote {
          id
          slice_type
          primary {
            quote_text {
              text
            }
          }
        }
      }
      page_intro {
        text
      }
      page_title {
        text
      }
      meta_description
      meta_title
    }
  }
}

`
