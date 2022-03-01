import React from "react"
import { Link } from "gatsby"
import Nav from "../components/nav"
import Logo from "../components/logo"
import Phone from "./contact-options/telephone"

const Header = () => (
  <>
    <header className="p-6 xl:pb-12 l:pt-6">
      <div className="container lg:flex lg:space-between">
        <div className="flex flex-wrap items-center">
          <Link aria-label="Go to the homepage" name="Go to the homepage" to="/">
            <Logo />
          </Link>
        </div>
        <div className="flex flex-col items-end ml-auto">
          <div className="hidden mb-2 text-white xl:block"><Phone /></div>
          <Nav />
        </div>
      </div>
    </header>
  </>
)

export default Header
