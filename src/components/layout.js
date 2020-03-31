import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { motion, AnimatePresence } from "framer-motion"
import Phone from "./contact-options/telephone"

import Header from "./header"
import Map from "./map"
import Footer from "./footer"
// import Reviews from "./googlereviews"
import "../styles/main.css"

const duration = 0.35

const variants = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 1,
    transition: {
      duration: duration,
      delay: duration,
      when: "beforeChildren",
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: duration,
    },
  },
}

const Layout = ({ children, location }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // For smooth scroll
  // https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
  if (typeof window !== "undefined") {
    // eslint-disable-next-line global-require
    require("smooth-scroll")('a[href*="#"]')
  }

  return (
    <>
      <div className="gradient-orange--vertical-broken-light">
        <div className="w-100 gradient-orange--horizontal p-1 text-xs text-white lg:hidden"><Phone /></div>
        <Header siteTitle={data.site.siteMetadata.title} />
      </div>
      <AnimatePresence>
        <motion.main
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {children}
        </motion.main>
      </AnimatePresence>
    {/* <Reviews /> */}
      <div className="flex flex-col md:flex-row mt-10">
        <Footer />
        <Map />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
