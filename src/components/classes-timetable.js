import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { GiSandsOfTime } from "react-icons/gi"

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
          classes_key {
            class_description {
              text
            }
            class_name {
              text
            }
          }
        }
      }
    }
  `)
  console.log(data)

  return (
    <div className="">
      <div className="container">
        <div className="flex flex-col lg:flex-row lg:flex-wrap">
          <div className="flex flex-col p-8 lg:w-3/5">
            <div className="overflow-x-auto">
              {data.prismicClassesTimetable.data.body.map(classesData => (
                <div className="w-100 flex flex-col md:flex-row py-2 border-gray-300 border-solid border-b-2 mb-2">
                  <span className="w-full mb-2 md:mb-0 md:mt-3 md:w-1/5 font-bold text-orange">
                    {classesData.primary.day.text}
                  </span>

                  <div className="flex flex-col md:w-4/5">
                    {classesData.items.map(itemsData => (
                      <div className="w-full flex text-sm sm:text-base min-h-42">
                        <span className="w-2/12 my-auto inline-block">
                          {itemsData.time.text}
                        </span>
                        <span className="w-5/12 my-auto inline-block">
                          {itemsData.class.text}
                        </span>
                        <span className="w-2/12 my-auto inline-block relative">
                          {itemsData.duration.text ? (
                            <>
                              <GiSandsOfTime className="hidden sm:block absolute left-0 top-0 text-gray-300 mr-1 mt-1 text-2xl" />
                              <span className="sm:ml-6">
                                {itemsData.duration.text}
                              </span>
                              <span className="sm:ml-6 block text-xs text-gray-400 -mt-2">
                                mins
                              </span>
                            </>
                          ) : null}
                        </span>
                        <span className="w-3/12 my-auto inline-block">
                          {itemsData.instructor.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8 lg:w-2/5 text-sm bg-gray-200 mt-10">
            <h2>About our classes</h2>
            {data.prismicClassesTimetable.data.classes_key.map(
              classesKeyData => (
                <>
                  <p className="text-orange font-bold">{classesKeyData.class_name.text}</p>
                  <p className="mb-4 text-sm">{classesKeyData.class_description.text}</p>
                </>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ClassesTimetable
