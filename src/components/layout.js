import React from "react"
import Header from "../components/HeaderComponents/Header"
import Footer from "./FooterComponent/Footer"

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      {children}
      <Footer />
    </div>
  )
}
