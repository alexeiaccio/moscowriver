import React from "react";
import Helmet from "react-helmet";
import config from "../../gatsby-site-config";
import SiteNavi from '../components/SiteNavi'
import Footer from "../components/Footer/Footer";
import "./index.scss";

export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    let navi = "show";
    if (currentPath === "") {
      title = "Home";
      navi = "hidden";
    } else if (currentPath === "about/") {
      title = "About";
    } else if (currentPath.includes("posts")) {
      title = "Article";
    } 
    return title;
  }

  getNavi() {
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    if (currentPath === "") {
      return true;
    }    
    return false;
  } 

  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <title>{`${config.siteTitle} |  ${this.getLocalTitle()}`}</title>
          <meta name="description" content={config.siteDescription} />
          <link rel="preload" href="https://fonts.googleapis.com/css?family=Alegreya+Sans:500|Merriweather:400&amp;subset=cyrillic" as="style" crossOrigin />
          <link rel="prefetch" href="https://fonts.googleapis.com/css?family=Alegreya+Sans:300,400|Merriweather:400i,700,700i&amp;subset=cyrillic" />
          <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans:500|Merriweather:400&amp;subset=cyrillic" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css?family=Alegreya+Sans:300,400|Merriweather:400i,700,700i&amp;subset=cyrillic" rel="stylesheet" />
        </Helmet>
        { this.getNavi() ? null : <SiteNavi title={config.siteTitle} {...this.props} /> }
        {children()}
      </div>
    );
  }
}
