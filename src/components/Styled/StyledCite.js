import styled from 'styled-components'
import { key } from 'styled-theme'

export const CiteWrapper = styled.div`
  position: relative;
  text-align: right;
  padding: ${key(['space', 5])}px 0;
  background: linear-gradient(180deg, ${key('colors.white')} 0%, transparent 100%);
  &> cite {
    margin: 0 auto;
    width: ${key('sizes.width')};
    display: block;
  }
`