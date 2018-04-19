import React from 'react'
import map from 'crocks/pointfree/map'
import { getString } from 'Helpers'
import { s4 } from 'Helpers'
import { prismicElements } from './prismicElements'

const propsWithUniqueKey = () =>
  Object.assign({}, { key: s4() });

const getElementsType = el => prismicElements[el]
const type = map(getElementsType, ({type}) => type)
const text = ({text}) => text

const render = x =>
  React.createElement(
    type(x),
    propsWithUniqueKey(),
    text(x)
  )

// getElements:: [ String ] -> React DOM
export const getElements = map(render)