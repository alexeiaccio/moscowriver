import React, { Fragment } from 'react'
import propPath from 'crocks/Maybe/propPath'
import styled, { keyframes } from 'styled-components'
import { key } from 'styled-theme'
import {
  Section
} from 'Styled'
import {
  findSection,
  getElementsFromProps,
  s4,
} from 'Helpers'

import { default as Header } from './ResearchHeader'
import { default as Cite } from './ResearchCite'

const SectionOne = Section.extend`
  height: calc(100vh - 120px);
  background-color: ${key('colors.black')};
`

export default ({data}) => {
  const sections = findSection(data)
  const body = propPath(['node', 'data', 'body', 0])
  const title = propPath(['primary', 'title'])
  const cite = propPath(['primary', 'cite'])

  const pageTitle = sections('research').chain(body).chain(title).option([])
  const pageCite = sections('research').chain(body).chain(cite).option([])

  console.log(
    pageCite
  )

  return (
    <Fragment>
      <Header data={{title: pageTitle}} />
      <main>
        <SectionOne>
          <Cite color='blue' fontSize={1} data={{cite: pageCite}} />
        </SectionOne>
        <div>
        { JSON.stringify(data) }
        </div>
      </main>
    </Fragment>
  )
}