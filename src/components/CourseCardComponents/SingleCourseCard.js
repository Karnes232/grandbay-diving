import React from "react"
import { Link } from "gatsby"
const SingleCourseCard = ({ title, description, image, link }) => {
  return (
    <Link to={link} className="no-underline">
      <div class="max-w-xs my-4 rounded overflow-hidden shadow-lg">
        <img class="w-full" src={image} alt={title} />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{title}</div>
          <p class="text-gray-700 text-base">{description}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #photography
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #travel
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #winter
          </span>
        </div>
      </div>
    </Link>
  )
}

export default SingleCourseCard
