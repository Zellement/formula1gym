import React from "react"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import Hero from "../components/hero"
import QuickContactForm from "../components/quick-contact-form"

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

const FreeDayPassPage = () => {
  return (
    <>
      <SEO
        title="Formula One Gym | Free Day Pass!"
        description="Free day pass!"
      />

      <motion.section variants={container} initial="hidden" animate="visible">
        <motion.div
          className="shadow-lg gradient-orange--vertical-broken-dark"
          variants={item}
          transition="easeInOut"
        >
          <Hero
            pageTitle="Free Day Pass"
            showStars={true}
          />
        </motion.div>

        <motion.div className="relative max-w-screen-md px-4 py-16 mx-auto lg:py-32" variants={item} transition="easeInOut">
          <h1>Free Day Pass</h1>
          <p className="mb-8">Please fill out your details to be emailed a free day pass. Simply show the email to our reception and they will let you try our gym for free to see if it's right for you.</p>
          <QuickContactForm btnName="Get Free Day Pass" />
        </motion.div>
      </motion.section>
    </>
  )
}

export default FreeDayPassPage

// export const query = graphql`
// query HomeQuery {
//   prismicHomepage {
//     data {
//       body {
//         ... on PrismicHomepageBodyTextGallery {
//           id
//           items {
//             image {
//               fluid {
//                 ...GatsbyPrismicImageFluid
//               }
//             }
//           }
//           primary {
//             text {
//               html
//             }
//           }
//         }
//       }
//     }
//   }
// }

// `
