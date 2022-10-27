import React, { Suspense } from "react"
import BackgroundCarousel from "../BackgroundCarousel/BackgroundCarousel"
import CourseOverviewTui from "./CourseOverviewTui"
import TextComponent from "../TextComponent/TextComponent"

const CourseComponent = ({ course }) => {
  console.log(course)
  return (
    <>
      {course && (
        <div className="my-5">
          <div className="flex flex-col lg:flex-row lg:mx-auto max-w-6xl xl:h-[35rem]">
            <div className="lg:flex lg:flex-col lg:justify-start lg:mt-5 xl:min-h-full xl:justify-center xl:mt-0">
              <TextComponent
                title={course.title}
                paragraph={course.paragraph}
              />
            </div>
            <div className="lg:w-[45rem] xl:mx-10 lg:min-h-full lg:flex lg:flex-col md:justify-center">
              <CourseOverviewTui course={course} />
            </div>
            <div className="lg:flex lg:flex-col lg:justify-start lg:mt-5 xl:min-h-full xl:justify-center xl:mt-0">
              <TextComponent
                title={course.title2}
                paragraph={course.paragraph2}
              />
            </div>
          </div>
          {course.details && (
            <div className="flex flex-col justify-center items-center">
              {/* <hr class="border-2 border-blue-500 w-52"  /> */}
              <Suspense fallback={<div>Loading...</div>}>
                <BackgroundCarousel
                  course={course}
                  className="course-carousel"
                />
              </Suspense>
              <div className="flex flex-col max-w-6xl">
                <div className="lg:flex xl:space-x-4">
                  <TextComponent paragraph={course.details} />
                  <TextComponent paragraph={course.details2} />
                </div>
                <hr className="mt-5 border-2 border-blue-500 w-52 mx-auto" />
                <div className="lg:flex xl:space-x-4 flex-grow">
                  <TextComponent paragraph={course.details3} />
                  <TextComponent paragraph={course.details4} />
                </div>
              </div>
            </div>
          )}
          {course.link === "/tui/discover" && (
            <Suspense fallback={<div>Loading...</div>}>
              <BackgroundCarousel
                course={course}
                className="discover-carousel"
              />
            </Suspense>
          )}
        </div>
      )}
    </>
  )
}

export default CourseComponent
