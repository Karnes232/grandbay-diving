import React, { Suspense } from "react"
import Copyright from "./Copyright"
import Sitemap from "./Sitemap"
import SocialMedia from "./SocialMedia"
import Signature from "./Signature"

const TrustBadges = React.lazy(() => import("./TrustBadges"))

const Footer = () => {
  return (
    <footer className="border-b bg-gray-800 shadow-sm w-screen">
      <div className="mx-5 flex max-w-6xl flex-col justify-between xl:mx-auto">
        <SocialMedia />
        <Sitemap />
        <Suspense fallback={<div>Loading....</div>}>
          <TrustBadges />
        </Suspense>
        <div className="flex flex-col justify-between md:flex-row">
          <Copyright />
        </div>
      </div>
      <Signature />
    </footer>
  )
}

export default Footer
