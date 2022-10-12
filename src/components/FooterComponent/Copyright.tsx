import { Link } from "gatsby"
import React from "react"

const Copyright = () => {
  return (
    <div className="mx-8 flex flex-col justify-between py-4 md:flex-row md:items-center md:space-x-2">
      <Link to="/">
        <p className="footerSitemap">
          &copy; {new Date().getFullYear()} Grand Bay of the Sea
        </p>
      </Link>
    </div>
  )
}

export default Copyright
