import React, { Suspense } from "react"
import Helment from "react-helmet"
import HeroComponent from "../../components/HeroComponent/HeroComponent"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import TextComponent from "../../components/TextComponent/TextComponent"

import video from "../../video/scubaHero.mp4"

const BackgroundVideo = React.lazy(() =>
  import("../../components/BackgroundVideo/BackgroundVideo")
)
const CourseCardGroup = React.lazy(() =>
  import("../../components/CourseCardComponents/CourseCardGroup")
)

const courses = () => {
  return (
    <Layout>
      <Helment>
        <link
          rel="canonical"
          href="https://www.grandbay-puntacana.com/courses"
        />
      </Helment>
      <SEO />
      <HeroComponent page="courses" />
      <div className="mt-[50vh] md:mt-[40vh] lg:mt-[70vh]"></div>
      <TextComponent
        title="Learn how to dive at Grand Bay of the Sea in Punta Cana"
        paragraph="You are not a certified diver yet? You have never tried diving and want to see what the hype about it all is? You’re in the right place. Our dive company in Punta Cana offers the best Scuba Classes in Punta Cana, with PADI, the world’s # 1 dive certifying agency. As you might know, in Punta Cana Scuba Diving is really at its best, and while you are here you don’t want to miss the chance to visit the best Diving Training Center in Punta Cana and get your diving experience or diving course. The first step for non-certified divers here is the <a href='/courses/discover'>Padi Discover Scuba Diving:</a> a quick program that works as an introduction to the underwater world but does not give you a certification. It is more of a dive experience, getting to know this new world. You will have a theory session, and one dive in open water to a maximum depth of 40 feet, in a small group so that your dive instructor can take great care of you. You will be able to take the time to get familiar and comfortable in the water with our experienced instructors before proceeding with your Padi Scuba Diving Punta Cana."
      />

      <div className="my-4">
        <Suspense fallback={<div>Loading...</div>}>
          <BackgroundVideo video={video} className="bg-video-main" />
        </Suspense>
      </div>
      <TextComponent
        title="Entry Level Dive certifications"
        paragraph="After your Discover Scuba Diving, you might decide to get your Padi course in Punta Cana, as we expect you will be hooked on it! Whether you have done the <a href='/courses/discover'>Discover Scuba Diving</a> class or not, as it is not a mandatory prerequisite, you can choose between two different entry level certifications for your Punta Cana Scuba Classes. The first one is the <a href='/courses/scubadiver'>PADI Scuba Diver course</a>, a two days course that includes three theory modules, three pool sessions and two dives in open water to a maximum depth of 40 feet, and gives you a lifetime certification upon its completion. If you want to have a full beginner level Scuba certification Punta Cana, the <a href='/courses/openwater'>PADI Open Water</a< is the most complete course: five theory sessions, five confined water sessions, and four dives, awarding you with a certification that takes you to the maximum depth of 60 feet. In both cases, you will learn important notions and underwater skills that will allow you to use the dive equipment without harm, as well as have the best, safest and most fun experience during your underwater scuba dives. Knowledge reviews and quizzes will be part of the courses, testing your abilities and helping you focus on the most important tasks, and the time spent in confined water with your knowledgeable instructors will allow you to learn at your own pace all the necessary exercises for a wonderful dive experience."
      />
      <Suspense fallback={<div>Loading...</div>}>
        <CourseCardGroup />
      </Suspense>
      <TextComponent
        title="What if I am already certified?"
        paragraph="Scuba Classes in Punta Cana are also for those that are already certified as Padi Open Water Divers but want to advance in their career and learn more: our <a href='/courses/advanced'>PADI Advanced Open Water</a> course is the perfect choice for certified divers looking for exciting and complete Scuba Diving Packages while learning new techniques. During your Padi Advanced Open Water certification you will learn how to safely perform deep dives, navigation dives, wreck dives, night dives, drift dives and many more. The reefs and wrecks around our extremely beautiful area are the perfect training gym for all these types of advanced dives. Last but not least, some further experiences and trainings are available upon request in our Dive Center in Punta Cana. For instance, if you are already an Advanced Open Water Diver, you can have access to your Emergency First Response and Rescue Diver course, or even complete your Divemaster training with us. Several PADI specialties are also available on request, as part of our Scuba Diving Packages in Punta Cana. You can contact us before your trip to arrange a personalized schedule that suits your needs and timings, without affecting the high standards of our training, and preparing you for a lifetime of underwater magic!"
      />
      <div className="mt-5"></div>
    </Layout>
  )
}

export default courses

export const Head = () => (
  <>
    <title>
      Padi Course In Punta Cana | Scuba Classes | Scuba Diving in Punta Cana |
      Scuba Certification Punta Cana | Padi Scuba Diving Punta Cana
    </title>
    <meta
      name="description"
      content="We provide Scuba Classes in Punta Cana. Learn Certified Dive In Punta Cana. Come to us at Grand Bay of the Sea for Certified Dive In Punta Cana."
    />
  </>
)
