import React, { Component, Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'

import { s4 } from 'Helpers'

const Image = styled.div`
  position: ${({active}) => active ? 'absolute' : 'relative'};
  top: 0;
  left: 0;
  height: ${({active}) => active ? '100%' : '300px'};
  width: ${({active}) => active ? '100%' : '25%'};
  background: ${({url}) => 'url(' + url + ') center no-repeat'};
  background-size:  cover;
  transition: all .4s ease-in-out;
  cursor: pointer;
  z-index: ${({active}) => active ? 1000 : 0};
`

class ResultAdditions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: Array(this.props.data.length).fill(false)
    }
  }

  handleClick = (i) => {
    this.setState({
      images: this.state.images.map((image, j) => j === i ? !this.state.images[i] : false )
    })
  }

  render() {
    console.log(this.state.images)

    return (
      <Fragment>
      {this.props.data.map((image, i)  =>
        <Image
          key={s4()}
          className='img'
          active={this.state.images[i]}
          onClick={() => this.handleClick(i)}
          url={image.sectionimage.url}
          />
      )}
      </Fragment>
    )
  }
}

export default ResultAdditions