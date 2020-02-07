import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { motion } from 'framer-motion'
import Nav from '../components/nav'
import Logo from '../components/logo'

const Header = ({ siteTitle }) => (
  <header className="p-6 md:py-12">
    
    <div className="container lg:flex lg:space-between">
      <div className="flex flex-wrap items-center">

        <Link to="/">
          <Logo />
        </Link>
        
      </div>

      <Nav />

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
