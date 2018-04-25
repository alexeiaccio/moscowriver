/* import React from 'react'
import chain from 'crocks/pointfree/chain'
import prop from 'crocks/Maybe/prop'
import compose from 'crocks/helpers/compose' */
import State from 'crocks/State'

import chain from 'crocks/pointfree/chain'
import compose from 'crocks/helpers/compose'
import isArray from 'crocks/predicates/isArray'
import isNumber from 'crocks/predicates/isNumber'
import isString from 'crocks/predicates/isString'
import map from 'crocks/pointfree/map'
import option from 'crocks/pointfree/option'
import prop from 'crocks/Maybe/prop'
import propPath from 'crocks/Maybe/propPath'
import propPathOr from 'crocks/helpers/propPathOr'
import safe from 'crocks/Maybe/safe'
import fst from 'crocks/Pair'

const { get, put } = State

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
  },
  {
    text: '«390 взглядов на Москву-реку» провело проектное бюро Orchestra Design'
  }
]

const getElementsType = el => prismicElements[el]
const last = xs => propPath([xs.length - 1])
const type = map(prop('type'))
const start = map(prop('start'))
const end = map(prop('end'))
const link = map(propPath(['data', 'uid']))
const head = propPath([0])
const text = prop('text')
const spans = prop('spans')

const sourseSpans = head(props).chain(spans).option('')

/*

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
} */

/* console.log(
  cutter(sourseSpans)(sourceText)
) */

// def :: [ Object ] -> a -> b
const def =
  propPathOr({ poop: 'poop' })

// first ::
const first = def([0])

// propOr :: (String, (b -> Boolean), a) -> Object -> c
const propOr = (key, pred, def) =>
  compose(option(def), chain(safe(pred)), prop(key))

// safeNumber :: Key -> Object -> Number
const safeNumber = key =>
  propOr(key, isNumber, 0)

// safeString :: Object -> String
const safeText =
  propOr('text', isString, 'poop')

// safeArray :: Object -> String
const safeArray = key =>
  propOr(key, isArray, [{}])

// sourceText :: [ Object ] -> String
const sourceText =
  get(map(safeText))

// updatePop :: String -> State String String
const updatePop = x =>
  get().chain(
    old => put(x).chain(
      () => State.of(old)
    )
  )

const res = sourceText
  .chain(updatePop)
  .map(map(safeArray('spans')))
  //.map(map(map(safeNumber('start'))))
  .map(map(map(safeNumber('end'))))
  .runWith(props)

console.log(
  res.snd(),
  res.fst()
)

