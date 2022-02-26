import "./VideoList.scss";
import VideoThumbnail from "../VideoThumbnail/VideoThumbnail";

export default function VideoList({ videoData, currentVideo }) {
  return (
    <section className="video__container">
      <h2 className="video__header">NEXT VIDEOS</h2>
      {videoData
        .filter((video) => video.id !== currentVideo.id)
        .map((video) => {
          return (
            <VideoThumbnail
              key={video.id}
              title={video.title}
              channel={video.channel}
              image={video.image}
            />
          );
        })}
    </section>
  );
}
