import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaRegCheckCircle } from "react-icons/fa"

const Benefits = ({iconColour, showTitle}) => {
  const data = useStaticQuery(graphql`
query BenefitsQuery {
  allPrismicSiteSpecific {
    edges {
      node {
        data {
          title {
            text
          }
          benefits {
            benefit {
              text
            }
          }
        }
      }
    }
  }
}

  `)

  //For the incremental numbers
  var i = 1

  function increaseCount() {
    i++
  }

  return (
    <>
      {showTitle ? ( <><p className="font-bold text-lg md:text-xl mb-4 lg:max-w-xs">{data.allPrismicSiteSpecific.edges[0].node.data.title.text}</p></> ) : null }
			<ul className="flex flex-row flex-wrap">
        {data.allPrismicSiteSpecific.edges[0].node.data.benefits.map(
          benefitsData => (
          <li key={i} className="text-xs w-1/2 sm:text-sm md:text-base md:my-1">
          <FaRegCheckCircle className={iconColour + " inline mr-2"} /> {benefitsData.benefit.text}
        {increaseCount()}
          </li>
          )
        )}
		  </ul>
    </>
  )
}

export default Benefits
