import React, { Suspense } from "react"
import Helment from "react-helmet"
import SEO from "../../components/seo"
import Layout from "../../components/layout"
import HeroComponent from "../../components/HeroComponent/HeroComponent"
import TextComponent from "../../components/TextComponent/TextComponent"
import LinksComponent from "../../components/SelectionComponent/LinksComponent"
import video from "../../video/scubaHero.mp4"
import image1 from "../../images/phone/catalina-link.webp"
import image2 from "../../images/phone/saona-link.webp"
import image3 from "../../images/phone/bayahibe-link2.webp"

const BackgroundVideo = React.lazy(() =>
  import("../../components/BackgroundVideo/BackgroundVideo")
)

const index = () => {
  return (
    <Layout>
      <Helment>
        <link rel="canonical" href="https://www.grandbay-puntacana.com/trips" />
      </Helment>
      <SEO
        title="Dive Trip Packages In Punta Cana | Scuba Diver In Punta Cana"
        description="We specialize in providing more personalized services to our clients with our professional team. Check out our Dive Trip Packages today."
      />
      <HeroComponent page="courses" />
      <div className="mt-[45vh] md:mt-[40vh] lg:mt-[60vh]"></div>
      <div className="my-5 xl:my-14">
        <TextComponent
          title="Our Dive Trips"
          paragraph="On our Bayahibe dive trip, we take you for an amazing certified dive in Punta Cana on a beautiful and colorful reef and an incredible second dive on the Atlantic Princess shipwreck, for some of the most exhilarating, colorful and bio-diverse Scuba Diving in Punta Cana.
                        On our local dive at Catalina Island we like to take experienced scuba divers on a deep Wall dive, where we can swim past a beautiful drop-off covered in corals and visited by turtles and sharks. The second dive will be on one of our favorite shallow reefs, The Aquarium, where whip and fan corals hide puffer fish, schools of blue tangs, yellow stingrays, lobsters, moray eels and all sorts of reef fish."
        />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <BackgroundVideo video={video} className="bg-video-main" />
      </Suspense>
      <div className="h-[95vh] md:h-[45vh] lg:h-[65vh]">
        <div className="flex flex-col h-full justify-evenly items-center  max-w-6xl mx-5 md:flex-row xl:mx-auto">
          <LinksComponent
            name="Catalina Island"
            url="/trips/catalina"
            description="If you dreamed of a Caribbean paradise, you'll find it right here on Catalina Island. Crystal-clear water, gorgeous beaches."
            image={image1}
            textColor="text-black"
          />
          <LinksComponent
            name="Saona Island"
            url="/trips/saona"
            description="Saona Island is the excursion that everyone recommends when they know that you are visiting the Dominican Republic."
            image={image2}
            textColor="text-black"
          />
          <LinksComponent
            name="Bayahibe Diving"
            url="/trips/bayahibe"
            description="This quiet fishing village has some amazing dive sites, including a couple wrecks that will surprise any diver."
            image={image3}
            textColor="text-black"
          />
        </div>
      </div>
    </Layout>
  )
}

export default index
