import React from "react"
import LinksComponent from "./LinksComponent"

import image1 from "../../images/c5d3f350-9421-4445-811b-d80ea8ad2247.jpg"

const SelectionComponent = () => {
  return (
    <div className="w-full h-[95vh] my-5">
      <div className="selection">
        <div className="flex flex-col h-full justify-evenly items-center max-w-6xl mx-5 xl:mx-auto">
          <LinksComponent
            name="Scuba Courses"
            url="/courses"
            description="Try diving for the first time, get certified, or upgrade your certification"
            image={image1}
          />
          <LinksComponent
            name="Dive Packages"
            url="/sites"
            description="Dive for a day or more, and save on multiple dive packages"
            image={image1}
          />
          <LinksComponent
            name="Day Trips"
            url="/trips"
            description="Enjoy a day on the caribbean coast of the island, with its white sand and turquoise waters"
            image={image1}
          />
        </div>
      </div>
    </div>
  )
}

export default SelectionComponent
