import React, { Suspense } from "react"
import Helment from "react-helmet"
import Layout from "../../components/layout"
import TextComponent from "../../components/TextComponent/TextComponent"

import { courses } from "../../data/courses"
import CourseOverview from "../../components/CourseOverview/CourseOverview"
import SEO from "../../components/seo"

import video from "../../video/scubaHero.mp4"
import videoAdvanced from "../../video/greyshark.mp4"
import video2 from "../../video/frenchGrunt.mp4"

const BackgroundVideo = React.lazy(() =>
  import("../../components/BackgroundVideo/BackgroundVideo")
)
const BackgroundCarousel = React.lazy(() =>
  import("../../components/BackgroundCarousel/BackgroundCarousel")
)


const Course = ({ location }) => {
  const course = courses.find(({ link }) => link === location.pathname)
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
          course
            ? `${course.name} | Padi Course In Punta Cana | Scuba Diving in Punta Cana`
            : `Padi Course In Punta Cana | Scuba Diving in Punta Cana`
        }
        description="We provide Scuba Classes in Punta Cana. Learn Certified Dive In Punta Cana. Come to us at Grand Bay of the Sea for Certified Dive In Punta Cana."
      />
      <Suspense fallback={<div>Loading...</div>}>
      {course.link === "/courses/advanced" && (
        <BackgroundVideo
          video={videoAdvanced}
          className="bg-video-courses shark-video"
        />
      )}
      {course.link === "/courses/discover" && (
        <BackgroundVideo video={video2} className="bg-video-courses" />
      )}
      {course.link === "/courses/scubadiver" && (
        <BackgroundVideo video={video} className="bg-video-courses" />
      )}
      {course.link === "/courses/openwater" && (
        <BackgroundVideo video={video} className="bg-video-courses" />
      )}
      </Suspense>
      {course && (
        <div className="mb-5">
          <div className="flex flex-col lg:flex-row lg:mx-auto max-w-6xl xl:h-[35rem]">
            <div className="lg:flex lg:flex-col lg:justify-start lg:mt-5 xl:min-h-full xl:justify-center xl:mt-0">
              <TextComponent
                title={course.title}
                paragraph={course.paragraph}
              />
            </div>
            <div className="lg:w-[45rem] xl:mx-10 lg:min-h-full lg:flex lg:flex-col md:justify-center">
              <CourseOverview course={course} />
            </div>
            <div className="lg:flex lg:flex-col lg:justify-start lg:mt-5 xl:min-h-full xl:justify-center xl:mt-0">
              <TextComponent
                title={course.title2}
                paragraph={course.paragraph2}
              />
            </div>
          </div>
          {course.details && (
            <div className="flex flex-col justify-center items-center">
              {/* <hr class="border-2 border-blue-500 w-52"  /> */}
              <Suspense fallback={<div>Loading...</div>}>
              <BackgroundCarousel course={course} /></Suspense>
              <div className="flex flex-col max-w-6xl">
                <div className="lg:flex xl:space-x-4">
                  <TextComponent paragraph={course.details} />
                  <TextComponent paragraph={course.details2} />
                </div>
                <hr className="mt-5 border-2 border-blue-500 w-52 mx-auto" />
                <div className="lg:flex xl:space-x-4 flex-grow">
                  <TextComponent paragraph={course.details3} />
                  <TextComponent paragraph={course.details4} />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </Layout>
  )
}

export default Course
