import React from 'react'
import { RoundButtonWithGif } from 'Components'

export const SeeVideoButton = ({data, name}) => {
  const buttons = data.body.filter(item => item.slice_type === 'button')
  const namedButtons = (name) => buttons.filter(item => item.primary.buttonname === name)
  const text = namedButtons(name)[0].primary.text[0].text

  return <RoundButtonWithGif
    to='#two'
    url={namedButtons(name)[0].primary.image.url}
    text={text}
    icon={namedButtons(name)[0].primary.icon.url} />
}