import React, { Component } from 'react'
// import { BodyText, CodeBlock, Image, Quote } from '../components/slices'

export default class SliceZone extends Component {
  render() {
    const { allSlices } = this.props
    console.log({ allSlices })
    if (allSlices) {
      return (
        <>
          {
            allSlices.map(s => {
              switch (s.slice_type) {
                case 'text_section':
                  return (
                    <>
                      This will be text
                    </>
                  )
                case 'quote':
                    return (
                      <>
                        This will be the quote
                      </>
                    )
                case 'full_width_image':
                    return (
                      <>
                        This will be a full width image
                      </>
                    )
                case 'image_gallery':
                    return (
                      <>
                        This will be a gallery
                      </>
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