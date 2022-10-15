import React from "react"
import SingleCourseCard from "./SingleCourseCard"

import dsdImage from "../../images/webP/index-selection-1.webp"

const CourseCardGroup = () => {
  return (
    <div className="relative my-5">
      <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-5 md:p-6 xl:mx-auto">
        <SingleCourseCard
          title="Discover Scuba Diving"
          description="For those who have never tried scuba diving before!"
          image={dsdImage}
          link='/'
        />
        <SingleCourseCard
          title="Scuba Diver"
          description="Dive under the direct supervision of a PADI professional to a maximum depth of 12 meters / 40 feet"
          image={dsdImage}
          link='/'
        />
        <SingleCourseCard
          title="Open Water Diver"
          description="Dive anywhere in the world with a certified buddy!"
          image={dsdImage}
          link='/'
        />
        <SingleCourseCard
          title="Advanced Open Water Diver"
          description="Take it to the next level!"
          image={dsdImage}
          link='/'
        />
      </div>
    </div>
  )
}

export default CourseCardGroup
