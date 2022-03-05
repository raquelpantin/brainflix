import "./Home.scss";
import { Component } from "react";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import VideoInfo from "../../components/VideoInfo/VideoInfo";
import CommentForm from "../../components/CommentForm/CommentForm";
import CommentList from "../../components/CommentList/CommentList";
import VideoList from "../../components/VideoList/VideoList";
import videoData from "../../data/video-details.json";

class Home extends Component {
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
      <>
        <VideoPlayer currentVideo={this.state.currentVideo} />
        <div className="info__container">
          <div className="info__container-left">
            <VideoInfo currentVideo={this.state.currentVideo} />
            <CommentForm />
            <CommentList currentVideo={this.state.currentVideo} />
          </div>
          <VideoList
            nextVideo={this.nextVideo}
            videoData={this.state.videoData}
            currentVideo={this.state.currentVideo}
          />
        </div>
      </>
    );
  }
}

export default Home;
