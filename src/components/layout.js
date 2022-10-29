import React from "react"
import Header from "../components/HeaderComponents/Header"
import Footer from "./FooterComponent/Footer"
import Helment from "react-helmet"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-x-hidden">
      <Helment>
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      </Helment>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
