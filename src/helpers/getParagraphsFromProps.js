import React from 'react'
import map from 'crocks/pointfree/map'
import { getString } from 'Helpers'
import { s4 } from 'Helpers'

// renderP :: Maybe String -> React DOM
const renderP = text =>
(<p key={s4()}>
    {text.option('Ooops...')}
</p>)

// getParagraphsFromProps:: [a] -> React DOM
export default prop => (
  map(renderP, map(getString('text'))(prop))
)
