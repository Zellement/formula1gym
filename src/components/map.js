import React from "react"
import Iframe from 'react-iframe'
import LazyLoad from 'react-lazy-load'

const Map = () => {

  return (

	<div className="w-full bg-gray-200">
		<LazyLoad height={480} offsetVertical={300}>

		<Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1699.6841553081588!2d-1.1475165876555333!3d52.95352610058987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4879c3d5996f7b75%3A0x8531186fa3c1bef3!2sFormula%20One%20Fitness%20Gym!5e0!3m2!1sen!2suk!4v1581977718736!5m2!1sen!2suk"
			width="100%"
			height="480px"
			display="initial"
			position="relative"
			title="Formula One Gym Nottingham"
			/>

		</LazyLoad>
	</div>
  )
}

export default Map