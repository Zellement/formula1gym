import React from "react"
import { useStaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import { HTMLContent } from '../components/content'

const HowItWorks = ({ containerClass }) => {
	const data = useStaticQuery(graphql`
    query MyQuery {
      allPrismicSiteSpecific {
        edges {
          node {
            id
            data {
              body {
                id
				slice_label
				slice_type
                primary {
                  image {
                    alt
                    copyright
                    url
                    localFile {
                      id
                      childImageSharp {
                        id
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                  image_class {
                    text
                  }
                  text {
                    html
                    text
                  }
                  title {
                    html
                    text
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
	return (
		<>
			{data.allPrismicSiteSpecific.edges[0].node.data.body.map(
				whyChooseData => (
					<div key={whyChooseData.id}>

						<div className="flex flex-col md:flex-row">

							<BackgroundImage className={whyChooseData.primary.image_class.text + " w-full min-h-200 sm:min-h-250 md:w-1/2 bg-top"} fluid={whyChooseData.primary.image.localFile.childImageSharp.fluid}></BackgroundImage>

							<div className="w-full md:w-1/2 p-4">

								<div className="flex">
									<span className="rounded-full text-white w-50 h-50 bg-orange p-2 text-2xl font-display md:w-75 md:h-75 flex">
										<span className="m-auto block">1</span>
									</span>
									<div className="flex flex-col">
										<span className="font-bold">How it works</span>
										<span className="text-2xl font-bold">{whyChooseData.primary.title.text}</span>
									</div>
								</div>

								<div className="">
									<HTMLContent content={whyChooseData.primary.text.html} />
								</div>

							</div>
						</div>
					</div>
				)
			)}
		</>
	)
}

export default HowItWorks
