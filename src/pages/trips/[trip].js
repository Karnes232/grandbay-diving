import React from "react"
import Helment from "react-helmet"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo"
import TextComponent from "../../components/TextComponent/TextComponent"
import video from "../../video/Scuba Diving - 699.mp4"

import { trips } from "../../data/trips"
import TripOverview from "../../components/TripOverview/TripOverview"
import BackgroundCarousel from "../../components/BackgroundCarousel/BackgroundCarousel"

const Trip = ({ location }) => {
  const trip = trips.find(({ link }) => link === location.pathname)

  return (
    <Layout>
      <Helment>
        <link
          rel="canonical"
          href={`https://www.grandbay-puntacana.com${location.pathname}`}
        />
      </Helment>
      <SEO
        title={
          trip
            ? `${trip.name} | Dive Trip Packages In Punta Cana | Scuba Diver In Punta Cana`
            : `Dive Trip Packages In Punta Cana | Scuba Diver In Punta Cana`
        }
        description="We specialize in providing more personalized services to our clients with our professional team. Check out our Dive Trip Packages today."
      />
      <BackgroundVideo video={video} className="bg-video-courses" />
      {trip && (
        <>
          <div className="mb-5">
            <div className="flex flex-col lg:flex-row lg:mx-auto max-w-6xl xl:h-[20rem]">
              <div className="lg:flex lg:flex-col lg:justify-start lg:mt-5 xl:min-h-full xl:justify-center xl:mt-0">
                <TextComponent title={trip.title} paragraph={trip.paragraph} />
              </div>
            </div>
            <BackgroundCarousel course={trip} />
            <div className="flex flex-col lg:flex-row lg:mx-auto max-w-6xl lg:h-[35rem]">
              <div className="lg:flex lg:flex-col lg:justify-start xl:min-h-full xl:justify-center xl:mt-0">
                <TextComponent paragraph={trip.paragraph2} />
              </div>
              <div className="lg:w-[45rem] xl:mx-10 lg:min-h-full lg:flex lg:flex-col lg:justify-center">
                <TripOverview trip={trip} />
              </div>
              <div className="lg:flex lg:flex-col lg:justify-start xl:min-h-full xl:justify-center xl:mt-0">
                <TextComponent paragraph={trip.paragraph3} />
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  )
}

export default Trip
