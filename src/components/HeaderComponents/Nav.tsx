import React from "react"

import HamburgerMenu from "./HamburgerMenu"
import Links from "./Links"

const Nav = () => {
  return (
    <div className="flex justify-end items-center space-x-8 p-2 md:p-6">
      <div className="hidden lg:block space-x-8">
        <Links />
      </div>
      <div className="lg:hidden">
        <HamburgerMenu />
      </div>
    </div>
  )
}

export default Nav
