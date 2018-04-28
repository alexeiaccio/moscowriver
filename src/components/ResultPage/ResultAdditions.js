import React, { Component, Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'

import { s4 } from 'Helpers'

const Image = styled.div`
  top: 0;
  left: 0;
  background: ${({url}) => 'url(' + url + ') center no-repeat'};
  background-size:  cover;
  transition: all .4s ease-in-out;
  position: ${({active}) => active ? 'absolute' : 'relative'};
  width: ${({active}) => active ? '100%' : '25%'};
  height: ${({active}) => active ? '100%' : '200px'};
  cursor: ${({active}) => active ? 'zoom-out' : 'zoom-in'};
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