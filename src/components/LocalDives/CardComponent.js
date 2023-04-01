import React, { useState } from "react"
import { motion } from "framer-motion"
import { Link } from "gatsby"
const CardComponent = ({ id, name, img, depth, desc }) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, x: [50, 150, 0], y: [25, 50, 0] }}
      viewport={{ once: true }}
      transition={{
        duration: 3,
        delay: 0.3,
        ease: [0.5, 0.71, 1, 1.5],
      }}
      className="flex justify-center m-4 w-80"
    >
      <div className="rounded-lg shadow-lg bg-white max-w-sm">
        {name === "Shark Point" ? (
          <Link to="/shark-dive-punta-cana" className="no-underline">
            <img
              className="rounded-t-lg h-64 w-80 object-cover object-center"
              src={img}
              alt={name}
            />
          </Link>
        ) : (
          <img
            className="rounded-t-lg h-64 w-80 object-cover object-center"
            src={img}
            alt={name}
          />
        )}
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {name === "Shark Point" ? (
              <Link to="/shark-dive-punta-cana" className="no-underline">
                {name}
              </Link>
            ) : (
              name
            )}
          </h5>
          {depth && <p className="text-lg text-gray-700 mb-2">{depth}</p>}
          {desc && (
            <p className="text-gray-700 text-base mb-4">
              {readMore ? desc : `${desc.substring(0, 150)}...`}
              <br />
              <button
                className="text-blue-700"
                onClick={() => setReadMore(!readMore)}
              >
                {readMore ? "show less" : "read more"}
              </button>
            </p>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default CardComponent
