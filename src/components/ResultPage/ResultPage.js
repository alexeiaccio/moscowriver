import React, { Fragment } from 'react'

import { default as Header } from './ResultHeader'

export default ({data}) => {
  return (
    <Fragment>
     <Header data={{title: [{ text: '390 взглядов на Москву-реку' }]}} move={-140} />
    </Fragment>
  )
}