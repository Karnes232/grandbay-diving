import React from "react"
import CustomPayPal from "../PayPalButtonWrapper/CustomPayPal"

const LocalDivesOverview = () => {
  return (
    <div className="my-5">
      {" "}
      <div className="flex flex-col justify-center items-center mb-2">
        <h4 className="text-xl font-semibold mb-1 xl:text-3xl">
          <strong>Dive Packages</strong>
        </h4>
        <p className="my-1 text-sm md:text-base xl:text-lg">
          2 Tank Dive: $100 per person
        </p>
        <p className="my-1 text-sm md:text-base xl:text-lg">
          2 Tank Dive (Shark Point): $150 per person
        </p>
        <p className="my-1 text-sm md:text-base xl:text-lg">
          Duration: 2.5 Hours
        </p>
        <p className="my-1 text-sm md:text-base xl:text-lg">
          4 Tank Package: $180
        </p>

        <p className="my-1 text-sm md:text-base xl:text-lg">
          Other packages avaible upon request
        </p>
      </div>
      <div className="flex flex-col justify-center items-center mb-4">
        <p className="mb-1 mt-2">
          <strong>Reserve Now</strong>
        </p>
        <p className="mt-1">Only a $50 deposit</p>
      </div>
      <CustomPayPal price={50} />
    </div>
  )
}

export default LocalDivesOverview
