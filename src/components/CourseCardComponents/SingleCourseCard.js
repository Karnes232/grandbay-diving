import React from "react"
import { Link } from "gatsby"
const SingleCourseCard = ({ title, description, image, link }) => {
  return (
    <Link to={link} className="no-underline">
      <div className="max-w-xs w-80 my-4 rounded overflow-hidden shadow-lg">
        <img className="w-full" src={image} alt={title} />
        <div className="px-6 py-4 h-28">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </Link>
  )
}

export default SingleCourseCard
