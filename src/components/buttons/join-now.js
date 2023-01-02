import React from "react"
import { FaExternalLinkAlt } from "react-icons/fa"

export default function JoinNow(props) {
  const { className } = props || {}
  return (
    <a
      className={`text-white btn btn-blue ${className}`}
      href="https://formulaonegym.clubright.co.uk/register"
      target="_blank"
      rel="noopener noreferrer"
    >
      Join Now <FaExternalLinkAlt className="inline ml-1 -mt-1 opacity-50" />
    </a>
  )
}
