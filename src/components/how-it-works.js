import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import { HTMLContent } from '../components/content'
import QuickContactForm from '../components/quick-contact-form'

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

  // For the incremental numbers
  var i = 1

  function increaseCount(){
    i++
  }

  function checkNumber(){
    if (i === 1) {
      return (
        <div className="mt-4"><QuickContactForm /></div>
      )
    }
  }

	return (
		<>
			{data.allPrismicSiteSpecific.edges[0].node.data.body.map(
				whyChooseData => (
					<div key={whyChooseData.id}>

						<div className="flex flex-col md:flex-row">

							<BackgroundImage className={whyChooseData.primary.image_class.text + " w-full min-h-200 sm:min-h-250 md:w-1/2 bg-top"} fluid={whyChooseData.primary.image.localFile.childImageSharp.fluid}></BackgroundImage>

							<div className="w-full p-8 md:w-1/2 md:p-12 lg:p-20">

								<div className="flex mb-4">
									<span className="rounded-full text-white w-50 h-50 min-w-50 bg-orange p-2 text-2xl font-display flex mr-4">
										<span className="m-auto block">{i}</span>
									</span>
									<div className="flex flex-col">
										<span className="font-bold text-orange-semidark leading-tight">How it works</span>
										<span className="text-2xl font-bold text-orange leading-tight">{whyChooseData.primary.title.text}</span>
									</div>
								</div>

								<div className="max-w-lg">
									<HTMLContent content={whyChooseData.primary.text.html} />
								</div>

                {checkNumber()}

							</div>
						</div>
            {increaseCount()}
					</div>
				)
			)}
		</>
	)
}

export default HowItWorks
