import React from "react"
import { useStaticQuery } from "gatsby"
import { FaRegCheckCircle } from "react-icons/fa";

const Benefits = () => {
  const data = useStaticQuery(graphql`
    query BenefitsQuery {
      allPrismicSiteSpecific {
        edges {
          node {
            data {
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
      {data.allPrismicSiteSpecific.edges[0].node.data.benefits.map(
        benefitsData => (
			<div key={i}>
				<div>
				<FaRegCheckCircle className="inline mr-2" /> {benefitsData.benefit.raw[0].text}
				</div>
			{increaseCount()}
		  </div>
        )
      )}
    </>
  )
}

export default Benefits
