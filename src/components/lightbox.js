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
					<div className="text-white text-left overflow-y-scroll p-8">
						<p className="font-sans text-2xl">{name}</p>
						<p className="font-sans text-xl text-orange">{role}</p>
						<Img alt={image.alt} className="my-4 block w-full max-w-full h-auto" fixed={image} />
						<HTMLContent className="text-sm font-sans" content={bio} />
					</div>
				]}
			/>
		</div>
	);
}