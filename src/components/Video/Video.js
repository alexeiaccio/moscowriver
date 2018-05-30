import React from 'react'
import Vimeo from '@u-wave/react-vimeo'
import styled from 'styled-components'

const Player = styled(Vimeo)`
  min-width: 1100px;
  min-height: 618px;
`

class Video extends React.Component {
  render() {
    return (
      <Vimeo
        video={this.props.data.video.embed_url || 272529781}
        autoplay
        loop
        width={1100}
        height={618}
        muted
        volume={0}
        showPortrait={false}
        showTitle={false}
        paused={false}
      />
    )
  }
}

export default Video

export const query = graphql`
  fragment VideoFragment on PrismicDocument {
    data {
      video {
        embed_url
      }
    }
  }
`