import React from 'react'
import Flickity from '@jamesbliss/react-flickity'

class Slider extends React.Component {
  options = {
    wrapAround: true, 
    initialIndex: 2,
  }
  render() {
    return (
      <div>
        <Flickity options={this.options}>
          <div>
          <img src="https://source.unsplash.com/1400x420/?city" />
          </div>
          <div>
          <img src="https://source.unsplash.com/1400x420/?nature" />
          </div>
          <div>
          <img src="https://source.unsplash.com/1400x420/?people" />
          </div>
          <div>
          <img src="https://source.unsplash.com/1400x420/?london" />
          </div>
          <div>
          <img src="https://source.unsplash.com/1400x420/?forest" />
          </div>
        </Flickity>
      </div>
    )
  }
}

export default Slider