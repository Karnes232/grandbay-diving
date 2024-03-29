import React from "react"
import { Link } from "gatsby"
import CustomPayPal from "../PayPalButtonWrapper/CustomPayPal"
import { motion } from "framer-motion"
const CourseOverview = ({ course }) => {
  return (
    <div className="my-5">
      {" "}
      <div className="flex flex-col justify-center items-center mb-2">
        <h4 className="text-xl font-semibold mb-1 xl:text-3xl">
          <strong>Course Overview</strong>
        </h4>
        <p className="my-1 text-sm md:text-base xl:text-lg">
          Course Level: {course.overview.level}
        </p>
        {course.overview.pricePadi && (
          <p className="my-1 text-sm md:text-base xl:text-lg">
            PADI Price: ${course.overview.pricePadi} per person
          </p>
        )}
        {course.overview.price && (
          <p className="my-1 text-sm md:text-base xl:text-lg">
            SSI Price: ${course.overview.price} per person
          </p>
        )}

        <p className="my-1 text-sm md:text-base xl:text-lg">
          Duration: {course.overview.duration}
        </p>
        {/* <p className="my-1 text-sm md:text-base xl:text-lg">
          Includes: Transport
        </p> */}
        {course.overview.extra && (
          <p className="my-1 text-sm md:text-base xl:text-lg">
            {course.overview.extra}
          </p>
        )}
      </div>
      <div className="flex justify-center w-[200px] h-[35px] mx-auto">
        <Link to="/contact" className="no-underline w-[200px] h-[35px]">
          <button className=" bg-[#2C2E2F] text-[#FFF] text-sm rounded-3xl w-full h-full px-5">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 3,
                delay: 0.3,
              }}
            >
              Contact Us
            </motion.p>
          </button>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center mb-4">
        <p className="mb-1 mt-2">
          <strong>Reserve Now</strong>
        </p>
        <p className="mt-1">Only a 50% deposit</p>
      </div>
      <CustomPayPal price={course.overview.price / 2} />
    </div>
  )
}

export default CourseOverview
