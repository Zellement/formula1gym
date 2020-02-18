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
      <footer className="gradient-orange--vertical order-1 text-white p-10 pb-20 md:py-16 min-w-400 md:order-first">
        <div className="container">

          <Logo />

          <p className="mt-8 mb-4">
            <Telephone />
          </p>

          <p className="mb-4">
            <Email />
          </p>

          <p>
            <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />{" "}
            {getYear + " " + data.site.siteMetadata.title}
          </p>
        </div>
      </footer>

    </>
  )
}

export default Footer
