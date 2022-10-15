import React from "react"
// import { StaticImage } from "gatsby-plugin-image"

const HeroComponent = ({ page }) => {
  return (
    <div className="absolute top-0 w-full h-[55vh] lg:h-[80vh]">
      <div className={`hero ${page}`}></div>
    </div>
  )
}

export default HeroComponent
