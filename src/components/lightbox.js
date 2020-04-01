import React, { useState } from 'react'
import FsLightbox from 'fslightbox-react'
import { HTMLContent}  from "./content"
import Img from "gatsby-image"

export default function Lightbox({image, name, role, bio, children}) {
	const [toggler, setToggler] = useState(false);

	return (
		<div>
			<a href={bio} onClick={ e => e.preventDefault() + setToggler(!toggler) }>
			{children}
			</a>
			<FsLightbox
				toggler={ toggler }
				customSources={[
					<div className="text-white overflow-y-auto p-8 max-w-lg lg:max-w-3xl lg:overflow-hidden lg:flex">
						<div className="">
						<p className="font-sans text-2xl mx-auto lg:text-right">{name}</p>
						<p className="font-sans text-xl text-orange mx-auto lg:text-right">{role}</p>
						<Img alt={image.alt} className="my-4 block w-full max-w-full h-auto mx-auto" fixed={image} />
						</div>
						<div>
						<HTMLContent className="content text-sm font-sans text-left lg:p-8 lg:mt-12" content={bio} />
						</div>
					</div>
				]}
			/>
		</div>
	);
}