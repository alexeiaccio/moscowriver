import React from 'react'
import styled from 'styled-components'

import { Link } from 'Components'

const Round = styled(Link)`
  color: red;
`

const RoundButton = Round.extend`
  position: relative;
  display: block;
  padding: 10px;
`

export const ButtonShade = styled.p`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  transition: all .4s ease-in-out;
  background-color: rgba(0,0,0,.5);
`

export default () => (
  <div>
    <h1 id='top' >Спасибо!</h1>
    <p>Вы подписались на обновления нашего сайта!</p>
    <Link to='/'>
      Внутри сайта
    </Link>
    <Round to='#top'>
      По странице
    </Round>
    <RoundButton to='https://www.accio.pro'>
      <ButtonShade />
      Внешняя ссылка
    </RoundButton>
  </div>
)