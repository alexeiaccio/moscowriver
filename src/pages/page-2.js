import React from 'react'
import Link from 'gatsby-link'
import { Title } from 'Components'

const SecondPage = () => {
  return (
    <div>
      <Title color='black' fontSize={0} lineHeight='64px' data={[{text: 'Poop!'}]} />
      <Link to="/">Go back to the homepage</Link>
    </div>
  )
}

export default SecondPage