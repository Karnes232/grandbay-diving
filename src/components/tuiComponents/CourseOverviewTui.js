import React from "react"

const CourseOverviewTui = ({ course }) => {
  return (
    <div className="my-5">
      {" "}
      <div className="flex flex-col justify-center items-center mb-2">
        <h4 className="text-xl font-semibold mb-1 xl:text-3xl">
          <strong>Course Overview</strong>
        </h4>
        <p className="my-1 text-sm md:text-base xl:text-lg">
          Course Level: {course.overview.level}
        </p>
        <p className="my-1 text-sm md:text-base xl:text-lg">
          Price: ${course.overview.price} per person
        </p>
        <p className="my-1 text-sm md:text-base xl:text-lg">
          Duration: {course.overview.duration}
        </p>
        <p className="my-1 text-sm md:text-base xl:text-lg">
          Includes: Transport
        </p>
        {course.overview.extra && (
          <p className="my-1 text-sm md:text-base xl:text-lg">
            {course.overview.extra}
          </p>
        )}
      </div>
    </div>
  )
}

export default CourseOverviewTui
