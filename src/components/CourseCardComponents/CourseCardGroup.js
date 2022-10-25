import React from "react"
import SingleCourseCard from "./SingleCourseCard"

import courseCard1 from '../../images/phone/courseCard1.webp'
import courseCard2 from '../../images/phone/courseCard2.webp'
import courseCard3 from '../../images/phone/courseCard3.webp'
import courseCard4 from '../../images/phone/courseCard4.webp'

const CourseCardGroup = () => {
  return (
    <div className="relative my-5 flex justify-center items-center">
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between lg:justify-around items-center justify-center text-center  max-w-4xl mx-5 md:p-6 xl:mx-auto">
        <SingleCourseCard
          title="Discover Scuba Diving"
          description="For those who have never tried scuba diving before!"
          image={courseCard2}
          link="/courses/discover"
        />
        <SingleCourseCard
          title="Scuba Diver"
          description="Dive under the direct supervision of a PADI professional to a maximum depth of 12 meters / 40 feet"
          image={courseCard3}
          link="/courses/scubadiver"
        />
        <SingleCourseCard
          title="Open Water Diver"
          description="Dive anywhere in the world with a certified buddy!"
          image={courseCard4}
          link="/courses/openwater"
        />
        <SingleCourseCard
          title="Advanced Open Water Diver"
          description="Take it to the next level!"
          image={courseCard1}
          link="/courses/advanced"
        />
      </div>
    </div>
  )
}

export default CourseCardGroup
