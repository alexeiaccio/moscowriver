import React from 'react'
import Parser from 'html-react-parser'
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./Slider.scss"



class Slider extends React.Component {
  render() {
    const withoutTagP = this.props.images.replace(/<\/?p[^>]*>/g, "");
    const replaced = withoutTagP.replace( /\>\s+\</g, "><" );
    const images = replaced.replace( /\s+\</g, "<" );
    console.log(images)
    return (
      <div className="container">
        <Carousel showStatus={false} emulateTouch showThumbs={false}>
          {Parser( images )}
        </Carousel>
      </div>
    )
  }
}

export default Slider