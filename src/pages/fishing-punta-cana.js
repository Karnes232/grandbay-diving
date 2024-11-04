import React, { Suspense } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Helment from "react-helmet"

import video from "../video/fishing.mp4"
import TextComponent from "../components/TextComponent/TextComponent"
import FishingOverview from "../components/FishingOverview/FishingOverview"

import { fishing } from "../data/fishing"

const BackgroundVideo = React.lazy(() =>
  import("../components/BackgroundVideo/BackgroundVideo")
)
const BackgroundCarousel = React.lazy(() =>
  import("../components/BackgroundCarousel/BackgroundCarousel")
)

const Fishing = () => {
  return (
    <Layout>
      <Helment>
        <link
          rel="canonical"
          href={`https://www.grandbay-puntacana.com/fishing-punta-cana`}
        />
      </Helment>
      <SEO
        title="Deep Sea Fishing in Punta Cana"
        description="We provide Scuba Classes in Punta Cana. Learn Certified Dive In Punta Cana. Come to us at Grand Bay of the Sea for Certified Dive In Punta Cana."
      />
      <Suspense fallback={<div>Loading...</div>}>
        <BackgroundVideo
          video={video}
          className="bg-video-fishing shark-video"
        />
      </Suspense>
      <div className="my-5">
        <div className="flex flex-col lg:flex-row lg:mx-auto max-w-6xl xl:h-[35rem]">
          <div className="lg:flex lg:flex-col lg:justify-start lg:mt-5 xl:min-h-full xl:justify-center xl:mt-0">
            <TextComponent
              title="Deep Sea Fishing"
              paragraph="Set sail on a thrilling open ocean adventure as you seek out prime fishing spots, cast your lines, and relax in the stunning surroundings, waiting for that exciting moment when a fish bites. Whether you choose a morning or afternoon expedition, you'll enjoy the camaraderie of fellow guests. Not into fishing? No problem—you can simply unwind and take in the beautiful views on a scenic boat trip instead."
            />
          </div>
          <div className="lg:w-[45rem] xl:mx-10 lg:min-h-full lg:flex lg:flex-col md:justify-center">
            <FishingOverview />
          </div>
          <div className="lg:flex lg:flex-col lg:justify-start lg:mt-5 xl:min-h-full xl:justify-center xl:mt-0">
            <TextComponent
              // title={course.title2}
              paragraph="Get ready for four hours of fishing excitement! With several rods at the ready, each guest will have a turn to reel in the catch of the day. While waiting, feel free to grab a cold drink from the self-serve cooler on deck, but don’t forget to keep an eye on the lines—you never know when a bite might happen! And if fishing isn’t your style, kick back, soak up the sun, and enjoy the ocean breeze with a refreshing beverage in hand."
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:mx-auto max-w-6xl mb-10">
          <TextComponent
            // title={course.title2}
            paragraph="For a more private and personalized experience, we offer exclusive charters. Choose a 4-hour private charter for $700, a 5-hour for $800, a 6-hour charter for $1,085, or extend your adventure with an 8-hour trip for $1,365. These private charters give you the flexibility to tailor the day to your preferences, ensuring a memorable and relaxing experience on the water."
          />
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <BackgroundCarousel course={fishing} className="discover-carousel" />
        </Suspense>
      </div>
    </Layout>
  )
}

export default Fishing
