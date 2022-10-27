import React from "react"
import Logo from "../HeaderComponents/Logo"
import Copyright from "../FooterComponent/Copyright"
import SocialMedia from "../FooterComponent/SocialMedia"

export default function TuiLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      <nav className="bg-transparent sticky top-0 z-50">
        <div className="flex items-center justify-between bg-transparent max-w-6xl mx-5 xl:mx-auto">
          <Logo />

          <div></div>
        </div>
      </nav>
      {children}
      <footer className="border-b bg-gray-800 shadow-sm w-screen">
        <div className="mx-5 flex max-w-6xl flex-col justify-between xl:mx-auto">
          <SocialMedia />
          <div className="flex flex-col justify-between md:flex-row">
            <Copyright />
          </div>
        </div>
      </footer>
    </div>
  )
}
