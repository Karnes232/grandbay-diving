import React from "react"

import { Link } from "gatsby"

const Links = () => {
  return (
    <>
      <Link to="/" className="no-underline">
        <button className="navLinks">Home</button>
      </Link>
      <Link to="/courses" className="no-underline">
        <button className="navLinks">Scuba Classes</button>
      </Link>
      <Link to="/sites" className="no-underline">
        <button className="navLinks">Dive Packages</button>
      </Link>
      <Link to="/trips" className="no-underline">
        <button className="navLinks">Dive Trips</button>
      </Link>
      <Link to="/species" className="no-underline">
        <button className="navLinks">Species Guide</button>
      </Link>
      <Link to="/contact" className="no-underline">
        <button className="navLinks">Contact Us</button>
      </Link>
    </>
  )
}

export default Links
