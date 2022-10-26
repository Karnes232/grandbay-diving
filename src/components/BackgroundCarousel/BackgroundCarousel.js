import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

const BackgroundCarousel = ({ course, className }) => {

  return (
    <div className={`${className} my-2`}>
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true} showIndicators={false}>
        {course.photos.map((image, index) => (
          <div className="lg:h-[55vh] xl:h-[65vh] limited-height" key={index}>
            <img
              className="lg:h-[55vh] xl:h-[65vh] h- carousel-image"
              src={Object.values(image)}
              alt={course.name}
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default BackgroundCarousel
