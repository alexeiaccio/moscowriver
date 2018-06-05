import React from 'react'
import { RichText } from 'prismic-reactjs'
const Elements = RichText.Elements

const newLine = text => {
  if (text !== undefined) {
    return text.search(/\n/) > 0
    ? text.split('\n').map((item, key) => {
        return <Fragment key={s4()}>{item}<br/></Fragment>
      })
    : text
  }
  return text
}

const propsWithUniqueKey = function(props, key) {
  return Object.assign(props || {}, { key })
}

export const htmlSerializer = function(type, element, content, children, key) {
  let props = {}

  switch(type) {
    case Elements.paragraph:
      props = {className: 'paragraph'}
      return React.createElement('p', propsWithUniqueKey(props, key),
        children.length
        ? children.filter(child => child !== null).map(child => newLine(child[0]))
        : children
      )
    default:
      return null
  }
}