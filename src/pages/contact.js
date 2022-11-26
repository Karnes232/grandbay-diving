import React from "react"
import Helment from "react-helmet"
import SEO from "../components/seo"
import Layout from "../components/layout"
import HeroComponent from "../components/HeroComponent/HeroComponent"
import ContactForm from "../components/ContactForm/ContactForm"

const contact = () => {
  return (
    <Layout>
      <Helment>
        <link
          rel="canonical"
          href="https://www.grandbay-puntacana.com/contact"
        />
      </Helment>
      <SEO
        title="Contact Us | Padi Course In Punta Cana | Scuba Classes | Scuba School Near Me | Scuba Certification Punta Cana | Padi Scuba Diving Punta Cana"
        description="Come and discover scuba diving with the experts at Grand Bay of The Sea. Contact Us for personalized packages and services."
      />
      <HeroComponent page="courses" />
      <div className="mt-[45vh] md:mt-[40vh] lg:mt-[60vh] xl:mt-[65vh]"></div>
      <ContactForm />
    </Layout>
  )
}

export default contact
