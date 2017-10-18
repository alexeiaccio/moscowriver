import React from 'react'
import Link from 'gatsby-link'

class SiteNavi extends React.Component {
  render() {
    const { location, title } = this.props
    return (
      <nav className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary">
        <div className="container">
          <Link className="text-center" to="/">
            <h1 className="navbar-brand mb-0">{title}</h1>
          </Link>
          <div className="navbar-nav-scroll">
            <ul className="navbar-nav bd-navbar-nav flex-row text-uppercase">
              <li
                className={
                  location.pathname === '/#contact'
                    ? 'nav-item active'
                    : 'nav-item'
                }
              >
                <Link to="#contact" className="nav-link">
                  Контакты
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default SiteNavi
