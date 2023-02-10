import React, { Suspense } from "react"
import Helment from "react-helmet"
import HeroComponent from "../components/HeroComponent/HeroComponent"
import TextComponent from "../components/TextComponent/TextComponent"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { schema } from "../data/schema"
import video from "../video/coral-cut.mp4"
import SelectionComponent from "../components/SelectionComponent/SelectionComponent"

const BackgroundVideo = React.lazy(() =>
  import("../components/BackgroundVideo/BackgroundVideo")
)
const BackgroundImage = React.lazy(() =>
  import("../components/BackgroundImage/BackgroundImage")
)
const GoogleMapComponent = React.lazy(() =>
  import("../components/GoogleMapComponent/GoogleMapComponent")
)

const Scuba = () => {
  return (
    <Layout>
      <Helment>
        <link
          rel="canonical"
          href="https://www.grandbay-puntacana.com/scuba-diving-punta-cana"
        />
        <meta
          name="google-site-verification"
          content="QNQfgD0iQIbuHkuZ5fb8hKEYbV6iCN_TvIyRdnAu7yg"
        />
      </Helment>
      <Seo schemaMarkup={schema} />
      <main>
        <HeroComponent page="index" />
        <div className="mt-[50vh] md:mt-[40vh] lg:mt-[70vh]">
          <TextComponent
            title="Scuba Diving Punta Cana"
            paragraph="Have you ever dreamed of exploring the underwater world and discovering its hidden treasures? If so, then scuba diving in Punta Cana is an experience that cannot be missed. As one of the most popular tourist destinations in the Caribbean, it offers a unique opportunity to explore some of the most beautiful coral reefs and marine life on Earth.For those who are new to scuba diving, Punta Cana provides amazing conditions for beginners as well as experienced divers alike. With crystal clear waters, abundant sea life and incredible visibility, you'll have plenty of opportunities to observe fascinating fish species up close and personal. Plus, with numerous dive sites located around this stunning paradise island, there's no shortage of exciting places to visit!From colorful coral gardens teeming with tropical fish to wrecks and caves filled with interesting artifacts from centuries past - your journey beneath the waves promises to be captivating. Whether you're looking for adventure or relaxation - make sure not miss out on experiencing all that Punta Cana has to offer by taking part in a scuba diving expedition!"
          />
        </div>

        <SelectionComponent />

        <TextComponent
          title="What can we see while diving in Punta Cana?"
          paragraph="Scuba diving in Punta Cana is like exploring a brand new world. Every diver can find an adventure that's perfect for them, whether it's shark diving or taking a <a href='/courses/openwater'> PADI Open Water certification course</a>. With its crystal-clear waters and abundant coral reef ecosystems, the Dominican Republic offers some of the best scuba diving opportunities in the Caribbean. The warm waters around Punta Cana make it one of the most popular destinations for experienced divers and novice alike; even those without any prior experience will be able to enjoy snorkeling right off the beach! For more adventurous divers, there are several dive sites with walls dropping down hundreds of feet into a deep abyss as well as shallow reefs full of colorful fish, corals and sponges. It’s easy to see why so many visitors come here every year looking to explore this underwater paradise.From beginners to experts, there’s something for everyone when it comes to scuba diving in Punta Cana. Whether you're looking for an introduction course or want to take part in exciting activities such as night dives or wreck explorations – the options are endless! All that’s left now is making sure your equipment is up-to-date and ready before heading out on your next aquatic escapade."
          className="lg:mt-56"
        />
        <Suspense fallback={<div>Loading...</div>}>
          <BackgroundVideo video={video} className="bg-video-main" />
        </Suspense>
        <div className="lg:h-[20rem] lg:flex lg:items-center lg:justify-center">
          <TextComponent
            title="Shark Diving in Punta Cana"
            paragraph="<a href='/sites'>Shark diving</a> is an exciting and thrilling experience for scuba divers. It's a great way to get up close and personal with some of the most fascinating creatures in the ocean! When shark diving, it's important to take safety precautions and be prepared for unexpected encounters with these wild animals. Divers should have knowledge about the species they are likely to encounter as well as their behavior patterns before jumping into the water.It can also be helpful to understand basic dive protocols used when interacting with sharks such as not touching them or chasing after them; this helps keep everyone safe while allowing divers to enjoy the experience without causing any harm. Additionally, divers should always remember that they are visitors in the underwater world and must respect all local wildlife.When done responsibly, shark diving can provide a unique opportunity to observe these majestic predators in their natural environment. With proper preparation and caution, it can be one of the most exhilarating activities available during your stay in Punta Cana! Whether you're looking for an adrenaline rush or just want to appreciate nature from an entirely new perspective, shark diving is sure to deliver a memorable experience that you won't soon forget."
            className="lg:mt-36"
          />
        </div>
        <div className="lg:mb-36"></div>
        <Suspense
          fallback={
            <div className="flex justify-center items-center">Loading...</div>
          }
        >
          <BackgroundImage />
        </Suspense>
        <Suspense fallback={<div>Loading...</div>}>
          <GoogleMapComponent />
        </Suspense>
      </main>
    </Layout>
  )
}

export default Scuba

export const Head = () => (
  <>
    <title>
      Grand Bay of the Sea | Scuba Diving Punta Cana | Shark Dive Punta Cana |
      Dive Center Near Me | Scuba Diving in Punta Cana made easy
    </title>
    <meta
      name="description"
      content="Join our Scuba Divers on the reefs around Punta Cana and the surrounding area. To learn about our Dive Company, visit our website now."
    />
  </>
)
