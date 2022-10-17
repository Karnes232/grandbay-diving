import React from "react"
import Layout from "../../components/layout"
import BackgroundVideo from "../../components/BackgroundVideo/BackgroundVideo"
import TextComponent from "../../components/TextComponent/TextComponent"
import video from "../../video/Scuba Diving - 699.mp4"

import { courses } from "../../data/courses"
import CourseOverview from "../../components/CourseOverview/CourseOverview"

const Course = ({ location }) => {
  const course = courses.find(({ link }) => link === location.pathname)
  return (
    <Layout>
      <BackgroundVideo video={video} className="bg-video-courses" />
      <TextComponent title={course.title} paragraph={course.paragraph} />
      <CourseOverview course={course} />
      <TextComponent title={course.title2} paragraph={course.paragraph2} />
    </Layout>
  )
}

export default Course
