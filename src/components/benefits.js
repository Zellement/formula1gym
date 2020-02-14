import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaRegCheckCircle } from "react-icons/fa";

const Benefits = ({iconColour}) => {
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
                  raw {
                    text
                  }
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
      <p className="font-bold text-lg mb-4">{data.allPrismicSiteSpecific.edges[0].node.data.title.text}</p>
			<ul key={i} className="flex flex-row flex-wrap">
        {data.allPrismicSiteSpecific.edges[0].node.data.benefits.map(
          benefitsData => (
          <li className="text-xs w-1/2">
          <FaRegCheckCircle className={iconColour + " inline mr-2"} /> {benefitsData.benefit.raw[0].text}
        {increaseCount()}
          </li>
          )
        )}
		  </ul>
    </>
  )
}

export default Benefits
