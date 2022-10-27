import React, { Suspense } from "react"
import BackgroundCarousel from "../BackgroundCarousel/BackgroundCarousel"
import TextComponent from "../TextComponent/TextComponent"
import TripOverviewTui from "./TripOverviewTui"

const TripComponent = ({ trip }) => {
  return (
    <>
      {trip && (
        <>
          <div className="mb-5">
            <div className="flex flex-col lg:flex-row lg:mx-auto max-w-6xl xl:h-[20rem]">
              <div className="lg:flex lg:flex-col lg:justify-start lg:mt-5 xl:min-h-full xl:justify-center xl:mt-0">
                <TextComponent title={trip.title} paragraph={trip.paragraph} />
              </div>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <BackgroundCarousel course={trip} className="course-carousel" />
            </Suspense>
            <div className="flex flex-col lg:flex-row lg:mx-auto max-w-6xl lg:h-[35rem]">
              <div className="lg:flex lg:flex-col lg:justify-start xl:min-h-full xl:justify-center xl:mt-0">
                <TextComponent paragraph={trip.paragraph2} />
              </div>
              <div className="lg:w-[45rem] xl:mx-10 lg:min-h-full lg:flex lg:flex-col lg:justify-center">
                <TripOverviewTui trip={trip} />
              </div>
              <div className="lg:flex lg:flex-col lg:justify-start xl:min-h-full xl:justify-center xl:mt-0">
                <TextComponent paragraph={trip.paragraph3} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default TripComponent
