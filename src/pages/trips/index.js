import React from 'react'
import Helment from "react-helmet"
import SEO from "../../components/seo"
import Layout from '../../components/layout'
import HeroComponent from '../../components/HeroComponent/HeroComponent'
import TextComponent from "../../components/TextComponent/TextComponent"
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo"

import video from "../../video/Scuba Diving - 699.mp4"
const index = () => {
  return (
    <Layout>
    <Helment>
        <link
          rel="canonical"
          href="https://www.grandbay-puntacana.com/trips"
        />
      </Helment>
      <SEO title="Dive Trip Packages In Punta Cana | Scuba Diver In Punta Cana" description="We specialize in providing more personalized services to our clients with our professional team. Check out our Dive Trip Packages today."/>
      <HeroComponent page="courses" />
      <div className="mt-[50vh] md:mt-[40vh] lg:mt-[70vh]"></div>
      <TextComponent
        title="Our Dive Trips"
        paragraph="On our Bayahibe dive trip, we take you for an amazing certified dive in Punta Cana on a beautiful and colorful reef and an incredible second dive on the Atlantic Princess shipwreck, for some of the most exhilarating, colorful and bio-diverse Scuba Diving in Punta Cana.
                        On our local dive at Catalina Island we like to take experienced scuba divers on a deep Wall dive, where we can swim past a beautiful drop-off covered in corals and visited by turtles and sharks. The second dive will be on one of our favorite shallow reefs, The Aquarium, where whip and fan corals hide puffer fish, schools of blue tangs, yellow stingrays, lobsters, moray eels and all sorts of reef fish."
      />
      <BackgroundVideo video={video} className="bg-video-main" />
    </Layout>
  )
}

export default index