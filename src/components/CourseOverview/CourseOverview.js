import React from "react"
import { PayPalScriptProvider } from "@paypal/react-paypal-js"
import PayPalButtonWrapper from "../PayPalButtonWrapper/PayPalButtonWrapper"

const currency = "USD"
const CourseOverview = ({ course }) => {
  
  return (
    <div className="my-5">
      {" "}
      <div className="flex flex-col justify-center items-center mb-2">
        <h4 className="text-xl font-semibold mb-1 xl:text-3xl">
          <strong>Course Overview</strong>
        </h4>
        <p className="my-1 text-sm xl:text-lg">
          Course Level: {course.overview.level}
        </p>
        <p className="my-1 text-sm xl:text-lg">
          Price: ${course.overview.price} per person
        </p>
        <p className="my-1 text-sm xl:text-lg">
          Duration: {course.overview.duration}
        </p>
        <p className="my-1 text-sm xl:text-lg">Includes: Transport</p>
        {course.overview.extra && (
          <p className="my-1 text-sm xl:text-lg">{course.overview.extra}</p>
        )}
      </div>
      
      <div className="flex flex-col justify-center items-center mb-4">
        <p className="mb-1 mt-2">
          <strong>Reserve Now</strong>
        </p>
        <p className="mt-1">Only a 50% deposit</p>
      </div>
      <div className="flex justify-center">
        <PayPalScriptProvider
          options={{
            "client-id":
              "AaPiNuBE-3bjn86CtDSbnbs5nnaeQ-vNhBk48DdMwZ0vsUYGVuE1_38burybKxv_Qn78gXQYUSKf1UG0",
            components: "buttons",
            currency: "USD",
          }}
        >
          <PayPalButtonWrapper currency={currency} showSpinner={false} amount={course.overview.price/2} />
        </PayPalScriptProvider>
      </div>
    </div>
  )
}

export default CourseOverview
