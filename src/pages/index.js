import React from "react"
import { graphql } from 'gatsby'
import SEO from "../components/seo"
import { motion } from 'framer-motion'
import { HTMLContent } from '../components/content'

const duration = 0.35

const container = {
  visible: {
    transition: {
      when: 'beforeChildren',
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

const IndexPage = ( {data} ) => {

  const post = data.prismicHomepage

  return (
    <>
      <SEO title="Home" />
      <motion.section
        variants={container}
        initial="hidden" 
        animate="visible"
        className="container"
      >
        <motion.div 
          className="content"
          variants={item}
          transition="easeInOut"
        >

              {
                post.data.how_it_works.map(how_it_works_data => (
                  <div key={how_it_works_data.title.text}>
                    <h2>How it works</h2>
                    <h3>{how_it_works_data.title.text}</h3>
                    <HTMLContent content={how_it_works_data.text.html} />
                  </div>
                ))
              }

        </motion.div>

      </motion.section>
    </>
  )
}

export default IndexPage

export const query = graphql`
query ContactPage {
  prismicHomepage {
    id
    uid
    data {
      how_it_works {
        image {
          alt
          copyright
          url
        }
        text {
          html
          text
        }
        title {
          html
          text
        }
      }
    }
  }
}
`