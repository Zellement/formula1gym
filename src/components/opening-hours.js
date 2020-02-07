import React from "react"
import { Link } from "gatsby"

const OpeningHours = () => {

	var today = new Date()
	var dd = today.getDay()

	const daysofweek = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	]

	const hours = [
		'09:00 - 18:00',
		'06:30 - 21:00',
		'06:30 - 21:00',
		'06:30 - 21:00',
		'06:30 - 21:00',
		'06:30 - 20:00',
		'09:00 - 18:00'
	]

  return (
    <div className="w-100 gradient-orange--horizontal p-1 text-xs text-white md:no-bg lg:absolute lg:top-0 lg:right-0">
		<Link to="contact">Open {daysofweek[dd]} {(hours[dd])}</Link>
	</div>
  )
}

export default OpeningHours
