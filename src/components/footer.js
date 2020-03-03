import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Logo from "./logo"
import Telephone from "./contact-options/telephone"
import Email from "./contact-options/email"

const Footer = () => {
  const getDate = new Date()
  const getYear = getDate.getFullYear()

  const data = useStaticQuery(graphql`
    query CompanyNameQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
    <Telephone className="fixed bottom-0 right-0 mb-2 mr-2 z-50 text-2xl text-white text-center pt-1 gradient-orange--vertical rounded-full w-50 h-50" hideNumber={true} />
      <footer className="gradient-orange--vertical order-1 text-white p-10 pb-20 md:py-16 sm:min-w-400 md:order-first">
        <div className="container">

          <Logo />

          <p className="mt-8 mb-4">
            <Telephone />
          </p>

          <p className="mb-4">
            <Email />
          </p>

          <p className="mb-4">
            <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />{" "}
            {getYear + " " + data.site.siteMetadata.title}
          </p>

          <p><strong>Discounted Parking</strong></p>
            <ul>
              <li>Up to 60 mins - £1</li>
              <li>90 mins - £1.50</li>
              <li>2 hours - £2</li>
              <li>3 hours - £3</li>
            </ul>
        </div>
      </footer>

    </>
  )
}

export default Footer
