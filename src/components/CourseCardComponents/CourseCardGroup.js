import React from "react"
import SingleCourseCard from "./SingleCourseCard"

import courseCard1 from "../../images/phone/courseCard1.webp"
import courseCard2 from "../../images/phone/courseCard2.webp"
import courseCard3 from "../../images/phone/courseCard3.webp"
import courseCard4 from "../../images/phone/courseCard4.webp"

const CourseCardGroup = () => {
  return (
    <div className="relative my-5 flex justify-center items-center">
      <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between lg:justify-around items-center justify-center text-center  max-w-4xl mx-5 md:p-6 xl:mx-auto">
        <SingleCourseCard
          title="Discover Scuba Diving"
          description="For those who have never tried scuba diving before!"
          image={courseCard2}
          link="/courses/discover"
          hash1='experience'
          hash2='travel'
          hash3='adventure'
        />
        <SingleCourseCard
          title="Scuba Diver"
          description="Dive under the direct supervision of a PADI professional to a maximum depth of 12 meters / 40 feet"
          image={courseCard3}
          link="/courses/scubadiver"
          hash1='PADI'
          hash2='certification'
          hash3='travel'
        />
        <SingleCourseCard
          title="Open Water Diver"
          description="Dive anywhere in the world with a certified buddy!"
          image={courseCard4}
          link="/courses/openwater"
          hash1='travel adventure'
          hash2='PADI'
          hash3='Dominican'
        />
        <SingleCourseCard
          title="Advanced Open Water Diver"
          description="Take it to the next level!"
          image={courseCard1}
          link="/courses/advanced"
          hash1='Advanced'
          hash2='deep diving'
          hash3='PADI'
        />
      </div>
    </div>
  )
}

export default CourseCardGroup
