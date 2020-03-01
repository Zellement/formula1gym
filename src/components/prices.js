import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Prices = ({ containerClass }) => {
  const data = useStaticQuery(graphql`
    query PricesQuery {
      allPrismicSiteSpecific {
        edges {
          node {
            data {
              direct_debit_price {
                html
                text
              }
              student_prices {
                price {
                  text
                }
                type {
                  text
                }
              }
              upfront_prices {
                type {
                  text
                }
                price {
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
    <div className="p-8">
      <div className="p-8 bg-gray-100 rounded-lg mb-4">
        <h2 className="block text-center text-2xl m-0">Upfront Prices</h2>
        <p className="block text-center mb-4">
          Pay-on-the-day to one of our friendly members of staff.
        </p>
        <div className="flex justify-between flex-row flex-wrap">
          {data.allPrismicSiteSpecific.edges[0].node.data.upfront_prices.map(
            upfrontPricesData => (
              <div className="w-1/3 bg-white rounded flex-col flex flex-auto justify-between m-2 shadow text-center md:w-1/4 lg:w-auto">
                <p className="bg-orange-light font-bold text-gray-700 md:mb-6 p-4 min-h-80 sm:min-h-0 flex justify-center flex-col">
                  {upfrontPricesData.type.text}
                </p>
                <p className="flex mx-auto justify-center content-end p-4">
                  <span className="md:text-2xl text-gray-400">£</span>
                  <span className="text-orange text-3xl md:text-5xl md:-mt-4 xl:text-6xl">
                    {upfrontPricesData.price.text}
                  </span>
                </p>
              </div>
            )
          )}
        </div>
      </div>
      <div className="p-8 bg-gray-100 rounded-lg my-4">
        <h2 className="block text-center text-2xl m-0">Student Prices</h2>
        <p className="block text-center mb-4">
          Pay-on-the-day to one of our friendly members of staff - just show your student card.
        </p>
        <div className="flex justify-between flex-row flex-wrap">
          {data.allPrismicSiteSpecific.edges[0].node.data.student_prices.map(
            studentPrices => (
              <div className="w-1/3 bg-white rounded flex-col flex flex-auto justify-between m-2 shadow text-center md:w-1/4 lg:w-auto">
                <p className="bg-orange-light font-bold text-gray-700 md:mb-6 p-4 min-h-80 sm:min-h-0">
                  {studentPrices.type.text}
                </p>
                <p className="flex mx-auto justify-center content-end p-4">
                  <span className="md:text-2xl text-gray-400">£</span>
                  <span className="text-orange text-3xl md:text-5xl md:-mt-4 xl:text-6xl">
                    {studentPrices.price.text}
                  </span>
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Prices
