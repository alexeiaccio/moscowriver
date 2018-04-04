import React from 'react'
import Link from 'gatsby-link'
import Map from '../components/Map'

const SecondPage = () => (
  <div>
    <div style={{height: '800px'}}>
      <Map />
    </div>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default SecondPage
