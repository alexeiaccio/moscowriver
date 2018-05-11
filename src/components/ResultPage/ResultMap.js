import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { key } from 'styled-theme'

import {
  getStringFromProps,
  s4,
} from 'Helpers'
import ArrowIconPink from '../../assets/ArrowIconPink.svg'

const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  min-height: 500px;
`

const Headers = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const H4 = styled.h4`
  position: relative;
  margin-bottom: ${key(['space', 3])}px;
  padding: 0 ${key(['space', 5])}px;
  font-size: ${key(['fontSizes', 3])}px;
  line-height: ${key(['lineHeights', 3])};
  color: ${({active}) => active ? key('colors.black') : key(['colors', 'gray', 1])};
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    left: 0px;
    top: 6px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 3px solid ${key('colors.pink')};
  }
  &::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 11px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${key('colors.pink')};
    opacity: ${({active}) => active ? 1 : 0};
    transition: all .2s ease-in-out;
  }
`

const List = styled.div`
`

const ListItem = styled.p`
  position: relative;
  font-size: ${key(['fontSizes', 6])}px;
  line-height: ${key(['lineHeights', 5])};
  padding-bottom: ${key(['space', 2])}px;
  cursor: pointer;
  transition: all .2s ease-in-out;
  text-decoration: underline dotted;
  text-underline-position: under;
  text-decoration-color: ${({active}) => active ? key('colors.pink') : 'transparent'};
  &::before {
    content: '';
    position: absolute;
    left: -35px;
    top: 3px;
    display: block;
    width: 26px;
    height: 16px;
    background: url(${ArrowIconPink}) no-repeat;
    transition: all .4s ease-in-out;
    opacity: ${({active}) => active ? .99 : 0};
  }
`

const Map = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  width: 100%;
  position: relative;
  overflow: hidden;
  @media (min-width: 1200px) {
    width: calc(50vw - 25px);
    margin-left: calc(-50vw + 543px);
  }
  background-color: ${key(['colors', 'gray', 3])};
  border: 1px solid ${key('colors.pink')};
`

class ResultMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeList: 0,
      items: this.props.data.map(item => Array(item.list.length).fill(false))
    }
  }

  changeList = (i) => {
    this.setState({
      activeList: i
    })
  }

  handleMouseOver = (i, j) => {
    const newState = this.state.items
      .map((x, k) => k === i
        ? x.map((y, l) => l === j ? y = true : y = false)
        : x = this.state.items[k].map(z => z = false))
    this.setState({
      items: newState
    })
  }

  render() {
    const { uid, map } = this.props
    const MapsMarks = require(`./MapsMarks-${uid}-${map}`)

    return (
      <Fragment>
        <Column>
          <Map>
            <MapsMarks state={this.state} uid={uid} />
          </Map>
        </Column>
        <Column>
          <Headers key={s4()}>
          {this.props.data.map((paragraph, i) =>
            <H4
              key={s4()}
              active={this.state.activeList === i}
              onClick={() => this.changeList(i)}
              >
              { getStringFromProps(paragraph.header) }
            </H4>
          )}
          </Headers>
          {this.props.data.map((paragraph, i)  =>
            this.state.activeList === i &&
              <List key={s4()} >
              {paragraph.list.map(({text}, j) =>
                <ListItem
                  key={s4()}
                  active={this.state.items[i][j]}
                  onMouseOver={() => this.handleMouseOver(i, j)}
                  >
                  { text }
                </ListItem>
              )}
              </List>
          )}
        </Column>
      </Fragment>
    )
  }
}


export default ResultMap
