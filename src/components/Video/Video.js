import React from 'react'
import YouTube from 'react-youtube'
import styled from 'styled-components'

const youTubeID = url => url.match(/(?:\?v=)(.*)/)[1]

const opts = id => ({
  height: "400",
  width: "712",
  playerVars: {  // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    modestbranding: 1,
    // showinfo: 0,
    rel: 0,
    iv_load_policy: 3,
    controls: 1,
    enablejsapi: 0,
    disablekb: 1,
    loop: 1,
    color: 'white',
    //origin: 'http://localhost:8000/' || 'http://localhost:5000/',
    playlist: id,
  }
})

const Player = styled(YouTube)`
  min-width: 1100px;
  min-height: 618px;
`

class Video extends React.Component {
  render() {
    const id = youTubeID(this.props.data.video.embed_url)
     return (
       <div style={{zIndex: 4000}} >
        <Player
          videoId={id}
          opts={opts(id)}
          onReady={this._onReady}
        />
      </div>
    )
  }

  _onReady(event) { // access to player in all event handlers via event.target
    event.target.mute()
    event.target.setPlaybackQuality('large')
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