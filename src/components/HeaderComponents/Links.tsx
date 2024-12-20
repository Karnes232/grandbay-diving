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
      <Link to="/shark-dive-punta-cana" className="no-underline">
        <button className="navLinks">Shark Dive</button>
      </Link>
      <Link to="/fishing-punta-cana" className="no-underline">
        <button className="navLinks">Deep Sea Fishing</button>
      </Link>
      <Link to="/contact" className="no-underline">
        <button className="navLinks">Contact Us</button>
      </Link>
    </>
  )
}

export default Links
