import React, { Component, Fragment } from 'react'
import propPath from 'crocks/Maybe/propPath'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'
import { RichText } from 'prismic-reactjs'

import { Lazy } from 'Components'
import {
  Row,
  ResultSection,
  SectionHeader,
} from 'Styled'
import { s4 } from 'Helpers'

import Holder from '../../assets/Holder.svg'

const WideRow = Row.extend`
  width: 1100px;
`

const GalleryRow = WideRow.extend`
  width: 1100px;
  height: ${({active}) => active ? '800px' : 'auto'};
  position: relative;
  flex-wrap: wrap;
  transition: all .6s ease-in-out;
`

const Image = styled.div`
  top: 0;
  left: 0;
  background: url(${({url}) => url}) center no-repeat, 
    url(${Holder}) center no-repeat ${key(['colors', 'gray', 3])};
  background-size: cover, 50px 50px;
  transition: all .4s ease-in-out;
  position: ${({active}) => active ? 'absolute' : 'relative'};
  width: ${({active}) => active ? '100%' : '25%'};
  height: ${({active}) => active ? '800px' : '200px'};
  cursor: ${({active}) => active ? 'zoom-out' : 'zoom-in'};
  z-index: ${({active}) => active ? 1000 : 0};
`

class ResultAdditions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: Array(this.props.section.items.length).fill(false)
    }
  }

  handleClick = (i) => {
    this.setState({
      images: this.state.images.map((image, j) => j === i ? !this.state.images[i] : false )
    })
  }

  render() {
    const { section } = this.props
    const { primary, items } = section
    const header = propPath(['primary', 'header'])
    const head = propPath([0])
    const text = propPath(['text'])
    const getHeader = header(section).chain(head).chain(text).option('')

    return (
      <ResultSection id={primary.anchor || null} >
        {getHeader.length > 0 &&
          <Lazy height={600}>
            <WideRow>
              <SectionHeader color='text' shade='pink' >
              { RichText.asText(primary.header) }
              </SectionHeader>
            </WideRow>
          </Lazy>
        }
        <Lazy height={600}>
          <GalleryRow active={this.state.images.indexOf(true) >= 0} >
          {items.map((image, i)  =>
            <Image
              key={s4()}
              className='img'
              active={this.state.images[i]}
              onClick={() => this.handleClick(i)}
              url={image.sectionimage.url}
              />
          )}
          </GalleryRow>
        </Lazy>
      </ResultSection>
    )
  }
}

export default ResultAdditions