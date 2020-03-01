import React, { Component } from "react"
import GalleryCarousel from "./gallery-carousel"
import { HTMLContent } from "./content"
import MeetTheTeam from "./meet-the-team"
import ClassesTimetable from "./classes-timetable"
import Prices from "./prices"
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
                  <div key={index} className="p-8 container lg:p-12">
                    <div
                      className="flex flex-col lg:flex-row"
                    >
                      <div className="lg:w-1/2 max-w-xl mx-auto">
                        <HTMLContent
                          className="content"
                          content={slice.primary.text.html}
                        />
                      </div>

                      <div className="lg:w-1/2">
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
                  <div className="p-4 container lg:p-12" key={index}>
                    <ClassesTimetable />
                  </div>
                )
              case "text_section":
                return (
                  <div className="p-8 container lg:p-12" key={index}>
                    <HTMLContent
                      className="content"
                      content={slice.primary.rich_text.html}
                    />
                  </div>
                )
              case "prices":
                return (
                  <div className="p-8 container lg:p-12" key={index}>
                    <Prices />
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
