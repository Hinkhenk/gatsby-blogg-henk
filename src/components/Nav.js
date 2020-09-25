import React from "react"
import {Link} from "gatsby"
import { NavWrapper } from "../elements"

export const Nav = () => {
  return (
    <NavWrapper>
      <Link to="/">Home</Link>
      <Link to="/">About</Link>
      <Link to="/">Secrets</Link>
    </NavWrapper>
  )
}
