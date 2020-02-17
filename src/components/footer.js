import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaPhone, FaRegEnvelope } from "react-icons/fa"
import Logo from "../components/logo"

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
      prismicSiteSpecific {
        data {
          email {
            text
          }
          telephone {
            text
          }
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
            <a
              rel="nofollow, noindex"
              className="text-blue-mid"
              href={"tel:" + data.prismicSiteSpecific.data.telephone.text}
            >
              <FaPhone className="inline" /> {data.prismicSiteSpecific.data.telephone.text}
            </a>
          </p>

          <p className="mb-4">
            <FaRegEnvelope className="inline" /> <a
              href={"mailto:" + data.prismicSiteSpecific.data.email.text}
              rel="nofollow, noindex"
            >
              {data.prismicSiteSpecific.data.email.text}
            </a>
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
