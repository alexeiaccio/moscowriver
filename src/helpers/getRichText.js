import React from 'react'
import map from 'crocks/pointfree/map'
import chain from 'crocks/pointfree/chain'
import prop from 'crocks/Maybe/prop'
import propPath from 'crocks/Maybe/propPath'
import compose from 'crocks/helpers/compose'

const s4 = () => (
  Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
)

const propsWithUniqueKey = () =>
  Object.assign({}, { key: s4() });

const getElementsType = el => prismicElements[el]
const last = xs => propPath([xs.length - 1])
const type = map(prop('type'))
const start = map(prop('start'))
const end = map(prop('end'))
const link = map(propPath(['data', 'uid']))
const head = propPath([0])
const text = prop('text')
const spans = prop('spans')

const render = x =>
  React.createElement(
    type(x),
    propsWithUniqueKey(),
    text(x)
  )

// getElements:: [ String ] -> React DOM
export const getElementsFromProps = map(render)

/* map(getString('text')(props) */

const prismicElements = {
  heading1:     'h1',
  heading2:     'h2',
  heading3:     'h3',
  heading4:     'h4',
  heading5:     'h5',
  heading6:     'h6',
  paragraph:    'p',
  preformatted: 'pre',
  strong:       'strong',
  em:           'em',
  listItem:     'li',
  oListItem:    'li',
  list:         'ul',
  oList:        'ol',
  image:        'img',
  embed:        'embed',
  hyperlink:    'a',
  label:        'span',
  span:         'span',
}

const props = [
  {
    text: 'Исследование «390 взглядов на Москву-реку» провело проектное бюро Orchestra Design в рамках проекта «Москва. Порты будущего»',
    spans: [
      {
        start: 14,
        end: 41,
        type: 'hyperlink',
        data: {
          uid: 'orchestra'
        }
      },
      {
        start: 101,
        end: 123,
        type: 'hyperlink',
        data: {
          uid: 'projectmoscow'
        }
      }
    ]
  }
]


const sourceText = head(props).chain(text).option('')

const sourseSpans = head(props).chain(spans).option('')

const firstSpan = spans => [head(spans).option({})]
const getTail = spans => [].concat(spans.slice(1))
const cutHead = spans => text => {
    return firstSpan(spans)
      .reduce((acc, {start, end}) =>
        acc.concat(text.slice(0, start))
          .concat(text.slice(start, end))
          .concat(text.slice(end))
          , [])
  }

const cutter = spans => text =>{
  let cutTail = []
  const spansTail = getTail(spans)
  const result = cutHead(spans)(text).slice(0, (cutHead(spans)(text).length - 1))
  const resultTail = cutHead(spans)(text)[cutHead(spans)(text).length-1]
  if(spansTail.length > 0) {
    const newSpans =
      spansTail.map(({start, end}) => ({
        start: start - firstSpan(spans)[0].end,
        end: end - firstSpan(spans)[0].end
      }))
    cutTail = cutHead(newSpans)(resultTail)
  }
  return [].concat(result).concat(cutTail)
}

console.log(
  cutter(sourseSpans)(sourceText)
)

