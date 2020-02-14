import React from "react"
import Benefits from "../components/benefits"

const HeroIndex = () => {
  return (
    <div className="w-100 text-white p-8">

		<p className="text-orange-semidark text-center text-xl tracking-tight font-bold">Nottingham's favourite gym</p>
		<p className="font-display text-center text-6xl tracking-tight leading-tight lowercase my-4">
			<span className="whitespace-no-wrap block">Just £19</span>
			<span className="whitespace-no-wrap">per month</span>
		</p>

      <Benefits iconColour="text-orange-semidark" />
	  
    </div>
  )
}

export default HeroIndex
