import { Component } from "react";
import Videos from "../../data/videos.json";
import "./VideoList.scss";
import "../../App.scss";

class VideoList extends Component {
  state = { videos: Videos };
  // JS code here

  render() {
    return (
      <article className="video__container">
        <h2 className="video__header">NEXT VIDEOS</h2>
        {this.state.videos.map((video) => (
          <div className="video__card" key={video.id}>
            <img
              className="video__image"
              src={video.image}
              alt="Video Thumbnail"
            ></img>
            <div className="video__card-data">
              <h3 className="video__title">{video.title}</h3>
              <p className="video__channel">{video.channel}</p>
            </div>
          </div>
        ))}
      </article>
    );
  }
}

export default VideoList;
