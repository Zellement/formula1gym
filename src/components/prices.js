import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Benefits from "./benefits"
import JoinNow from "../components/buttons/join-now"
import { GiStarsStack } from 'react-icons/gi'

const Prices = () => {
  const data = useStaticQuery(graphql`
    query PricesQuery {
      allPrismicSiteSpecific {
        edges {
          node {
            data {
              direct_debit_price {
                text
              }
              couples_membership_price {
                text
              }
              corporate_membership_price {
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
    <div className="">
      <div className="container max-w-5xl text-white mb-4 flex flex-col md:flex-row">
        <div className="gradient-orange--vertical w-5/6 text-white p-4 text-center flex flex-col relative mx-auto rounded-lg shadow-xl md:rounded-none  md:justify-center lg:rounded-bl-lg">
          <span className="block leading-tight">Only</span>
          <span className="">
            <span className="text-xl -mt-4">£</span>
            <span className="text-7xl text-yellow-light m-0 leading-tight font-bold lg:text-9xl text-shadow-lg">
              {data.allPrismicSiteSpecific.edges[0].node.data.direct_debit_price.text}
            </span>
          </span>
          <span className="block leading-tight">Direct Debit <span className="block">per month</span></span>
          <div className="absolute top-0 right-0 max-w-90 flex justify-center p-2 flex-col bg-gray-200 -mt-4 mr-1 sm:mr-2 rounded-lg shadow md:left-0 md:right-inherit lg:-ml-4 md:ml-2">
            <GiStarsStack className="text-5xl text-yellow block mx-auto" />
            <span className="text-xs text-gray-600">Most popular</span>
          </div>
        </div>
        <div className="p-3 gradient-dark-grey--vertical -mt-4 pt-6 pb-3 md:m-0 md:p-8 lg:rounded-br-lg lg:rounded-tr-lg">
          <Benefits hideStudent={true} showTitle={true} />
        </div>
      </div>

      <div className="block flex justify-center mt-6 mb-8"><JoinNow /></div>

      <div className="p-4 lg:p-8">

        <h2 className="block text-center text-2xl mb-4">Upfront Memberships</h2>
        <div className="p-8 bg-gray-100 rounded-lg mb-4">
          <h3 className="block text-center text-xl m-0">Regular Prices</h3>
          <p className="block text-center mb-4">
            Choose an amount of time and pay upfront for your membership
          </p>
          <div className="flex justify-between flex-row flex-wrap">
            {data.allPrismicSiteSpecific.edges[0].node.data.upfront_prices.map(
              (upfrontPricesData, index) => (
                <div key={index} className="w-1/3 bg-white rounded flex-col flex flex-auto justify-between m-2 shadow text-center md:w-1/4 lg:w-auto">
                  <p className="bg-orange-light font-bold text-gray-700 md:mb-6 p-4 min-h-80 sm:min-h-0 flex">
                    <span className="m-auto">{upfrontPricesData.type.text}</span>
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
          <h3 className="block text-center text-xl m-0">Student Prices</h3>
          <p className="block text-center mb-4">
           Choose an amount of time and pay upfront for your membership - just show
            your student card.
          </p>
          <div className="flex justify-between flex-row flex-wrap">
            {data.allPrismicSiteSpecific.edges[0].node.data.student_prices.map(
              (studentPrices, index) => (
                <div key={index} className="w-1/3 bg-white rounded flex-col flex flex-auto justify-between m-2 shadow text-center md:w-1/4 lg:w-auto">
                  <p className="bg-orange-light font-bold text-gray-700 md:mb-6 p-4 min-h-80 sm:min-h-0 flex">
                    <span className="m-auto">{studentPrices.type.text}</span>
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

        <div className="p-3 gradient-dark-grey--vertical md:m-0 md:p-8 lg:rounded-br-lg lg:rounded-tr-lg text-white rounded-lg">
          <Benefits showTitle={true} />
        </div>
        
      <div className="block flex justify-center mt-6"><JoinNow /></div>

      <div className="container max-w-5xl text-white mb-4 mt-8 flex flex-col md:flex-row">

        <div className="gradient-orange--vertical w-5/6 mb-4 text-white p-4 text-center flex flex-col relative mx-auto rounded-lg shadow-xl md:mb-0 md:rounded-none md:justify-center md:rounded-bl-lg md:rounded-tl-lg">
          <span className="block leading-tight">Couples Membership</span>
          <span className="">
            <span className="text-xl -mt-4">£</span>
            <span className="text-7xl text-yellow-light m-0 leading-tight font-bold lg:text-9xl text-shadow-lg">
              {data.allPrismicSiteSpecific.edges[0].node.data.couples_membership_price.text}
            </span>
          </span>
          <span className="block leading-tight"> <span className="block">per month.</span></span>
          <span className="block leading-tight mt-2 text-xs">Two cards means flexibility for yourself.</span>
        </div>

        <div className="gradient-dark-grey--vertical w-5/6 text-white p-4 text-center flex flex-col relative mx-auto rounded-lg shadow-xl md:rounded-none  md:justify-center md:rounded-br-lg md:rounded-tr-lg">
          <span className="block leading-tight">Corporate Membership</span>
          <span className="">
            <span className="text-xl -mt-4">£</span>
            <span className="text-7xl text-gray-300 m-0 leading-tight font-bold lg:text-9xl text-shadow-lg">
              {data.allPrismicSiteSpecific.edges[0].node.data.corporate_membership_price.text}
            </span>
          </span>
          <span className="block leading-tight"> <span className="block">per month.</span></span>
          <span className="block leading-tight mt-2 text-xs">You supply a list of all employees allowed to use the cards. The number of cards purchased controls how many staff can train at any one time.</span>
        </div>
        
      </div>

      </div>
    </div>
  )
}

export default Prices
