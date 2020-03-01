import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const MeetTheTeam = () => {
  const data = useStaticQuery(graphql`
    query MeetTheTeamQuery {
      prismicMeetTheTeam {
        id
        data {
          team {
            image {
              alt
              localFile {
                childImageSharp {
                  fluid(quality: 90, maxWidth: 300, maxHeight: 364) {
                    ...GatsbyImageSharpFluid_withWebp
                  }
                }
              }
            }
            name {
              text
            }
            role {
              text
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="gradient-orange--vertical p-8 text-white text-center">
        <h2 className="font-display text-3xl md:text-5xl font-normal">Meet the Team</h2>
        <div className=" sm:flex sm:flex-row sm:flex-wrap sm:justify-center">
          {data.prismicMeetTheTeam.data.team.map((teamData, index) => (
              <div key={index} className="relative my-8 max-w-300 mx-auto text-black sm:w-1/2 sm:mx-4 shadow-lg">
                <Img alt={teamData.image.alt} className="block max-w-300" fluid={teamData.image.localFile.childImageSharp.fluid} />
                <span className="absolute bottom-0 right-0 z-10 bg-white p-2 text-sm">
                  <span className="font-bold">{teamData.name.text}</span>, {teamData.role.text}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </>
  )
}

export default MeetTheTeam
