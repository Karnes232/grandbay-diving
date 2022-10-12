import React from "react"

const IntroductionComponent = ({ title, paragraph, className }) => {
  console.log(className)
  return (
    <div className="relative">
      <div className="hidden">
        <h2>
          <strong>Scuba Diving in Punta Cana</strong>
        </h2>
        <h2>
          <strong>punta cana scuba diving</strong>
        </h2>
        <h3>
          <strong>scuba diving dominican republic</strong>
        </h3>
        <h4>
          <strong>diving dominican republic</strong>
        </h4>
      </div>
      <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-5 xl:mx-auto">
        <h4 className={`text-2xl font-semibold mb-5 ${className}`}>{title}</h4>
        <p className="text">{paragraph} </p>
      </div>
    </div>
  )
}

export default IntroductionComponent
