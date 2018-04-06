import React from 'react'
import Link from 'gatsby-link'
import WrapedMap from '../components/Map'

const SecondPage = () => (
  <div>
    <WrapedMap />
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
