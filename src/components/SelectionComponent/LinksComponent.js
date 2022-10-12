import React from "react"

import { Link } from "gatsby"

const LinksComponent = ({ name, url, description, image }) => {
  return (
    <Link
      to={url}
      className="no-underline flex flex-col justify-between items-center cursor-pointer text-center"
    >
      <h2 className="text-lg font-semibold">{name}</h2>
      <img src={image} alt="" className="h-24 w-24 section-link-photo my-2" />
      <p className="text-sm mx-16">{description}</p>
    </Link>
  )
}

export default LinksComponent
