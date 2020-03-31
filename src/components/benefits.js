import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaRegCheckCircle } from "react-icons/fa"

const Benefits = ({ iconColour, showTitle, hideStudent }) => {
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

  return (
    <>
      {console.log(hideStudent)}
      {showTitle ? (
        <>
          <p className="font-bold text-lg md:text-xl mb-4 lg:max-w-xs">
            {data.allPrismicSiteSpecific.edges[0].node.data.title.text}
          </p>
        </>
      ) : null}
      <ul className="flex flex-row flex-wrap">
        {data.allPrismicSiteSpecific.edges[0].node.data.benefits.map(
          (benefitsData, index) => (
            <li
              key={index}
              className="text-xs w-1/2 sm:text-sm md:text-base md:my-1"
            >
              {benefitsData.benefit.text === "Student discount" &&
              hideStudent ? null : (
                <>
                  <FaRegCheckCircle className={iconColour + " inline mr-2"} />
                  {benefitsData.benefit.text}
                </>
              )}
            </li>
          )
        )}
      </ul>
    </>
  )
}

export default Benefits
