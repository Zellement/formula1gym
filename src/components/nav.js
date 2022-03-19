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
    <nav className="xl:flex xl:content-end xl:justify-end xl:flex-col xl:ml-auto">
      <div className={`navigation-wrapper navigation-wrapper--${menuActive}`} >
        <ul className="xl:flex xl:w-full xl:flex-row xl:justify-start xl:items-stretch">
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/">Home</Link>
          </li>
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/about/">About</Link>
          </li>
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/mixed-gym/">Mixed Gym</Link>
          </li>
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/women-only-gym/">Women-Only Gym</Link>
          </li>
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/sunbeds/">Sunbeds</Link>
          </li>
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/sports-massage/">Sports Massage</Link>
          </li>
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/prices/">Prices</Link>
          </li>
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/classes/">Classes</Link>
          </li>
          <li className="navigation-wrapper__list-item">
            <Link className="navigation-wrapper__link" onClick={this.toggleMenu} activeClassName="is-active" to="/contact-find-us/">Contact / Find Us</Link>
          </li>
          <li className="mt-4 navigation-wrapper__list-item xl:mt-0 xl:pl-4">
            <JoinNow />
          </li>
        </ul>
      </div>
      <div aria-label="Navigation menu button" role="button" tabIndex="0" className={`${burgerActive} navigation-button`} onClick={this.toggleMenu} onKeyDown={this.toggleMenu}>
        <div className={`navigation-button__inside ${burgerActive}`}>
          <span className="left-0 navigation-button__lines navigation-button__line-1"></span>
          <span className="left-0 mt-2 navigation-button__lines navigation-button__line-2"></span>
          <span className="left-0 mt-4 navigation-button__lines navigation-button__line-3"></span>
          <span className="right-0 navigation-button__lines navigation-button__line-4"></span>
          <span className="right-0 mt-2 navigation-button__lines navigation-button__line-5"></span>
          <span className="right-0 mt-4 navigation-button__lines navigation-button__line-6"></span>
        </div>
      </div>
    </nav>
  )}
}

export default Nav