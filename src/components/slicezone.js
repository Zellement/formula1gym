import React, { Component } from 'react'
import GalleryCarousel from "./gallery-carousel"
import { HTMLContent } from "./content"
import MeetTheTeam from "./meet-the-team"
// import { BodyText, CodeBlock, Image, Quote } from '../components/slices'

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props
    //console.log(allSlices)
    if (allSlices) {
      return (
        <>
          {
            allSlices.map((slice, index) => {
              switch (slice.slice_type) {
                case 'text___gallery':
                  return (
                    <div key={index} className="container">
                      <div className="flex flex-col md:flex-row md:py-10" key={index}>

                        <div className="p-8 md:w-1/2">
                          <HTMLContent content={slice.primary.text.html} />
                        </div>

                        <div className="p-8 md:w-1/2">
                          <GalleryCarousel images={slice.items} />
                        </div>

                      </div>
                    </div>
                  )
                case 'meet_the_team':
                  return (
                    <div key={index}>
                      <MeetTheTeam />
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
                    <div className="w-100 bg-red" key={index}>
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