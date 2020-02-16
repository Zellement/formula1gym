import React, { Component } from 'react'
import GalleryCarousel from "./gallery-carousel"
import { HTMLContent } from "./content"
// import { BodyText, CodeBlock, Image, Quote } from '../components/slices'

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props
    console.log(allSlices)
    if (allSlices) {
      return (
        <>
          {
            allSlices.map((slice, index) => {
              switch (slice.slice_type) {
                case 'text___gallery':
                  return (
                    <div className="flex flex-col md:flex-row" key={index}>

                      <div className="md:w-1/2">
                        <HTMLContent content={slice.primary.text.html} />
                      </div>

                      <div className="md:w-1/2">
                        <GalleryCarousel images={slice.items} />
                      </div>

                    </div>
                  )
                case 'quote':
                  return (
                    <div key={index}>
                      This will be the quote
                    </div>
                  )
                case 'full_width_image':
                  return (
                    <div key={index}>
                      This will be a full width image
                    </div>
                  )
                case 'image_gallery':
                  return (
                    <div key={index}>
                      This will be a gallery
                    </div>
                  )
                default:
                  return null
              }
            })
          }
        </>
      )
    }
    else {
      return null
    }
  }
}