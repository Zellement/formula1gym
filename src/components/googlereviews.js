import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { IoMdStar } from "react-icons/io"
import { FaGoogle } from "react-icons/fa"

const Reviews = () => {
  const data = useStaticQuery(graphql`
    query ReviewsQuery {
      allGooglePlacesReview(filter: { rating: { gt: 4 } }) {
        edges {
          node {
            id
            text
            author_name
            rating
            time
          }
        }
      }
    }
  `)

  return (
    <div className="w-full p-4 text-gray-900">
      <div className="md:flex md:flex-row">
        {data.allGooglePlacesReview.edges.map((review, key) => (
          <div className="p-4 my-4 shadow md:mx-2" key={key}>
            {
              (review.node.rating = 5 ? (
                <>
                  <IoMdStar className="inline text-yellow" />
                  <IoMdStar className="inline text-yellow" />
                  <IoMdStar className="inline text-yellow" />
                  <IoMdStar className="inline text-yellow" />
                  <IoMdStar className="inline text-yellow" />
                </>
              ) : null)
            }
            <span className="ml-2 text-sm text-gray-500">
              {timeConverter(review.node.time)}
            </span>
            <p className="my-2 font-bold">{review.node.author_name}</p>
            <p>{review.node.text}</p>
          </div>
        ))}
      </div>
      <div className="w-full pr-2 mb-2 text-right">
        <a target="_blank" rel="noopener noreferrer" className="text-sm transition duration-300 hover:text-orange" href="https://www.google.com/search?q=formular+one+gym&rlz=1C1CHBF_en-GBGB838GB838&oq=formular+one+gym&aqs=chrome..69i57j0l4.2127j0j7&sourceid=chrome&ie=UTF-8#lrd=0x4879c3d5996f7b75:0x8531186fa3c1bef3,1,,,">See all our <FaGoogle className="inline -mt-1" /> Reviews</a>
      </div>

    </div>
  )
}

function timeConverter(unixTimestamp) {
  var a = new Date(unixTimestamp * 1000)
  var months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]
  var year = a.getFullYear()
  var month = months[a.getMonth()]
  var date = a.getDate()
  var min = a.getMinutes()
  if (min === 0) {
    min = "00"
  }
  var time = +date + " " + month + " " + year
  return time
}

export default Reviews
