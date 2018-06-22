import React, { Fragment } from 'react'

import { s4 } from 'Helpers'

import { default as Header } from './ResultHeader'
import { ResultSectionOne } from './ResultSectionOne'
import { ResultMirroredImage } from './ResultMirroredImage'
import { ResultImage } from './ResultImage'
import { ResultImageJumbo } from './ResultImageJumbo'
import { ResultText } from './ResultText'
import { ResultColoredBack } from './ResultColoredBack'
import { ResultLinks } from './ResultLinks'
import ResultGallery from './ResultGallery'
import ResultMap from './ResultMap'
import ResultTable from './ResultTable'
import ResultForm from './ResultForm'

export default ({data: { data, uid }, results, definitions, siteTitle}) => {
  const pageBody = data.body
  let mapsI = 0
  console.log(siteTitle)
  return (
    <Fragment >
     <Header data={{title: [{ text: siteTitle }]}} {...{results}} move={-140} />
     <main id='definition-wrapper'>
        <ResultSectionOne {...{data}} />
        {pageBody.map(section => {
          switch(section.primary.sectiontype) {
            case 'mirrored-image':
              return <ResultMirroredImage key={s4()} {...{section}} />
              break
            case 'image':
              return <ResultImage key={s4()} {...{section}} />
              break
            case 'image-jumbo':
              return <ResultImageJumbo key={s4()} {...{section}} {...{definitions}} />
              break
            case 'text':
              return <ResultText key={s4()} {...{section}} />
              break
            case 'form':
              return <ResultForm key={s4()} {...{section}} {...{uid}} />
              break
            case 'maps':
              return <ResultMap key={s4()} map={mapsI += 1} {...{section}} {...{uid}} />
              break
            case 'tables':
              return <ResultTable key={s4()} {...{section}} />
              break
            case 'colored-back':
              return <ResultColoredBack key={s4()} {...{section}} />
              break
            case 'gallery':
              return <ResultGallery key={s4()} {...{section}} />
              break
            case 'links':
              return <ResultLinks key={s4()} {...{section}} />
              break
            return undefined
          }
        })}
     </main>
    </Fragment>
  )
}