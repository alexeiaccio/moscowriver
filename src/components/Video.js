import React from 'react'
import YouTube from 'react-youtube'

const youTubeID = url => url.match(/(?:\?v=)(.*)/)[1]

const opts = {
  height: "400",
  width: "712",
  playerVars: {  // https://developers.google.com/youtube/player_parameters
    autoplay: 1,
    modestbranding: 1,
    showinfo: 0,
    rel: 0,
    iv_load_policy: 3,
    controls: 1,
    enablejsapi: 0,
    disablekb: 0,
    loop: 1,
    color: 'white',
    origin: 'http://localhost:8000/'
  }
}

class Video extends React.Component {
  render() {
    return (
      <YouTube
        videoId={youTubeID(this.props.data.video.embed_url)}
        opts={opts}
        onReady={this._onReady}
      />
    )
  }

  _onReady(event) { // access to player in all event handlers via event.target
    event.target.mute()
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