import { Link } from "gatsby"

import React from "react"

const Sitemap = () => {
  return (
    <div className="border-b border-gray-500">
      <div className="mx-8 flex flex-col justify-between pt-4 md:mx-auto md:max-w-2xl md:flex-row">
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
      </div>
      <div className="mx-8 flex flex-col justify-around  md:pt-4 md:mx-auto md:max-w-2xl md:flex-row">
        <Link to="/species">
          <p className="footerSitemap">Species Guide</p>
        </Link>
        
        <Link to="/contact">
          <p className="footerSitemap">Contact Us</p>
        </Link>
        <Link to="/sitemap">
          <p className="footerSitemap">Site Map</p>
        </Link>
      </div>
      <div className="mx-8 flex flex-col justify-around pb-4 md:pt-4 md:mx-auto md:max-w-2xl md:flex-row">
      <Link to="/scuba-diving-punta-cana">
          <p className="footerSitemap">Scuba Diving Punta Cana</p>
        </Link>
      </div>
    </div>
  )
}

export default Sitemap
