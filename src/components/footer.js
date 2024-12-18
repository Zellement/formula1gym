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
      {/* <Telephone className="fixed bottom-0 right-0 z-50 pt-1 mb-2 mr-2 text-2xl text-center text-white rounded-full gradient-orange--vertical w-50 h-50 lg:hidden" hideNumber={true} /> */}
      <footer className="order-1 p-10 pb-20 text-white gradient-orange--vertical md:py-16 sm:min-w-400 md:order-first">
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

          <p>
            <strong>Discounted Parking</strong>
          </p>
          <ul>
            <li>Up to 60 mins - £2.50</li>
            <li>90 mins - £3.00</li>
            <li>2 hours - £4.00</li>
            <li>4 hours - £5.50</li>
          </ul>

          <p className="mt-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-75"
              href="https://www.zellement.com"
            >
              Web Design by Zellement
            </a>
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
