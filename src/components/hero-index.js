import React from "react"
import Benefits from "../components/benefits"
import JoinNow from "../components/buttons/join-now"
import { Link } from "gatsby"

const HeroIndex = () => {
  return (
    <div className="container p-4 text-white lg:flex lg:flex-wrap lg:px-16">

			{/* <div className="w-full p-2 mb-8 text-center rounded-lg bg-orange-semidark">

				<p className="text-lg font-bold text-yellow-light">FREE Day Passes for all new members.</p>
				<p>Sign up using our induction form below and when we book you in, simply mention the free day pass!</p>
				<p className="text-sm">Offer expires end of April</p>

			</div> */}

		<div className="lg:w-1/2">

			{/* <p className="text-xl font-bold tracking-tight text-center text-orange-semidark md:text-2xl md:tracking-normal lg:text-left">Nottingham's favourite gym</p> */}
			<p className="my-4 text-5xl leading-tight tracking-tight text-center font-display md:tracking-normal lg:text-6xl lg:text-left xl:text-7xl">
				<span className="block whitespace-no-wrap sm:inline sm:mr-4 lg:block">Nottingham's</span>
				<span className="whitespace-no-wrap">favourite gym</span>
			</p>

		</div>

		<div className="m-auto lg:w-1/2">	

			<Benefits showTitle={true} iconColour="text-orange-semidark" />

		</div>

		<div className="flex flex-col items-center w-full my-4 text-center sm:flex-row sm:justify-center">
			
			<JoinNow />

			<span className="my-2 font-bold text-orange-semidark sm:mx-4">or</span>

			<Link className="btn btn-yellow" to="/#howitworks">Learn How It Works</Link>

		</div>
	  
    </div>
  )
}

export default HeroIndex
