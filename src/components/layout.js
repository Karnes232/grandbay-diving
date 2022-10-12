import React from "react"
import Header from "../components/HeaderComponents/Header"
import Footer from "./FooterComponent/Footer"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
