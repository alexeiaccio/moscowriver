import React, { Fragment } from 'react'
import map from 'crocks/pointfree/map'
import { s4 } from 'Helpers'
import { prismicElements } from './prismicElements'

const getElementsType = el => prismicElements[el]

const newLine = text =>
  text.search(/\n/) > 0
  ? text.split('\n').map((item, key) => {
      return <Fragment key={s4()}>{item}<br/></Fragment>
    })
  : text

const render = ({text, type}) =>
  text.length > 0
  ? React.createElement(
      getElementsType(type),
      Object.assign({}, { key: s4(), className: `${type}` }),
      newLine(text)
    )
  : null


// getElements:: [ String ] -> React DOM
export const getElementsFromProps = map(render)