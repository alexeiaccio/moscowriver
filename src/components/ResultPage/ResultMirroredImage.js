import React, { Fragment } from 'react'
import propPath from 'crocks/Maybe/propPath'
import { RichText } from 'prismic-reactjs'
import styled from 'styled-components'
import { key } from 'styled-theme'

import { Lazy } from 'Components'
import {
  ResultSection,
  SectionRowCentered,
  SectionHeader,
  SubHeader,
  SectionBlock,
} from 'Styled'
import { linkResolver, s4 } from 'Helpers'

const MirroredSection = ResultSection.extend`
  /* padding-top: ${key(['space', 10])}px; */
`

const SectionImage = styled.div`
  background: url(${({url}) => url}) center no-repeat;
  background-size: cover;
`

const MirroredImageBlock = SectionBlock.extend`
  max-width: 480px;
  font-weight: ${key('fontWeights.medium')};
  padding-bottom: 0px;
  & h3 {
    line-height: ${key(['lineHeights', 2])};
    text-align: center;
  }
  & .sectionimage {
    width: 570px;
    height: 460px;
    float: right;
    margin-top: ${key(['space', 7])}px;
    @media (min-width: 1200px) {
      margin-top: -${key(['space', 11])}px;
      margin-right: calc(-50vw + 215px);
    }
  }
  & .mirroredimage {
    display: none;
    @media (min-width: 1200px) {
      display: block;
      position: absolute;
      left: calc(-50vw + 215px);
      transform: rotateY(180deg);
      z-index: -1;
    }
  }
`

export const ResultMirroredImage = ({ section }) => {
  const { primary, items } = section
  const header = propPath(['primary', 'header'])
  const getHeader = header(section).option([{text: ''}])

  return (
    <MirroredSection id={primary.anchor || null} >
      <Lazy height={770}>
        {/* getHeader.length &&
          <SectionRowCentered>
            <div>
              <SubHeader>{primary.sectionname}</SubHeader>
              <SectionHeader color='text' shade='pink'>
              { RichText.asText(primary.header) }
              </SectionHeader>
            </div>
          </SectionRowCentered>
         */}
        <SectionRowCentered>
        {items.map(item =>
          <MirroredImageBlock key={s4()} >
            <Fragment key={s4()}>
            { RichText.render(item.text, linkResolver) }
            {(item.sectionimage.url !== null) &&
              <Fragment key={s4()}>
                <SectionImage key={s4()} className='sectionimage' url={item.sectionimage.url} />
                <SectionImage key={s4()} className='sectionimage mirroredimage' url={item.sectionimage.url} />
              </Fragment>
            }
            </Fragment>
          </MirroredImageBlock>
        )}
        </SectionRowCentered>
      </Lazy>
    </MirroredSection>
  )
}