import React from 'react'
import "./index.scss"

class WaterBackground extends React.Component {
  componentWillMount () {
    const script = document.createElement("script");

    script.src = "./js/water.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {    
    return (
      <div className="Background">
        <canvas className="Background-canvas"></canvas>
      </div>
    )
  }
}

export default WaterBackground
