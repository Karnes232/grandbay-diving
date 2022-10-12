import React from "react"
// import { StaticImage } from "gatsby-plugin-image"

const HeroComponent = () => {
  return (
    <div className="absolute top-0 w-full h-[55vh]">
      <div className="hero"></div>

      {/* <StaticImage
            src="../../images/background.jpg"
            loading="eager"
            quality={100}
            formats={["auto", "webp", "avif"]}
            alt=""
            className='relative object-top object-cover w-full h-full hero-image'
          /> */}
    </div>
  )
}

export default HeroComponent
