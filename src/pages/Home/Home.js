import React from "react";
import axios from "axios";
import Main from "../../components/Main/Main";

const apiURL = "http://localhost:7070/videos";

export default class Home extends React.Component {
  state = {
    videoData: [],
    currentVideo: {},
    comments: [],
  };

  getVideoByID = (id) => {
    axios
      .get(`${apiURL}/${id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          currentVideo: response.data,
          comments: response.data.comments,
        });
      })
      .catch((err) => console.log(err));
  };

  componentDidMount() {
    axios
      .get(`${apiURL}`)
      .then((response) => {
        console.log(response);
        this.setState({
          videoData: response.data,
        });
        const videoID = this.props.match.params.videoID || response.data[0].id;
        this.getVideoByID(videoID);
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevState) {
    const videoID =
      this.props.match.params.videoID || this.state.videoData[0].id;

    if (prevState.currentVideo && prevState.currentVideo.id !== videoID) {
      this.getVideoByID(videoID);
    }
  }

  render() {
    return (
      <>
        <Main
          videoData={this.state.videoData}
          currentVideo={this.state.currentVideo}
          comments={this.state.comments}
        />
      </>
    );
  }
}
