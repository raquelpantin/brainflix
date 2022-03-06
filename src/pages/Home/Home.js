import React from "react";
import axios from "axios";
import Main from "../../components/Main/Main";

const apiURL = "https://project-2-api.herokuapp.com/videos";
const apiKey = "?api_key=947e9003-8493-44a0-9c4b-d1cf7da8bd07";

export default class Home extends React.Component {
  state = {
    videoData: [],
    currentVideo: {},
    comments: [],
  };

  getVideoByID = (id) => {
    axios
      .get(`${apiURL}/${id}${apiKey}`)
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
      .get(apiURL + apiKey)
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

  componentDidUpdate(prevProps, prevState) {
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
