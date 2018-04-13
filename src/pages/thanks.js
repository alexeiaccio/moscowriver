import React from 'react'
import Link from 'gatsby-link'

export default () => (
  <div>
    <h1>Спасибо!</h1>
    <p>Вы подписались на обновления нашего сайта!</p>
    <Link to='/'>
      Вернуться на Главную
    </Link>
  </div>
)