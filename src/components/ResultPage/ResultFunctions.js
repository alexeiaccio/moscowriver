import React, { Component, Fragment } from 'react'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'

import {
  getElementsFromProps,
  getStringFromProps,
  s4,
} from 'Helpers'
import ArrowIconPink from '../../assets/ArrowIconPink.svg'
import Functions from './Function'

const Column = styled.div`
  display: flex;
  flex-direction: column;
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
  color: ${({active}) => active ? key('colors.white') : key(['colors', 'gray', 3])};
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

const TooltipWrapper = styled.div`
  position: relative;
`

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  &>* {
    width: 100%;
    max-width: 30%;
    font-size: ${key(['fontSizes', 6])}px;
    line-height: ${key(['lineHeights', 5])};
    color: ${key('colors.white')};
  }
  & div {
    padding: ${key(['space', 5])}px ${key(['space', 3])}px ${key(['space', 5])}px 0;
  }
  & p {
    padding-bottom: ${key(['space', 2])}px;
  }
  & .column-name {
    padding: ${key(['space', 5])}px ${key(['space', 3])}px ${key(['space', 3])}px 0;
    font-weight: ${key('fontWeights.light')};
    color: ${key(['colors', 'gray', 3])};
    border-bottom: 1px solid ${key(['colors', 'gray', 3])};
  }
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
  height: 500px;
  width: 100%;
  @media (min-width: 1200px) {
    width: calc(50vw - 25px);
    margin-left: calc(-50vw + 543px);
  }
  background: ${key(['colors', 'gray', 3])};
  border: 1px solid ${key('colors.pink')};
`

class ResultFunctions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeList: 0,
    }
  }

  changeList = (i) => {
    this.setState({
      activeList: i
    })
  }

  render() {
    const getTables = data => {
      const tables = []
      data.map((item, i) => {
        if(item.header.length > 0) {
          return tables.push(Object.assign({}, {header: item.header[0].text, rows: item.row}))
        } else {
          return tables[tables.length-1].rows = tables[tables.length-1].rows.concat(item.row)
        }
      })
      return tables
    }

    const tables = getTables(this.props.data)

    const getTableContent = table => {
      const res = []
      let second = []
      let fourth = []
      let isFirst,isSecond, isFourth = false
      table.rows.map((row, i) => {
        if(row.type === 'paragraph') {
          if (isFirst || i === 0) {
            isFirst = false
            isSecond = true
            fourth.length > 0 && res.push(fourth)
            fourth = []
            row.text.length > 0 && res.push(<p key={s4()}>{row.text}</p>)
          } else {
            isFourth = true
            res.push(second)
            second = []
          }
        } else if(row.type === 'list-item') {
          if(!isFourth) {
            second.push(<Functions key={s4()} data={row.text} />)
          } else {
            isFirst = true
            fourth.push(<Functions key={s4()} data={row.text} />)
          }
        }
      })
      res.push(fourth)
      return res
    }

    return (
      <Fragment>
        <Column>
          <Headers key={s4()}>
          {tables.map((table, i) =>
            <H4
              key={s4()}
              active={this.state.activeList === i}
              onClick={() => this.changeList(i)}
              >
              { table.header }
            </H4>
          )}
          </Headers>
          <TooltipWrapper id='result-tooltip-wrapper'>
            {tables.map((table, i)  =>
              this.state.activeList === i &&
                <List key={s4()} >
                  <div className='column-name'>Кто пользуется?</div>
                  <div className='column-name'>Как пользуются территорией?</div>
                  <div className='column-name'>Как хотели бы пользоваться?</div>
                {
                  getTableContent(table).map(x=> <div  key={s4()}>{x}</div>)
                }
                </List>
            )}
          </TooltipWrapper>
        </Column>
      </Fragment>
    )
  }
}


export default ResultFunctions
