import React, { Component } from 'react'
import propPath from 'crocks/Maybe/propPath'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'
import { key } from 'styled-theme'

import {
  s4,
} from 'Helpers'
import { Lazy } from 'Components'
import {
  Row,
  Section,
  SectionHeaderThree,
} from 'Styled'
import patternWaves from '../../assets/PatternWavesWhite.svg'
import Functions from './Function'

const TableSection = Section.extend`
  margin: ${key(['space', 9])}px 0 ${key(['space', 10])}px;
  padding: ${key(['space', 10])}px 0 ${key(['space', 12])}px;
  background-color: ${key(['colors', 'gray', 2])};
  background-image: url(${patternWaves});
  background-repeat: repeat-x;
  background-position-y: calc(100% + 225px);
`

const TableRow = Row.extend`
  width: 1100px;
`

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
  font-size: ${key(['fontSizes', 4])}px;
  line-height: ${key(['lineHeights', 4])};
  color: ${({active}) => active ? key('colors.white') : key(['colors', 'gray', 3])};
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    left: 0px;
    top: 3px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    border: 3px solid ${key('colors.pink')};
  }
  &::after {
    content: '';
    position: absolute;
    left: 5px;
    top: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${key('colors.pink')};
    opacity: ${({active}) => active ? 1 : 0};
    transition: all .2s ease-in-out;
  }
`

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  &>* {
    width: 100%;
    max-width: 30%;
    -webkit-flex: 30%;
    flex: 30%;
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
        if(item.header.length > 0 && item.header[0].text.length > 0) {          
          return tables.push(Object.assign({}, {header: item.header[0].text, rows: item.row}))
        } else {
          return tables[tables.length-1].rows = tables[tables.length-1].rows.concat(item.row)
        }
      })
      return tables
    }

    const { section } = this.props
    const { primary, items } = section
    const tables = getTables(items)

    const getTableContent = table => {
      const res = []
      let second = []
      let fourth = []
      let isFirst, isSecond, isFourth = false
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
            row.text.length > 1
            ? second.push(<Functions key={s4()} data={row.text} />)
            : second.push(<p key={s4()}> </p>)
          } else {
            isFirst = true
            row.text.length > 1
            ? fourth.push(<Functions key={s4()} data={row.text} />)
            : fourth.push(<p key={s4()}> </p>)
          }
        }
      })
      res.push(fourth)
      return res
    }

    const header = propPath(['primary', 'header'])
    const head = propPath([0])
    const text = propPath(['text'])
    const getHeader = header(section).chain(head).chain(text).option('')

    return (
      <TableSection id={primary.anchor || null} >
        {getHeader.length > 0 &&
          <Lazy height={50}>
            <TableRow>
              <SectionHeaderThree style={{color: 'white'}}>              
              { RichText.asText(primary.header) }
              </SectionHeaderThree>
            </TableRow>
          </Lazy>
        }
        <Lazy height={600}>
          <TableRow>
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
            </Column>
          </TableRow>
        </Lazy>
      </TableSection>
    )
  }
}


export default ResultFunctions
