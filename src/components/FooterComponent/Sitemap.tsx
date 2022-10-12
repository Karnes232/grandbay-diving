import { Link } from "gatsby"

import React from "react"

const Sitemap = () => {
  return (
    <div className="border-b border-gray-500">
      <div className="mx-8 flex flex-col justify-between py-4 md:mx-auto md:max-w-2xl md:flex-row">
        <Link to="/">
          <p className="footerSitemap">Home</p>
        </Link>
        <Link to="/courses">
          <p className="footerSitemap">Scuba Classes</p>
        </Link>
        <Link to="/sites">
          <p className="footerSitemap">Dive Packages</p>
        </Link>
        <Link to="/trips">
          <p className="footerSitemap">Dive Trips</p>
        </Link>
        <Link to="/sitemap">
          <p className="footerSitemap">Site Map</p>
        </Link>
      </div>
    </div>
  )
}

export default Sitemap
