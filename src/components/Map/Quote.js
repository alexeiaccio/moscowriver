import React, { Fragment } from 'react'
import { getStringFromProps } from 'Helpers'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'

const QuoteWrapper = styled.div`
  width: 450px;
  padding: 35px;
  padding-top: ${({image}) => image ? '25px' : '35px'};
  font-size: ${key(['fontSizes', 5])}px;
  line-height: ${key(['lineHeights', 3])};
  border: 10px solid ${({color}) => key('colors.' + color)};
  border-top: ${({image}) => image ? 0 : ''};
`

const Quote = styled.p`
  position:  relative;
  padding-left: 25px;
  margin-top: ${({image}) => image ? '0px' : '15px'};
  &::before {
    content: '—';
    display: block;
    position: absolute;
    top: 0px;
    left: 0px;
  }
`

const QouteHeader = styled.h4`
  position: relative;
  display: inline-block;
  margin-left: 25px;
  color: ${({color}) => key('colors.' + color)};
  font-weight: ${key('fontWeights.medium')};
  font-size: ${key(['fontSizes', 3])}px;
  line-height: ${key(['lineHeights', 3])};
  z-index: 5000;
  &::after {
    content: '';
    position: absolute;
    bottom: calc(${key(['fontSizes', 3])}px * .45);
    display: flex;
    width: 100%;
    height: calc(${key(['fontSizes', 3])}px * .45);
    background-color: ${({shade}) => key('colors.' + shade)};
    transition: background-color .4s ease-in-out;
    opacity: .5;
    z-index: -1;
  }
`

const QouteImageHeader = styled.div`
  position: relative;
  width: 100%;
  height: 150px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: url(${({url}) => url});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  &> h4 {
    margin-left: 70px;
  }
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
  }
`

const Button = styled.div`
  color: ${key('colors.white')};
  background-color: ${({color}) => key('colors.' + color)};
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
      { data.body.length > 0 &&
        <Button color={color}>
        { data.body[0].primary.link.uid || data.body[0].primary.placeholder }
        </Button>
      }
      </QuoteWrapper>
    </Fragment>
  )
}