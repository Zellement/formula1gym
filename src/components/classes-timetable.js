import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const ClassesTimetable = () => {
  const data = useStaticQuery(graphql`
    query prismicClassesTimetableQuery {
      prismicClassesTimetable {
        id
        data {
          body {
            id
            primary {
              day {
                text
              }
            }
            items {
              class {
                text
              }
              duration {
                text
              }
              instructor {
                text
              }
              time {
                text
              }
            }
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <div className="container max-w-4xl">
      <div className="flex flex-col my-8 p-4">
        <div className="overflow-x-auto">
          {data.prismicClassesTimetable.data.body.map(classesData => (
            <>
              <div className="w-100 flex flex-col md:flex-row py-2 border-gray-200 border-solid border-b mb-2">
                <span className="w-full md:w-1/4 font-bold">
                  {classesData.primary.day.text}
                </span>

                <div className="flex flex-col md:w-3/4">
                  {classesData.items.map(itemsData => (
                    <div className="w-full flex text-sm sm:text-base pb-2">
                      <span className="w-1/5 inline-block">
                        {itemsData.time.text}
                      </span>
                      <span className="w-2/5 inline-block">
                        {itemsData.class.text}
                      </span>
                      <span className="w-1/5 inline-block">
                        {itemsData.duration.text} mins
                      </span>
                      <span className="w-1/5 inline-block">
                        {itemsData.instructor.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ClassesTimetable
