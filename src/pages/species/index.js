import React from 'react'
import Helment from "react-helmet"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import HeroComponent from '../../components/HeroComponent/HeroComponent'
import TextComponent from '../../components/TextComponent/TextComponent'
import { fish } from '../../data/fish'
import DiveSite from '../../components/LocalDives/DiveSite'
const index = () => {
  return (
    <Layout>
        <Helment>
        <link rel="canonical" href="https://www.grandbay-puntacana.com/species" />
      </Helment>
      <SEO
        title="Fishes of Punta Cana | Padi Course In Punta Cana | Scuba Classes | Scuba School Near Me | Scuba Certification Punta Cana | Padi Scuba Diving Punta Cana"
        description="Talk to our team about packages of Scuba Diving, Scuba Classes, Shark Diving In Punta Cana. Give us a call right away."
      />
      <HeroComponent page="courses" />
      <div className="mt-[45vh] md:mt-[40vh] lg:mt-[60vh] xl:mt-[65vh]"></div>
      <TextComponent
        title="Fish of the Caribbean"
        paragraph="Just an idea of what you can see"
      />
      <div className="max-w-6xl my-5 xl:my-14 flex flex-col flex-wrap justify-center items-center sm:flex-row mx-5 lg:mx-auto">
      {fish.map(fish => {
          return <DiveSite key={fish.id} {...fish} />
        })}
      </div>
    </Layout>
  )
}

export default index