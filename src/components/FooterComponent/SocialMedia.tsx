import React from "react"
import { Link } from "gatsby"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import { GrMail } from "react-icons/gr"

const SocialMedia = () => {
  return (
    <div className="border-b border-gray-500 md:border-none">
      <div className="mx-8 flex justify-around py-4 md:mx-auto md:max-w-md">
        <Link
          to="https://www.facebook.com/grandbaydivecenter/"
          target="_blank"
          aria-label="Facebook"
          rel="noreferrer"
        >
          <FaFacebookF className="footerIcons" />
        </Link>
        <Link
          to="https://www.instagram.com/grandbayoftheseard/"
          target="_blank"
          aria-label="Instagram"
          rel="noreferrer"
        >
          <FaInstagram className="footerIcons" />
        </Link>
        <Link
          to="mailto:grandbayofthesea@gmail.com"
          aria-label="Gmail"
          rel="noreferrer"
        >
          <GrMail className="footerIcons" />
        </Link>
      </div>
    </div>
  )
}

export default SocialMedia
