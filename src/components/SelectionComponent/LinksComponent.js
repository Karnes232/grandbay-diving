import React from "react"

import { Link } from "gatsby"

const LinksComponent = ({ name, url, description, image }) => {
  return (
    <Link
      to={url}
      className="no-underline flex flex-col justify-between items-center cursor-pointer text-center selection-links md:h-52 md:justify-start md:-mt-8"
    >
    <div className="flex flex-col justify-center items-center">
    <h2 className="text-lg text-white font-semibold md:text-2xl">{name}</h2>
      <img src={image} alt="" className="h-24 w-24 md:h-36 md:w-36 object-cover my-2 rounded-full border-solid border-[1px] border-black" />
    </div>
      
      <p className="text-sm text-white mx-16 md:mx-2 md:text-lg">{description}</p>
    </Link>
  )
}

export default LinksComponent
