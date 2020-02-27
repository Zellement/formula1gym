import React, { Component } from "react"
import GalleryCarousel from "./gallery-carousel"
import { HTMLContent } from "./content"
import MeetTheTeam from "./meet-the-team"
import ClassesTimetable from "./classes-timetable"
// import { BodyText, CodeBlock, Image, Quote } from '../components/slices'

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props
    //console.log(allSlices)
    if (allSlices) {
      return (
        <>
          {allSlices.map((slice, index) => {
            console.log(slice.slice_type)
            switch (slice.slice_type) {
              case "text___gallery":
                return (
                  <div key={index} className="container">
                    <div
                      className="flex flex-col lg:flex-row lg:py-10"
                      key={index}
                    >
                      <div className="p-8 lg:w-1/2 max-w-xl mx-auto">
                        <HTMLContent
                          className="content"
                          content={slice.primary.text.html}
                        />
                      </div>

                      <div className="lg:p-8 lg:w-1/2">
                        <GalleryCarousel images={slice.items} />
                      </div>
                    </div>
                  </div>
                )
              case "meet_the_team":
                return (
                  <div key={index}>
                    <MeetTheTeam />
                  </div>
                )
              case "classes_timetable":
                return (
                  <div key={index}>
                    <ClassesTimetable />
                  </div>
                )
              case "text_section":
                return (
                  <div className="container" key={index}>
                    <HTMLContent
                      className="content p-8"
                      content={slice.primary.rich_text.html}
                    />
                  </div>
                )
              case "image_gallery":
                return (
                  <div className="w-100 bg-red" key={index}>
                    This will be a gallery
                  </div>
                )
              default:
                return null
            }
          })}
        </>
      )
    } else {
      return null
    }
  }
}
