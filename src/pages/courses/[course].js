import React from "react"
import Helment from "react-helmet"
import Layout from "../../components/layout"
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo"
import TextComponent from "../../components/TextComponent/TextComponent"
import video from "../../video/Scuba Diving - 699.mp4"

import { courses } from "../../data/courses"
import CourseOverview from "../../components/CourseOverview/CourseOverview"
import BackgroundCarousel from "../../components/BackgroundCarousel/BackgroundCarousel"
import SEO from "../../components/seo"

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
        title={`${course.course} | Padi Course In Punta Cana | Scuba Diving in Punta Cana`}
        description="We provide Scuba Classes in Punta Cana. Learn Certified Dive In Punta Cana. Come to us at Grand Bay of the Sea for Certified Dive In Punta Cana."
      />
      <BackgroundVideo video={video} className="bg-video-courses" />
      {course && (
        <div className="mb-5">
          <div className="flex flex-col lg:flex-row lg:mx-auto max-w-6xl xl:h-[35rem]">
            <div className="lg:flex lg:flex-col lg:justify-start lg:mt-5 xl:min-h-full xl:justify-center xl:mt-0">
              <TextComponent
                title={course.title}
                paragraph={course.paragraph}
              />
            </div>
            <div className="lg:w-[45rem] xl:mx-10 lg:min-h-full lg:flex lg:flex-col lg:justify-center">
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
              <BackgroundCarousel course={course} />
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
