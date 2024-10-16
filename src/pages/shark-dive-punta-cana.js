import React, { Suspense } from "react"
import Helment from "react-helmet"
import { shark } from "../data/shark"
import Layout from "../components/layout"
import BackgroundVideo from "../components/BackgroundVideo/BackgroundVideo"
import videoAdvanced from "../video/greyshark.mp4"
import sharkVideo from "../video/sharkVideo.mp4"
import TextComponent from "../components/TextComponent/TextComponent"
import SEO from "../components/seo"
import SharkOverview from "../components/LocalDives/SharkOverview"

const BackgroundCarousel = React.lazy(() =>
  import("../components/BackgroundCarousel/BackgroundCarousel")
)

const sharkDive = ({ location }) => {
  const sharkInfo = shark[0]
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
          sharkInfo
            ? `${sharkInfo.name} | Shark Diving in Punta Cana | Blacktip Reef Sharks`
            : `Shark Diving in Punta Cana | Blacktip Reef Sharks`
        }
        description="Dive with sharks in Punta Cana with Grand Bay of the Sea! Our tours offer thrilling encounters with nurse, blacktip sharks. Suitable for advanced divers. Book now!"
        keywords="shark diving in punta cana, Punta Cana shark diving, scuba diving in punta cana, punta cana dive sites, punta cana scuba diving, punta cana excursions, diving punta cana"
      />
      <BackgroundVideo
        video={videoAdvanced}
        className="bg-video-courses shark-video"
      />
      {sharkInfo && (
        <div className="my-5">
          <div className="flex flex-col lg:flex-row lg:mx-auto max-w-6xl xl:h-[35rem]">
            <div className="lg:flex lg:flex-col lg:justify-start lg:mt-5 xl:min-h-full xl:justify-center xl:mt-0">
              <TextComponent
                title={sharkInfo.title}
                paragraph={sharkInfo.paragraph}
              />
            </div>
            <div className="lg:w-[45rem] xl:mx-10 lg:min-h-full lg:flex lg:flex-col md:justify-center">
              <SharkOverview shark={sharkInfo} />
            </div>
            <div className="lg:flex lg:flex-col lg:justify-start lg:mt-5 xl:min-h-full xl:justify-center xl:mt-0">
              <TextComponent
                title={sharkInfo.title2}
                paragraph={sharkInfo.paragraph2}
              />
            </div>
          </div>
          {sharkInfo.details && (
            <div className="flex flex-col justify-center items-center">
              {/* <hr class="border-2 border-blue-500 w-52"  /> */}
              <Suspense fallback={<div>Loading...</div>}>
                <BackgroundCarousel
                  course={sharkInfo}
                  className="course-carousel"
                />
              </Suspense>
              <div className="flex flex-col max-w-6xl">
                <div className="lg:flex xl:space-x-4">
                  <TextComponent paragraph={sharkInfo.details} />

                  <TextComponent paragraph={sharkInfo.details2} />
                </div>
                <hr className="mt-5 border-2 border-blue-500 w-52 mx-auto" />
                <div className="lg:flex xl:space-x-4 flex-grow">
                  <TextComponent paragraph={sharkInfo.details3} />
                  <TextComponent paragraph={sharkInfo.details4} />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
      <div className="">
        <Suspense fallback={<div>Loading...</div>}>
          <BackgroundVideo
            video={sharkVideo}
            className="bg-video-sites shark-video"
          />
        </Suspense>
      </div>
    </Layout>
  )
}

export default sharkDive

export const Head = () => (
  <>
    <title>
      Shark Diving in Punta Cana | Shark Dive Punta Cana | Grand Bay of the Sea
    </title>
    <meta
      name="description"
      content="Look no further than Grand Bay of the Sea's shark diving tours in Punta Cana! Our tours offer thrilling opportunities to dive to depths of up to 25 meters and encounter a variety of shark species in their natural habitat."
    />
  </>
)
