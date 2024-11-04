import { Link } from "gatsby"
import React from "react"
import CustomPayPal from "../PayPalButtonWrapper/CustomPayPal"
import { motion } from "framer-motion"
const LocalDivesOverview = () => {
  return (
    <div className="my-5">
      {" "}
      <div className="flex flex-col justify-center items-center mb-2">
        <h4 className="text-xl font-semibold mb-1 xl:text-3xl">
          <strong>Dive Packages</strong>
        </h4>
        <p className="my-1 text-sm md:text-base xl:text-lg">
          2 Tank Dive: $125 per person
        </p>
        <p className="my-1 text-sm md:text-base xl:text-lg">
          Duration: 2.5 Hours
        </p>
        <p className="my-1 text-sm md:text-base xl:text-lg">
          4 Tank Package: $220
        </p>
        <p className="my-1 text-sm md:text-base xl:text-lg">
          <Link to="/shark-dive-punta-cana" className="no-underline">
            Shark Dive: $199
          </Link>
        </p>

        <p className="my-1 text-sm md:text-base xl:text-lg">
          Other packages available upon request
        </p>
      </div>
      <div className="flex justify-center w-[200px] h-[35px] mx-auto">
        <Link to="/contact" className="no-underline w-[200px] h-[35px]">
          <button className="w-full h-full bg-[#2C2E2F] text-[#FFF] text-sm rounded-3xl px-5">
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
        <p className="mt-1">Only a $50 deposit</p>
      </div>
      <CustomPayPal price={50} />
    </div>
  )
}

export default LocalDivesOverview
