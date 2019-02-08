import React from 'react';
import '../styles/VideoDetail.css';


const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      " ...loading"
    );
  };


  //gleichbleibender Teil vom Video Link + geklikte video id
const videoSrc = `https://youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed videoBig">
        <iframe title="videoPlayer" src={videoSrc} />
      </div>
      <div className="ui segment VideoDesc">
        <h4 className="ui header">
          {video.snippet.title}
        </h4>
        <hr />
        <p className="videoDesc">
          {video.snippet.description}
        </p>
      </div>
    </div>
  );
}

export default VideoDetail;
