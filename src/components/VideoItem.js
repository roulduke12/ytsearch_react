import React from 'react';
import '../styles/VideoItem.css';


const VideoItem = ({ video, onVideoAuswahl }) => {
  return (
    <div onClick={() => onVideoAuswahl(video)} className="video-item item">
      <img className="ui image" id="vidImg" alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <div className="header">
          <a>{video.snippet.title}</a>
        </div>
      </div>
    </div>
  );
};

export default VideoItem;
