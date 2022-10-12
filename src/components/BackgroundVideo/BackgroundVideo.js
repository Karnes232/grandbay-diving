import React from "react"
import video from "../../video/Coral.mp4"
import TextComponent from "../TextComponent/TextComponent"
const BackroundVideo = () => {
  return (
    <div className="bg-video-section">
      <div className="bg-video">
        <video
          className="bg-video__content"
          autoPlay
          muted
          loop
          playsInline
          src={video}
        >
          <source src={video} type="video/mp4" />
          Your device does not support playing 'video/mp4' videos
        </video>
      </div>
      <TextComponent
        title="About Us"
        paragraph="Grand Bay of the Sea is a local family ran dive company located in the Punta Cana area. With more than 15 years of experience throughout the Dominican Republic, we guarantee satisfaction and excellent treatment from our qualified staff. We specialize in providing a more personalized service to our clients with our professional team"
        className="mt-10"
      />
    </div>
  )
}

export default BackroundVideo
