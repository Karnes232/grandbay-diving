import React from "react"
import Helment from "react-helmet"
import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroComponent from "../components/HeroComponent/HeroComponent"


const thankyou = () => {
  return (
    <Layout>
      <Helment>
        <link
          rel="canonical"
          href="https://www.grandbay-puntacana.com/thankyou"
        />
      </Helment>
      <SEO />
      <HeroComponent page="courses" />
      <div className="mt-[45vh] md:mt-[40vh] lg:mt-[60vh] xl:mt-[65vh]"></div>
      <div className="relative z-0 mb-6 w-full group">
      <p className="text-black text-center text-xl my-5">
            Thanks for your message!{" "}
        </p>
        <p className="text-black text-center text-xl my-3">
            We will get back to you right away{" "}
        </p></div>
    </Layout>
  )
}

export default thankyou