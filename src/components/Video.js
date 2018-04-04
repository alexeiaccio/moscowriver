import React from 'react'
import YouTube from 'react-youtube'

export default ({ data: { video: { embed_url } } }) => {
  const youTubeID = embed_url.match(/(?:\?v=)(.*)/)[1]
  const opts = {
    height: "400",
    width: "712",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
      iv_load_policy: 3,
      controls: 0,
      enablejsapi: 1,
      disablekb: 0,
      loop: 1,
      color: 'white',
      origin: 'http://localhost:8000/'
    }
  }
  return (
    <YouTube
      videoId={youTubeID}
      opts={opts}
    />
  )
}

export const query = graphql`
  fragment VideoFragment on PrismicDocument {
    data {
      video {
        embed_url
      }
    }
  }
`