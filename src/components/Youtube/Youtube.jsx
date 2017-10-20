import React from "react";
import YouTube from "react-youtube";

class Youtube extends React.Component {
  render() {
    const opts = {
      height: "400",
      width: "600",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 0,
        modestbranding: 0,
        showinfo: 0,
        rel: 0,
        iv_load_policy: 3,
        controls: 2,
        color: "white"
      }
    };

    return (
      <YouTube
        videoId={this.props.youTubeID}
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Youtube;
