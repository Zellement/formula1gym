import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaRegEnvelope } from "react-icons/fa"

const Email = ({ className }) => {
  const data = useStaticQuery(graphql`
    query EmailQuery {
      prismicSiteSpecific {
        data {
          email {
            text
          }
        }
      }
    }
  `)
  return (
    <>
      <a
        href={"mailto:" + data.prismicSiteSpecific.data.email.text}
        rel="nofollow, noindex"
      >
        <FaRegEnvelope className="inline" />{" "}
        {data.prismicSiteSpecific.data.email.text}
      </a>
    </>
  )
}

export default Email
