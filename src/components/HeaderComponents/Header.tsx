import React from "react"

import Logo from "./Logo"
import Nav from "./Nav"

function Header() {
  return (
    // mb-[50vh] md:mb-[40vh] lg:mb-[50vh]
    <nav className="bg-transparent sticky top-0 z-50">
      <div className="flex items-center justify-between bg-transparent max-w-6xl mx-5 xl:mx-auto">
        <Logo />

        <Nav />
      </div>
    </nav>
  )
}

export default Header
