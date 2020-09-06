import React from "react"
import { Nav } from "../components/nav"
import { About } from "../components/about"
import { Contact } from "../components/contact"
import { Projects } from "../components/projects"
import { Jumbotron } from "../components/jumbotron"

export default function Home() {
  return (
    <>
      <Nav />

      <Jumbotron />

      <About />

      <Projects />

      <Contact />
    </>
  )
}
