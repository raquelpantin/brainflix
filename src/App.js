import { Component } from "react";
import "./App.scss";
import Main from "./components/Main/Main";
import videoData from "./data/video-details.json";

class App extends Component {
  state = {
    videoData: videoData,
    currentVideo: videoData[0],
  };

  nextVideo = (id) => {
    const nextVideoId = this.state.videoData.findIndex(
      (video) => id === video.id
    );
    this.setState({
      currentVideo: this.state.videoData[nextVideoId],
    });
  };

  render() {
    return (
      <Main
        videoData={this.state.videoData}
        currentVideo={this.state.currentVideo}
        nextVideo={this.nextVideo}
      />
    );
  }
}

export default App;
