import * as React from "react"
import HeroComponent from "../components/HeroComponent/HeroComponent"
import TextComponent from "../components/TextComponent/TextComponent"
import Layout from "../components/layout"
import SelectionComponent from "../components/SelectionComponent/SelectionComponent"
import BackgroundVideo from "../components/BackgroundVideo/BackgroundVideo"
import GoogleMapComponent from "../components/GoogleMapComponent/GoogleMapComponent"

const IndexPage = () => {
  return (
    <Layout>
      <main>
        <HeroComponent />
        <TextComponent
          title="Explore a Whole New World!"
          paragraph="Welcome to Grand Bay of the Sea, your PADI Dive Center in Punta Cana,
          where our long-standing experience meets the beauty of the underwater
          world in our gorgeous area, for a memorable diving experience in the
          best reefs of Dominican Republic. This is the place where any scuba
          diver in Punta Cana can feel at home, whether they are experienced
          divers or novices, or even non divers (yet!). We offer a wide range of
          dive trip packages in Punta Cana, including Bayahibe, Saona Island,
          and Catalina Island, as well as dive courses and certification
          packages. You can discover this Caribbean paradise with our
          experienced guides and our friendly staff, and join the multitude of
          divers and snorkelers that literally fell in love with the
          breathtaking views that our stunning sea offers."
        />
        <SelectionComponent />
        <TextComponent
          title="What can we see while diving in Punta Cana?"
          paragraph="Punta Cana is the underwater jewel of the Dominican Republic. The white beaches, lush vegetation and turquoise sea hide exciting adventures and beautiful seascapes. Look for Dive Center near Me or Scuba School near me in your search engine to find our webpage and contact information. When you are diving with us, we take you to the best dive sites of the region, a paradise for shark lovers, wreck enthusiasts, turtles and rays galore! The healthy reefs around this side of the islands are thriving with marvelous creatures and colorful corals. Shallow reefs here receive sunlight all year round and have the perfect conditions for hard corals to grow beautiful and vigorous: we can see brain corals, labyrinth corals, whip corals, fan corals, acroporas, porites, millepora and pillar corals."
        />
        <BackgroundVideo />

        <GoogleMapComponent />
      </main>
    </Layout>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
