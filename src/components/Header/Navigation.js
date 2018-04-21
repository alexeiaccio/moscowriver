import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import { key } from 'styled-theme'
import { s4 } from 'Helpers'
import { Row } from 'Styled'

const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: ${key(['space', 9])}px 0 ${key(['space', 5])}px;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%);
`

const NavLink = styled(Link)`
  padding: 0 ${key(['space', 3])}px;
  color: ${key('colors.white')};
  font-size: ${key(['fontSizes', 5])}px;
  font-weight: ${key('fontWeights.medium')};
  text-decoration: none;
  transition: all .2s ease-in-out;
  &:hover {
    color: ${key('colors.bright.blue')};
  }
`

const NavRow = Row.extend`
  width: 1070px;
  flex-wrap: wrap;
  justify-content:  center;
  line-height: ${key(['lineHeights', 2])};
`

export default ({data}) => {
  
  return (
    <Navigation>
      <NavRow>
      {data.map(({text, uid}) => 
        <NavLink key={ s4() } to={`#${uid}`}>{ text }</NavLink>
      )}
      </NavRow>
    </Navigation>
  )
}