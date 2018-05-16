import styled from 'styled-components'
import { key } from 'styled-theme'

export const CiteWrapper = styled.div`
  position: relative;
  text-align: right;
  padding: ${key(['space', 5])}px 0;
  background: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
  &> cite {
    margin: 0 auto;
    width: ${key('sizes.width')};
    display: block;
  }
`