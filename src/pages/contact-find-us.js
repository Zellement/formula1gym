import React from "react"
import SEO from "../components/seo"
import { useStaticQuery, graphql } from "gatsby"
import { motion } from "framer-motion"
import Hero from "../components/hero"
import { HTMLContent } from "../components/content"
import OpeningHours from "../components/opening-hours"
import Telephone from "../components/contact-options/telephone"
import Email from "../components/contact-options/email"
import { FaFacebookSquare, FaInstagram } from "react-icons/fa"

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
      <SEO title="Contact Us - Formula One Gym" description="Get in touch today with Formula One Gym to learn more about our facilities and classes at our Nottingham city centre based gym." />

      <motion.section variants={container} initial="hidden" animate="visible">
        <motion.div
          className="gradient-orange--vertical-broken-dark"
          variants={item}
          transition="easeInOut"
        >
          <motion.div className="container" variants={container}>
            <Hero
              pageTitle="Find us"
              pageIntro="We have a perfectly convenient location for anyone looking for a Nottingham city centre gym - we're easy to find, just up the tram tracks off old market square"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="container relative p-8 content"
          variants={item}
          transition="easeInOut"
        >
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2">
              <h1>Contact us</h1>

              <p className="mb-6">If you have any questions please feel free to contact us by phone or email so that we can help.</p>
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
                  href="https://www.facebook.com/Formula-One-Gym-161546613946894/"
                >
                  <FaFacebookSquare className="inline -mt-1" /> / Formula-One-Gym
                </a>
                <br />
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://www.instagram.com/formulaonegym/"
                >
                  <FaInstagram className="inline -mt-1" /> / formulaonegym
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
