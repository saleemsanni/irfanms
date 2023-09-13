import Link from "next/link"
import React from "react"
import { AiFillInstagram } from "react-icons/ai"
import { DiCssdeck } from "react-icons/di"

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles"

const Header = () => (
  <Container>
    <Div1>
      <Link
        href='/'
        style={{ display: "flex", alignItems: "center", color: "white" }}
      >
        <DiCssdeck size='3rem' /> <span>Portfolio</span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects' legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech' legacyBehavior>
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about' legacyBehavior>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://instagram.com'>
        <AiFillInstagram size='3rem' />
      </SocialIcons>
    </Div3>
  </Container>
)

export default Header
