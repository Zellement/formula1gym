import React from "react"
import { Link } from "gatsby"

const OpeningHours = () => {

  const daysofweek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ]

  const hours = [
    "06:30 - 21:00",
    "06:30 - 21:00",
    "06:30 - 21:00",
    "06:30 - 21:00",
    "06:30 - 20:00",
    "09:00 - 18:00",
    "09:00 - 18:00",
  ]
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

export default OpeningHours
