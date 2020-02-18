import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import QuickContactForm from "../components/quick-contact-form"
import JoinNow from "../components/buttons/join-now"

const ReadyToBegin = () => {
  const data = useStaticQuery(graphql`
    query ReadyToBeginQuery {
      prismicSiteSpecific {
        data {
          join_today_text {
            text
          }
          induction_text {
            text
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="gradient-orange--vertical p-8 text-white text-center">
        <div className="container">
          <p className="font-display text-3xl md:text-5xl">Ready to start?</p>
          <div className="flex flex-col lg:flex-row lg:flex-wrap">
            <div className="my-8 lg:w-1/2  lg:p-4">
              <p className="font-bold text-2xl mb-4">Book your induction</p>
              <p className="mb-8">
                {data.prismicSiteSpecific.data.induction_text.text}
              </p>
              <QuickContactForm />
            </div>
            <div className="my-8 lg:w-1/2 lg:p-4">
              <p className="font-bold text-2xl mb-4">Join today</p>
              <p className="mb-8">
                {data.prismicSiteSpecific.data.join_today_text.text}
              </p>
              <JoinNow />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReadyToBegin
