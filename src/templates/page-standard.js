import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import Hero from "../components/hero"
import SliceZone from "../components/slicezone"
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

const IndexPage = ({ data }) => {
  const post = data.prismicPage

  return (
    <>
      <SEO title={post.data.meta_title} description={post.data.meta_description} />

      <motion.section variants={container} initial="hidden" animate="visible">
        <motion.div
          className="gradient-orange--vertical-broken-dark"
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

        <motion.div className="relative" variants={item} transition="easeInOut">
          <SliceZone allSlices={post.data.page_content} />
        </motion.div>

        <ReadyToBegin />
      </motion.section>
    </>
  )
}

export default IndexPage

export const query = graphql`
  query($slug: String!) {
    prismicPage(uid: { eq: $slug }) {
      id
      data {
        page_content {
          ... on PrismicPagePageContentMeetTheTeam {
            id
            slice_type
          }
          ... on PrismicPagePageContentClassesTimetable {
            id
            slice_type
          }
          ... on PrismicPagePageContentPrices {
            id
            slice_type
          }
          ... on PrismicPagePageContentFacilities {
            id
            slice_type
          }
          ... on PrismicPagePageContentGoogleReviews {
            id
            slice_type
          }
          ... on PrismicPagePageContentBenefits {
            id
            slice_type
          }
          ... on PrismicPagePageContentTextSection {
            id
            slice_type
            primary {
              rich_text {
                html
              }
            }
          }
          ... on PrismicPagePageContentTextGallery {
            id
            primary {
              text {
                text
                html
              }
            }
            slice_label
            slice_type
            items {
              image {
                alt
                fluid(maxHeight:825) {
                    ...GatsbyPrismicImageFluid
                }
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
