import React from 'react';
import VideoItem from './VideoItem';
import '../styles/VideoListe.css';


const VideoListe = ({ videos, onVideoKlick }) => {
  const renderedListe = videos.map(video => {
    return (
      <VideoItem id="VideoListeItem"
      key={video.id.videoId}
      onVideoAuswahl={onVideoKlick}
      video={video}
      />
    );

  });


  return (
    //className von Semantic ui
    <div className="ui relaxed divided list videoListe">
      {renderedListe}
    </div>
  );
};

export default VideoListe;
