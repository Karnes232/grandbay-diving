import React from "react"

const TripOverviewTui = ({ trip }) => {
  return (
    <div className="my-5">
      {" "}
      <div className="flex flex-col justify-center items-center mb-2">
        <h4 className="text-xl font-semibold mb-1 xl:text-3xl">
          <strong>Trip Overview</strong>
        </h4>
        <p className="my-1 text-center text-sm xl:text-base">
          Price: ${trip.overview.price} per person
        </p>
        <p className="my-1 text-center text-sm xl:text-base">(2 tank dive)</p>
        {trip.overview.companion && (
          <>
            <p className="my-1 text-center text-sm xl:text-base">
              Price: ${trip.overview.companion} per person
            </p>
            <p className="my-1 text-center text-sm xl:text-base">(companion)</p>{" "}
          </>
        )}
        <p className="my-1 text-center text-sm xl:text-base">
          Duration: {trip.overview.duration}
        </p>
        <p className="my-1 text-center text-sm xl:text-base">
          {trip.overview.extra}
        </p>
        <p className="my-1 text-center text-sm xl:text-base">
          {trip.overview.extra2}
        </p>
      </div>
    </div>
  )
}

export default TripOverviewTui
