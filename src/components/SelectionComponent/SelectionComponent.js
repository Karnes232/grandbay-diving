import React from "react"
import LinksComponent from "./LinksComponent"

import image1 from "../../images/webP/index-selection-1.webp"
import image2 from "../../images/webP/index-selection-2.webp"
import image3 from "../../images/webP/index-selection-3.webp"

const SelectionComponent = () => {
  return (
    <div className="w-full h-[95vh] md:h-[50vh] lg:[75vh] my-5">
      <div className="selection">
        <div className="flex flex-col h-full justify-evenly items-center max-w-6xl mx-5 md:flex-row xl:mx-auto">
          <LinksComponent
            name="Scuba Courses"
            url="/courses"
            description="Try diving for the first time, get certified, or upgrade your certification"
            image={image1}
            textColor="text-white"
          />
          <LinksComponent
            name="Dive Packages"
            url="/sites"
            description="Dive for a day or more, and save on multiple dive packages"
            image={image3}
            textColor="text-white"
          />
          <LinksComponent
            name="Day Trips"
            url="/trips"
            description="Enjoy a day on the caribbean coast of the island, with its white sand and turquoise waters"
            image={image2}
            textColor="text-white"
          />
        </div>
      </div>
    </div>
  )
}

export default SelectionComponent
