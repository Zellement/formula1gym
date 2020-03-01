import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import Hero from "../components/hero"
import { HTMLContent } from "../components/content"
import OpeningHours from "../components/opening-hours"
import Telephone from "../components/contact-options/telephone"
import Email from "../components/contact-options/email"
import { FaFacebookSquare } from "react-icons/fa"

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

const FindUsPage = () => {
  const data = useStaticQuery(graphql`
    query FindUsPageQuery {
      allPrismicSiteSpecific {
        edges {
          node {
            data {
              address {
                html
              }
            }
          }
        }
      }
    }
  `)
  return (
    <>
      <SEO title="Find Us" />

      <motion.section variants={container} initial="hidden" animate="visible">
        <motion.div
          className="gradient-orange--vertical-broken-dark"
          variants={item}
          transition="easeInOut"
        >
          <motion.div className="container" variants={container}>
            <Hero
              pageTitle="Find us"
              pageIntro="We're easy to find, just up the tram tracks off Old Market Square"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative p-8 container content"
          variants={item}
          transition="easeInOut"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h1>Find us</h1>
              <p className="mb-6">
                <Telephone />
              </p>

              <p className="mb-6">
                <Email />
              </p>

              <p className="mb-6">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.facebook.com/Formula-One-Gym-161546613946894/?ref=br_rs"
                >
                  <FaFacebookSquare className="inline -mt-1" /> / FormulaOneGym
                </a>
              </p>

              <HTMLContent
                content={
                  data.allPrismicSiteSpecific.edges[0].node.data.address.html
                }
              />
            </div>
            <div className="md:w-1/2">
              <OpeningHours listed={true} />
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default FindUsPage
