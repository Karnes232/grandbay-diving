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

const IndexPage = () => {
  return (
    <Layout>
      <Helment>
        <link rel="canonical" href="https://www.grandbay-puntacana.com" />
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
            title="Explore a Whole New World!"
            paragraph="Welcome to Grand Bay of the Sea, your PADI Dive Center in Punta Cana,
          where our long-standing experience meets the beauty of the underwater
          world in our gorgeous area, for a memorable diving experience in the
          best reefs of Dominican Republic. This is the place where any scuba
          diver in Punta Cana can feel at home, whether they are experienced
          divers or novices, or even non divers (yet!). We offer a wide range of
          dive trip packages in Punta Cana, including Bayahibe, Saona Island,
          and Catalina Island, as well as <a href='/courses'>dive courses</a> and certification
          packages. You can discover this Caribbean paradise with our
          experienced guides and our friendly staff, and join the multitude of
          divers and snorkelers that literally fell in love with the
          breathtaking views that our stunning sea offers."
          />
        </div>

        <SelectionComponent />

        <TextComponent
          title="What can we see while diving in Punta Cana?"
          paragraph="Punta Cana is the underwater jewel of the Dominican Republic. The white beaches, lush vegetation and turquoise sea hide exciting adventures and beautiful seascapes. Look for Dive Center near Me or Scuba School near me in your search engine to find our webpage and contact information. When you are diving with us, we take you to the best dive sites of the region, a paradise for shark lovers, wreck enthusiasts, turtles and rays galore! The healthy reefs around this side of the islands are thriving with marvelous creatures and colorful corals. Shallow reefs here receive sunlight all year round and have the perfect conditions for hard corals to grow beautiful and vigorous: we can see brain corals, labyrinth corals, whip corals, fan corals, acroporas, porites, millepora and pillar corals."
          className="lg:mt-56"
        />
        <Suspense fallback={<div>Loading...</div>}>
          <BackgroundVideo video={video} className="bg-video-main" />
        </Suspense>
        <div className="lg:h-[20rem] lg:flex lg:items-center lg:justify-center">
          <TextComponent
            title="About Us"
            paragraph="Grand Bay of the Sea is a local family ran dive company located in the Punta Cana area. With more than 15 years of experience throughout the Dominican Republic, we guarantee satisfaction and excellent treatment from our qualified staff. We specialize in providing a more personalized service to our clients with our professional team"
            className=""
          />
        </div>
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

export default IndexPage

export const Head = () => (
  <>
    <title>
      Grand Bay of the Sea | Dive Company Punta Cana | Diving Training Center
      Punta Cana | Dive Center Near Me | Scuba Diving in Punta Cana made easy
    </title>
    <meta
      name="description"
      content="Join our Scuba Divers on the reefs around Punta Cana and the surrounding area. To learn about our Dive Company, visit our website now."
    />
  </>
)
