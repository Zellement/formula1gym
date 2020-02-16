import React from "react"
import { Link } from "gatsby"
import JoinNow from "../components/buttons/join-now"

const Nav = class extends React.Component {

  state = { showMenu : false }

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }
 
  render() {
    const menuActive = this.state.showMenu ? 'is-active' : '';
    const burgerActive = this.state.showMenu ? 'is-active' : '';
    return (     
    <nav className="lg:flex lg:content-end lg:justify-end lg:flex-col lg:ml-auto">
      <div className={`navigation-wrapper navigation-wrapper--${menuActive}`} >
        <ul className="md:bg-red md:flex md:w-full md:flex-row md:justify-start md:items-stretch">
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/">Home</Link>
          </li>
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/about">About</Link>
          </li>
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/mixed-gym">Mixed Gym</Link>
          </li>
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/women-only-gym">Women-Only Gym</Link>
          </li>
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/prices">Prices</Link>
          </li>
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/classes">Classes</Link>
          </li>
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/find-us">Find Us</Link>
          </li>
          <li className="navigation-wrapper__list-item">
            <JoinNow />
          </li>
        </ul>
      </div>
      <div aria-label="Navigation menu button" role="button" tabIndex="0" className={`${burgerActive} navigation-button`} onClick={this.toggleMenu} onKeyDown={this.toggleMenu}>
        <div className={`navigation-button__inside ${burgerActive}`}>
          <span className="navigation-button__lines navigation-button__line-1 left-0"></span>
          <span className="navigation-button__lines navigation-button__line-2 left-0 mt-2"></span>
          <span className="navigation-button__lines navigation-button__line-3 left-0 mt-4"></span>
          <span className="navigation-button__lines navigation-button__line-4 right-0"></span>
          <span className="navigation-button__lines navigation-button__line-5 right-0 mt-2"></span>
          <span className="navigation-button__lines navigation-button__line-6 right-0 mt-4"></span>
        </div>
      </div>
    </nav>
  )}
}

export default Nav