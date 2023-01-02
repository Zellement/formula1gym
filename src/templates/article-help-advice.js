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

const ArticlePage = ({ data }) => {
  const post = data.prismicHelpAdvice
  console.log(post)

  return (
    <>
      <SEO
        title={post?.data?.meta_title}
        description={post?.data?.meta_description}
      />

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

export default ArticlePage

export const query = graphql`
  query ($slug: String!) {
    prismicHelpAdvice(uid: { eq: $slug }) {
      id
      data {
        page_content {
          ... on PrismicHelpAdvicePageContentMeetTheTeam {
            id
            slice_type
          }
          ... on PrismicHelpAdvicePageContentClassesTimetable {
            id
            slice_type
          }
          ... on PrismicHelpAdvicePageContentPrices {
            id
            slice_type
          }
          ... on PrismicHelpAdvicePageContentFacilities {
            id
            slice_type
          }
          ... on PrismicHelpAdvicePageContentGoogleReviews {
            id
            slice_type
          }
          ... on PrismicHelpAdvicePageContentBenefits {
            id
            slice_type
          }
          ... on PrismicHelpAdvicePageContentTextSection {
            id
            slice_type
            primary {
              rich_text {
                html
              }
            }
          }
          ... on PrismicHelpAdvicePageContentTextGallery {
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
                fluid(maxHeight: 825) {
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
