import React from "react"
import Header from "../components/HeaderComponents/Header"
import Footer from "./FooterComponent/Footer"
import Helment from "react-helmet"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Helment>
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <meta name="google-site-verification" content="_73Leg9k9ryZXyP10IC8Nb2dxu3mfjpQG_zxN69KQCs" />
      </Helment>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
