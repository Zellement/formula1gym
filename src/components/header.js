import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"
import Logo from "../components/logo"

const Header = () => (
  <>
    <header className="p-6 lg:py-12">
      <div className="container lg:flex lg:space-between">
        <div className="flex flex-wrap items-center">
          <Link aria-label="Go to the homepage" name="Go to the homepage" to="/">
            <Logo />
          </Link>
        </div>
        <Nav />
      </div>
    </header>
  </>
)

export default Header
