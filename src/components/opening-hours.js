import React from "react"
import { Link } from "gatsby"

const OpeningHours = ({ listed }) => {
  var today = new Date()
  var dd = today.getDay()

  const daysofweek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ]

  const hours = [
    "09:00 - 18:00",
    "06:30 - 21:00",
    "06:30 - 21:00",
    "06:30 - 21:00",
    "06:30 - 21:00",
    "06:30 - 20:00",
    "09:00 - 18:00",
  ]

  if (!listed) {
    return (
      <>
        <div className="w-100 gradient-orange--horizontal p-1 text-xs text-white md:no-bg lg:absolute lg:top-0 lg:right-0">
          <Link to="/find-us">
            Open {daysofweek[dd]} {hours[dd]}
          </Link>
        </div>
      </>
    )
  } else {
    return (
    <div className="">
      <h2>Opening hours</h2>

      {daysofweek.map((daysOfWeekData, index) => (
        <div key={index} className="flex border-b">
          <span className="flex-1 p-2">{daysOfWeekData}</span>
          <span className="flex-1 p-2">{hours[index]}</span>
        </div>
      )
      )}

    </div> 
    )
  }
}

export default OpeningHours
