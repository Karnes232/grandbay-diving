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
              paragraph="You'll cruise out into the open ocean in search of perfect fishing locations, cast your fishing rods over the edge of the boat and wait in beautiful surroundings for a fish to take the bait with other like-minded guests. You can go on either a morning or afternoon expedition and if you're not into fishing, you can just enjoy the boat trip."
            />
          </div>
          <div className="lg:w-[45rem] xl:mx-10 lg:min-h-full lg:flex lg:flex-col md:justify-center">
            <FishingOverview />
          </div>
          <div className="lg:flex lg:flex-col lg:justify-start lg:mt-5 xl:min-h-full xl:justify-center xl:mt-0">
            <TextComponent
              // title={course.title2}
              paragraph="You'll have four hours of tracking and fishing. Of course, it won't be all work and no play – there'll be multiple fishing rods so that every guest can take it in turns to reel the prize in. While you're waiting patiently, you'll be able to help yourself from the self-service cooler on deck. But make sure you keep a close eye on the rods for signs of a bite as you never know when luck might strike. And if fishings not your thing, take the time to catch some rays on deck and enjoy a soft drink."
            />
          </div>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <BackgroundCarousel course={fishing} className="discover-carousel" />
        </Suspense>
      </div>
    </Layout>
  )
}

export default Fishing
