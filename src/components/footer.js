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

          <p><strong>Discounted Parking</strong>
            <br />Up to 90 mins - £1.50 | 2 hours - £2 | 3 hours - £3 | 4 hours - £4</p>
        </div>
      </footer>

    </>
  )
}

export default Footer
