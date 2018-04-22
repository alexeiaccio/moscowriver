import React from 'react'
import map from 'crocks/pointfree/map'
import { s4 } from 'Helpers'
import { prismicElements } from './prismicElements'

const getElementsType = el => prismicElements[el]

const render = ({text, type}) => 
React.createElement(
  getElementsType(type),
  Object.assign({}, { key: s4(), className: `${type}` }),
  text
)


// getElements:: [ String ] -> React DOM
export const getElementsFromProps = map(render)