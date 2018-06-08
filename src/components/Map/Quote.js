import React, { Fragment } from 'react'
import { getStringFromProps } from 'Helpers'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'

const QuoteWrapper = styled.div`
  width: 460px;
  padding: 25px;
  padding-top: ${({image}) => image ? '15px' : '25px'};
  font-size: ${key(['fontSizes', 6])}px;
  line-height: ${key(['lineHeights', 5])};
  border: 10px solid ${({color}) => key('colors.' + color)};
  border-top: ${({image}) => image ? 0 : ''};
`

const Quote = styled.p`
  position:  relative;
  padding-left: 25px;
  margin-top: ${({image}) => image ? '0px' : '10px'};
  z-index: 9000;
`

const QouteHeader = styled.h4`
  position: relative;
  display: inline-block;
  margin-left: 25px;
  color: ${({color}) => key('colors.' + color)};
  font-weight: ${key('fontWeights.medium')};
  font-size: ${key(['fontSizes', 4])}px;
  line-height: ${key(['lineHeights', 4])};
  z-index: 5000;
  &::after {
    content: '';
    position: absolute;
    bottom: calc(${key(['fontSizes', 4])}px * .37);
    display: flex;
    width: 100%;
    height: calc(${key(['fontSizes', 4])}px * .48);
    background-color: ${({shade}) => key('colors.' + shade)};
    transition: background-color .4s ease-in-out;
    opacity: .5;
    z-index: -1;
  }
`

const QouteImageHeader = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: url(${({url}) => url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  &> h4 {
    margin-left: 55px;
  }
  &::after {
    content: '';
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
  }
`

const Button = styled.a`
  display: inline-block;
  margin: 25px 25px 0;
  color: ${key('colors.white')};
  font-weight: ${key('fontWeights.medium')};
  padding: ${key(['space', 2])}px ${key(['space', 3])}px;
  background-color: ${({color}) => key('colors.' + color)};
  text-decoration: none;
  border-radius: ${key(['radii', 1])}px;
  transition: all .2s ease-in-out;
  &:hover {
    color: ${key('colors.black')};
  }
`

export default ({ data, color }) => {
  return (
    <Fragment>
      {data.image.url !== null &&
        <QouteImageHeader url={data.image.url}>
          <QouteHeader color='white' shade='black'>
          { getStringFromProps(data.title) }
          </QouteHeader>
        </QouteImageHeader>
      }
      <QuoteWrapper color={color} image={data.image.url !== null ? true : false}>
      {data.image.url === null &&
        <QouteHeader color='text' shade={color}>
        { getStringFromProps(data.title) }
        </QouteHeader>
      }
        <Quote>
        { getStringFromProps(data.quote) }
        </Quote>
      {data.body.length > 0 &&
        (data.body[0].primary.link !== null ?
          <Button color={color} href={`/${data.body[0].primary.link.uid}/`} target="_blank" rel="noopener">
            Подробнее
          </Button>
        : <Button color='silver' disabled>
          { data.body[0].primary.placeholder }
          </Button>)
      }
      </QuoteWrapper>
    </Fragment>
  )
}