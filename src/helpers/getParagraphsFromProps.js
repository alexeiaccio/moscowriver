import React from 'react'
import map from 'crocks/pointfree/map'
import { getString } from '../helpers/maybe'
import s4 from '../helpers/s4'

// renderP :: Maybe String -> React DOM
const renderP = text => 
(<p key={s4()}>
    {text.option('Ooops...')}
</p>)

// getParagraphsFromProps:: [a] -> React DOM 
export default prop => (
  map(renderP, map(getString('text'))(prop))
)
