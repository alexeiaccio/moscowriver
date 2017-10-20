import React from "react";
import Link from "gatsby-link";

class SiteNavi extends React.Component {
  style = {
    fontFamily: '"Alegreya Sans", sans-serif',
    fontSize: "1.125rem",
    fontWeight: 500
  };

  render() {
    const { location, title } = this.props;
    return (
      <nav
        style={this.style}
        className="navbar navbar-expand navbar-dark flex-column flex-md-row bg-primary sticky-top"
      >
        <div className="container">
          {location.pathname === "/" ? null : (
            <Link className="text-center" to="/">
              <h1 className="navbar-brand text-uppercase mb-0 mr-5">{title}</h1>
            </Link>
          )}
          <div className="navbar-nav-scroll w-100">
            <ul className="navbar-nav bd-navbar-nav flex-row justify-content-between text-uppercase">
              <li
                className={
                  location.pathname === "/#map" ? "nav-item active" : "nav-item"
                }
              >
                <Link to="#map" className="nav-link">
                  Результаты
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/#conception"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link to="#conception" className="nav-link">
                  Концепция
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/#research"
                    ? "nav-item active"
                    : "nav-item"
                }
              >
                <Link to="#research" className="nav-link">
                  Исследования
                </Link>
              </li>
              <li
                className={
                  location.pathname === "/#contact"
                    ? "nav-item active"
                    : "nav-item"
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
    );
  }
}

export default SiteNavi;
