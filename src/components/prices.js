import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Benefits from "./benefits"
import JoinNow from "../components/buttons/join-now"
import { GiStarsStack } from "react-icons/gi"
import { FaRegCheckCircle } from "react-icons/fa"

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
      <div className="container flex flex-col max-w-5xl mb-4 text-white md:flex-row">
        <div className="relative flex flex-col w-5/6 p-4 mx-auto text-center text-white rounded-lg shadow-xl md:w-1/3 gradient-orange--vertical md:rounded-br-none md:justify-center md:rounded-tr-none">
          <span className="block leading-tight">Only</span>
          <span className="">
            <span className="-mt-4 text-2xl">£</span>
            <span className="m-0 font-bold leading-tight text-7xl text-yellow-light lg:text-9xl text-shadow-lg">
              {
                data.allPrismicSiteSpecific.edges[0].node.data
                  .direct_debit_price.text
              }
            </span>
          </span>
          <span className="block leading-tight">
            Direct Debit <span className="block">per month</span>
          </span>
          <div className="absolute top-0 right-0 flex flex-col justify-center p-2 mr-1 -mt-4 bg-gray-200 rounded-lg shadow max-w-90 sm:mr-2 md:left-0 md:right-inherit lg:-ml-4 md:ml-2">
            <GiStarsStack className="block mx-auto text-5xl text-yellow" />
            <span className="text-xs text-gray-600">Most popular</span>
          </div>
        </div>
        <div className="p-3 pt-6 pb-3 -mt-4 rounded-lg md:w-2/3 gradient-dark-grey--vertical md:m-0 md:p-8 md:rounded-bl-none md:rounded-tl-none">
          <Benefits hideStudent={true} showTitle={true} />
        </div>
      </div>

      <div className="flex justify-center block mt-6 mb-8">
        <JoinNow />
      </div>

      {/* Student offer */}

      <div className="container flex flex-col max-w-5xl mb-10 text-white md:flex-row">
        <div className="relative flex flex-col w-5/6 p-4 mx-auto text-center text-white rounded-lg shadow-xl gradient-hotpink--vertical md:rounded-br-none md:justify-center md:rounded-tr-none md:w-1/3">
          <span className="block leading-tight">Student<br />Term-Time Special</span>
          <span className="">
            <span className="-mt-4 text-2xl">£</span>
            <span className="m-0 font-bold leading-none text-white text-7xl lg:text-9xl text-shadow-lg">
              100
            </span>
            <span className="block m-0 text-3xl font-bold leading-tight lg:text-3xl text-shadow-lg">
              Until July 2021*
            </span>
          </span>
          <span className="block mt-8 leading-tight opacity-75">
            That works out at around £10 a month!**
          </span>
          <div className="absolute top-0 right-0 flex flex-col justify-center p-1 -mt-4 -mr-12 bg-gray-200 rounded-lg shadow max-w-90 sm:-mr-2 md:left-0 md:right-inherit lg:-ml-4 md:ml-2 md:mr-0 md:-mt-12 lg:-mt-4">
            <GiStarsStack className="block mx-auto text-4xl text-yellow" />
            <span className="text-xs text-gray-600">Popular for Students</span>
          </div>
        </div>
        <div className="p-3 pt-6 pb-3 -mt-4 rounded-lg gradient-dark-grey--vertical md:m-0 md:p-8 md:rounded-bl-none md:rounded-tl-none md:w-2/3">
          <p className="mb-4 text-lg font-bold md:text-xl lg:max-w-xs">
            Students can take advantage of the following benefits...
          </p>
          <ul className="flex flex-row flex-wrap">
            <li className="w-full text-xs md:w-full lg:w-1/2 sm:w-1/2 sm:text-sm md:text-base md:my-1">
              <FaRegCheckCircle className="inline mr-2" />8 minute walk from NTU city campus
            </li>
            <li className="w-full text-xs md:w-full lg:w-1/2 sm:w-1/2 sm:text-sm md:text-base md:my-1">
              <FaRegCheckCircle className="inline mr-2" />No joining fee
            </li>
            <li className="w-full text-xs md:w-full lg:w-1/2 sm:w-1/2 sm:text-sm md:text-base md:my-1">
              <FaRegCheckCircle className="inline mr-2" />Never over-crowded
            </li>
            <li className="w-full text-xs md:w-full lg:w-1/2 sm:w-1/2 sm:text-sm md:text-base md:my-1">
              <FaRegCheckCircle className="inline mr-2" />Free body composition
            </li>
            <li className="w-full text-xs md:w-full lg:w-1/2 sm:w-1/2 sm:text-sm md:text-base md:my-1">
              <FaRegCheckCircle className="inline mr-2" />Free personalised programme
            </li>
            <li className="w-full text-xs md:w-full lg:w-1/2 sm:w-1/2 sm:text-sm md:text-base md:my-1">
              <FaRegCheckCircle className="inline mr-2" />Free classes
            </li>
            <li className="w-full text-xs md:w-full lg:w-1/2 sm:w-1/2 sm:text-sm md:text-base md:my-1">
              <FaRegCheckCircle className="inline mr-2" />Large free weights area
            </li>
          </ul>
          <p className="block mt-4 text-sm leading-tight opacity-75">
            *Single upfront payment<br />
            **Dependent on when you join
          </p>
        </div>
      </div>

      {/* <div className="flex justify-center block mt-6 mb-8">
        <JoinNow />
      </div> */}

      <div className="">
        <h2 className="block mb-4 text-2xl text-center">Upfront Memberships</h2>
        <div className="p-8 mb-4 bg-gray-100 rounded-lg">
          <h3 className="block m-0 text-xl text-center">Regular Prices</h3>
          <p className="block mb-4 text-center">
            Choose an amount of time and pay upfront for your membership
          </p>
          <div className="flex flex-row flex-wrap justify-between">
            {data.allPrismicSiteSpecific.edges[0].node.data.upfront_prices.map(
              (upfrontPricesData, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between flex-auto w-1/3 m-2 text-center bg-white rounded shadow md:w-1/4 lg:w-auto"
                >
                  <p className="flex p-4 font-bold text-gray-700 bg-orange-light md:mb-6 min-h-80 sm:min-h-0">
                    <span className="m-auto">
                      {upfrontPricesData.type.text}
                    </span>
                  </p>
                  <p className="flex content-end justify-center p-4 mx-auto">
                    <span className="text-gray-400 md:text-2xl">£</span>
                    <span className="text-3xl text-orange md:text-5xl md:-mt-4 xl:text-6xl">
                      {upfrontPricesData.price.text}
                    </span>
                  </p>
                </div>
              )
            )}
          </div>
        </div>
        <div className="p-8 my-4 bg-gray-100 rounded-lg">
          <h3 className="block m-0 text-xl text-center">Student Prices</h3>
          <p className="block mb-4 text-center">
            Choose an amount of time and pay upfront for your membership - just
            show your student card.
          </p>
          <div className="flex flex-row flex-wrap justify-between">
            {data.allPrismicSiteSpecific.edges[0].node.data.student_prices.map(
              (studentPrices, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-between flex-auto w-1/3 m-2 text-center bg-white rounded shadow md:w-1/4 lg:w-auto"
                >
                  <p className="flex p-4 font-bold text-gray-700 bg-orange-light md:mb-6 min-h-80 sm:min-h-0">
                    <span className="m-auto">{studentPrices.type.text}</span>
                  </p>
                  <p className="flex content-end justify-center p-4 mx-auto">
                    <span className="text-gray-400 md:text-2xl">£</span>
                    <span className="text-3xl text-orange md:text-5xl md:-mt-4 xl:text-6xl">
                      {studentPrices.price.text}
                    </span>
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        <div className="p-3 text-white rounded-lg gradient-dark-grey--vertical md:m-0 md:p-8 lg:rounded-br-lg lg:rounded-tr-lg">
          <Benefits showTitle={true} />
        </div>

        <div className="flex justify-center block mt-6">
          <JoinNow />
        </div>

        <div className="container flex flex-col max-w-5xl mt-8 mb-4 text-white md:flex-row">
          <div className="relative flex flex-col w-5/6 p-4 mx-auto mb-4 text-center text-white rounded-lg shadow-xl gradient-orange--vertical md:mb-0 md:rounded-none md:justify-center md:rounded-bl-lg md:rounded-tl-lg">
            <span className="block leading-tight">Couples Membership</span>
            <span className="">
              <span className="-mt-4 text-xl">£</span>
              <span className="m-0 font-bold leading-tight text-7xl text-yellow-light lg:text-9xl text-shadow-lg">
                {
                  data.allPrismicSiteSpecific.edges[0].node.data
                    .couples_membership_price.text
                }
              </span>
            </span>
            <span className="block leading-tight">
              {" "}
              <span className="block">per month.</span>
            </span>
            <span className="block mt-2 text-xs leading-tight">
              Two cards means flexibility for yourself.
            </span>
          </div>

          <div className="relative flex flex-col w-5/6 p-4 mx-auto text-center text-white rounded-lg shadow-xl gradient-dark-grey--vertical md:rounded-none md:justify-center md:rounded-br-lg md:rounded-tr-lg">
            <span className="block leading-tight">Corporate Membership</span>
            <span className="">
              <span className="-mt-4 text-xl">£</span>
              <span className="m-0 font-bold leading-tight text-gray-300 text-7xl lg:text-9xl text-shadow-lg">
                {
                  data.allPrismicSiteSpecific.edges[0].node.data
                    .corporate_membership_price.text
                }
              </span>
            </span>
            <span className="block leading-tight">
              {" "}
              <span className="block">per month.</span>
            </span>
            <span className="block mt-2 text-xs leading-tight">
              You supply a list of all employees allowed to use the cards. The
              number of cards purchased controls how many staff can train at any
              one time.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Prices
