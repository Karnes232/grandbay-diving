import React from "react"

const CourseOverview = ({ course }) => {
  return (
    <div className="my-5">
      {" "}
      <div className="flex flex-col justify-center items-center mb-2">
        <h4 className="text-xl font-semibold mb-1">
          <strong>Course Overview</strong>
        </h4>
        <p className="my-1 text-sm">Course Level: {course.overview.level}</p>
        <p className="my-1 text-sm">
          Price: ${course.overview.price} per person
        </p>
        <p className="my-1 text-sm">Duration: {course.overview.duration}</p>
        <p className="my-1 text-sm">Includes: Transport</p>
        {course.overview.extra && (
          <p className="my-1 text-sm">{course.overview.extra}</p>
        )}
      </div>
      <div className="flex flex-col justify-center items-center">
        <p className="mb-1 mt-2">
          <strong>Reserve Now</strong>
        </p>
        <p className="mt-1">Only a 50% deposit</p>
      </div>
    </div>
  )
}

export default CourseOverview
