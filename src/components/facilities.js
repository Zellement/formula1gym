import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import ArrowDown from "./arrow-down"

const Facilities = () => {
  const data = useStaticQuery(graphql`
    query FacilitiesQuery {
      prismicSiteSpecific {
        data {
          facilities {
            facility {
              text
            }
            facility_icon {
              fixed(height: 64, width: 64) {
                ...GatsbyPrismicImageFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="p-8 text-center bg-gray-100 relative">
        <h2 className="font-display text-3xl md:text-5xl font-normal">Facilities</h2>
        <div className="flex flex-row flex-wrap sm:justify-center">
          {data.prismicSiteSpecific.data.facilities.map((facilitiesData, index) => (
            <div
              key={index}
              className="p-4 relative my-8 mx-auto text-black sm:mx-8 flex-1 flex flex-col"
            >
              <Img
                className="block max-w-50 mx-auto"
                fixed={facilitiesData.facility_icon.fixed}
              />
              <span className="text-sm">
                <span className="font-bold">{facilitiesData.facility.text}</span>
              </span>
            </div>
          ))}
        </div>
		    <ArrowDown colour="arrow-down--gray" />
      </div>
    </>
  )
}

export default Facilities
