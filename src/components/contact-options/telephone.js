import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FaPhone } from "react-icons/fa"

const Telephone = ({className, hideNumber}) => {
  const data = useStaticQuery(graphql`
    query TelephoneQuery {
      prismicSiteSpecific {
        data {
          telephone {
            text
          }
        }
      }
    }
  `)
  return (
    <>
      <a
        rel="nofollow, noindex"
        className={className}
        href={"tel:" + data.prismicSiteSpecific.data.telephone.text}
      >
        {hideNumber ? (
          <FaPhone className="inline" />
        ) : (
          <>
            <FaPhone className="inline" /> {data.prismicSiteSpecific.data.telephone.text}
          </>
        )}
      </a>
    </>
  )
}

export default Telephone
