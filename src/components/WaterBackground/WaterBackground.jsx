import React from "react";
import Helmet from "react-helmet";
import "./WaterBackground.scss";

class WaterBackground extends React.Component {
  componentDidMount() {
    if (typeof document !== "undefined") {
      const script = document.createElement("script");
      script.src = "./js/water.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <link rel="preload" href="./img/water-preload.jpg" />
        </Helmet>
        <div className="Background">
          <canvas className="Background-canvas" />
        </div>
      </div>
    );
  }
}

export default WaterBackground;
