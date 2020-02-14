import React from "react"
import Benefits from "../components/benefits"

const HeroIndex = () => {
  return (
    <div className="w-100 text-white p-8 lg:flex lg:flex-wrap">

		<div className="lg:w-1/2">

			<p className="text-orange-semidark text-center text-xl tracking-tight font-bold
				md:text-2xl md:tracking-normal
				lg:text-left">Nottingham's favourite gym</p>
			<p className="font-display text-center text-6xl tracking-tight leading-tight lowercase my-4
				md:text-7xl md:tracking-normal
				lg:text-8xl lg:text-left
				xl:text-9xl">
				<span className="whitespace-no-wrap block sm:inline sm:mr-4 lg:block">Just £19</span>
				<span className="whitespace-no-wrap">per month</span>
			</p>

		</div>

		<div className="m-auto lg:w-1/2">	

			<Benefits iconColour="text-orange-semidark" />

		</div>
	  
    </div>
  )
}

export default HeroIndex
