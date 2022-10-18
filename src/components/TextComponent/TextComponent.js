import React from "react"

const IntroductionComponent = ({ title, paragraph, className }) => {
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
      <div className="flex flex-col items-center justify-center text-center max-w-6xl mx-5 md:p-6 lg:p-2 xl:mx-auto">
        <h4 className={`text-2xl font-semibold mb-5 ${className} md:text-4xl`}>
          {title}
        </h4>
        <p
          className="md:text-xl lg:mt-5"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        ></p>
      </div>
    </div>
  )
}

export default IntroductionComponent
