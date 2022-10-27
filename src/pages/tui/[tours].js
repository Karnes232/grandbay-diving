import React, { Suspense } from "react"
import TuiLayout from "../../components/tuiComponents/tuiLayout"
import Helment from "react-helmet"
import { tuiData } from "../../data/tuiData"
import SEO from "../../components/seo"
import video from "../../video/scubaHero.mp4"
import CourseComponent from "../../components/tuiComponents/CourseComponent"
import TripComponent from "../../components/tuiComponents/TripComponent"

const BackgroundVideo = React.lazy(() =>
  import("../../components/BackgroundVideo/BackgroundVideo")
)

const Tours = ({ location }) => {
  const tour = tuiData.find(({ link }) => link === location.pathname)
  return (
    <TuiLayout>
      <Helment>
        <link
          rel="canonical"
          href={`https://www.grandbay-puntacana.com${location.pathname}`}
        />
      </Helment>
      <SEO
        title={
          tour
            ? `${tour.name} | Padi Course In Punta Cana | Scuba Diving in Punta Cana`
            : `Padi Course In Punta Cana | Scuba Diving in Punta Cana`
        }
        description="We provide Scuba Classes in Punta Cana. Learn Certified Dive In Punta Cana. Come to us at Grand Bay of the Sea for Certified Dive In Punta Cana."
      />
      <Suspense
        fallback={
          <div className="flex justify-center items-center">Loading...</div>
        }
      >
        <BackgroundVideo video={video} className="bg-video-courses" />
      </Suspense>
      {tour.link === "/tui/discover" && <CourseComponent course={tour} />}
      {tour.link === "/tui/scubadiver" && <CourseComponent course={tour} />}
      {tour.link === "/tui/openwater" && <CourseComponent course={tour} />}
      {tour.link === "/tui/advanced" && <CourseComponent course={tour} />}
      {tour.link === "/tui/catalina" && <TripComponent trip={tour} />}
      {tour.link === "/tui/bayahibe" && <TripComponent trip={tour} />}
    </TuiLayout>
  )
}

export default Tours
