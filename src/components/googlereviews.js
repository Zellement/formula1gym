import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Reviews = () => {
  const data = useStaticQuery(graphql`
    query ReviewsQuery {
      allGooglePlacesReview {
        edges {
          node {
            id
            author_name
            relative_time_description
            text
            rating
          }
        }
      }
    }
  `)

  return (
    <div className="w-full">
      {data.allGooglePlacesReview.edges[0].node.text}
    </div>
  )
}

export default Reviews
