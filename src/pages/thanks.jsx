import React from "react";
import Link from 'gatsby-link'

export default () =>
  <div className="container m-5">
    <h1>Спасибо!</h1>
    <p>Вы подписались на обновления нашего сайта!</p>
    <Link to="/" className="btn btn-primary">
      Вернуться на Главную
    </Link>
  </div>;