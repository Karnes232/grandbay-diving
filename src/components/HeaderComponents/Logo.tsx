import React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Logo = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <Link to="/" className="no-underline" aria-label="Home">
          <div className="flex p-2 md:p-6 items-center w-20 h-20 cursor-pointer md:w-40 md:h-40">
            <StaticImage
              src="../../images/logo.png"
              loading="eager"
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
          </div>
        </Link>
        <h1 className="hidden">Grand Bay of the Sea</h1>
      </div>
    </>
  )
}

export default Logo
