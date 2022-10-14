import React from "react"
import video from "../../video/coral.webm"

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
          <source src={video} type="video/webm" />
          Your device does not support playing 'video/mp4' videos
        </video>
      </div>
      
    </div>
  )
}

export default BackroundVideo
