import React from "react"
import { Link } from "@reach/router"

export const Nav = () => (
  <div className="h-12 flex flex-row justify-between">
    <Link to="">
      <div className="p-2">OYINKANSOLA</div>
    </Link>

    <div className="mt-2">
      <span className="p-2">
        <Link to="#about">ABOUT</Link>
      </span>

      <span className="p-2">
        <Link to="#projects">PROJECTS</Link>
      </span>

      <span className="p-2">
        <Link to="#contact">CONTACT</Link>
      </span>
    </div>
  </div>
)
