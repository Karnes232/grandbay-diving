import React from "react"
import { Link } from "gatsby"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { GrMail } from "react-icons/gr"

const SocialMedia = () => {
  return (
    <div className="border-b border-gray-500 md:border-none">
      <div className="mx-8 flex justify-around py-4 md:mx-auto md:max-w-md">
        <a
          href="https://www.facebook.com/grandbaydivecenter/"
          target="_blank"
          aria-label="Facebook"
          rel="noreferrer"
        >
          <FaFacebookF className="footerIcons" />
        </a>
        <a
          href="https://www.instagram.com/grandbayoftheseard/"
          target="_blank"
          aria-label="Instagram"
          rel="noreferrer"
        >
          <FaInstagram className="footerIcons" />
        </a>
        <a
          href="mailto:grandbayofthesea@gmail.com"
          aria-label="Gmail"
          rel="noreferrer"
        >
          <GrMail className="footerIcons" />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
