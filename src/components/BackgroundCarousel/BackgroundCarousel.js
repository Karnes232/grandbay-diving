import React from "react"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from "react-responsive-carousel"

const BackgroundCarousel = ({ course, className }) => {
  return (
    <div className="course-carousel my-2">
      <Carousel showThumbs={false} infiniteLoop={true} autoPlay={true}>
        {course.photos.map((image, index) => (
          <div className="lg:h-[55vh] xl:h-[65vh]" key={index}>
            <img
              className="lg:h-[55vh] xl:h-[65vh] carousel-image"
              src={image}
              alt={course.name}
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default BackgroundCarousel
