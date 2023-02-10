import React from "react"
import { motion } from "framer-motion"
const TextComponent = ({ title, paragraph, className }) => {
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
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 3,
          delay: 0.3,
        }}
        className="flex flex-col items-center justify-center text-center max-w-6xl mx-5 md:p-6 lg:p-2 xl:mx-auto"
      >
        <h1 className={`text-2xl font-semibold mb-5 ${className} md:text-4xl`}>
          {title}
        </h1>
        <p
          className="md:text-xl lg:mt-5"
          dangerouslySetInnerHTML={{ __html: paragraph }}
        ></p>
      </motion.div>
    </div>
  )
}

export default TextComponent
