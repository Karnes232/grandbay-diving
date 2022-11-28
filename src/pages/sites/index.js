import React, { Suspense } from "react"
import Helment from "react-helmet"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import HeroComponent from "../../components/HeroComponent/HeroComponent"
import TextComponent from "../../components/TextComponent/TextComponent"
import LocalDivesOverview from "../../components/LocalDives/LocalDivesOverview"
import videoAdvanced from "../../video/greyshark.mp4"
import { divesites } from "../../data/divesites"

const CardComponent = React.lazy(() =>
  import("../../components/LocalDives/CardComponent")
)

const BackgroundVideo = React.lazy(() =>
  import("../../components/BackgroundVideo/BackgroundVideo")
)

const index = () => {
  return (
    <Layout>
      <Helment>
        <link rel="canonical" href="https://www.grandbay-puntacana.com/sites" />
      </Helment>
      <SEO />
      <HeroComponent page="courses" />
      <div className="mt-[45vh] md:mt-[40vh] lg:mt-[60vh]"></div>
      <div className="max-w-6xl my-5 xl:my-14 flex flex-col justify-center items-center lg:flex-row mx-5 lg:mx-auto">
        <TextComponent
          title="What can we see while diving in Punta Cana?"
          paragraph="Punta Cana is the underwater jewel of the Dominican Republic. When you are diving with us, we take you to the best dive sites of the region, a paradise for shark lovers, wreck enthusiasts, turtles and rays galore! The healthy reefs around this side of the islands are thriving with marvelous creatures and colorful corals. Shallow reefs here receive sunlight all year round and have the perfect conditions for hard corals to grow beautiful and vigorous: we can see brain corals, labyrinth corals, whip corals, fan corals, acroporas, porites, millepora and pillar corals."
        />
        <div className="lg:w-[45rem]">
          <LocalDivesOverview />
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="max-w-6xl my-5 xl:my-14 flex flex-col flex-wrap justify-center items-center sm:flex-row mx-5 lg:mx-auto">
          {divesites.map(divesite => {
            return <CardComponent key={divesite.id} {...divesite} />
          })}
        </div>
      </Suspense>
      <div className="">
        <Suspense fallback={<div>Loading...</div>}>
          <BackgroundVideo
            video={videoAdvanced}
            className="bg-video-sites shark-video"
          />
        </Suspense>
      </div>
    </Layout>
  )
}

export default index

export const Head = () => (
  <>
    <title>
      Padi Course In Punta Cana | Scuba Classes | Scuba School Near Me | Scuba
      Certification Punta Cana | Padi Scuba Diving Punta Cana
    </title>
    <meta
      name="description"
      content="Talk to our team about packages of Scuba Diving, Scuba Classes, Shark Diving In Punta Cana. Give us a call right away."
    />
  </>
)
