import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class Slider extends React.Component {
  
  render() {
    return (
      <div className="container">
        <Carousel showStatus={false} emulateTouch>
          <div>
              <img src="./img/water.jpg" />
          </div>
          <div>
              <img src="./img/water.jpg" />
          </div>
          <div>
              <img src="./img/water.jpg" />
          </div>
      </Carousel>
      </div>
    )
  }
}

export default Slider