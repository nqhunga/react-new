import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

  const imageUrl = video.snippet.thumbnails.default.url;
  const channelUrl = `https://www.youtube.com/channel/${video.snippet.channelId}`;

  return (
    <li onClick={() => onVideoSelect(video)} className="thumbnails-item media my-4">
          <img src={imageUrl} className="mr-3"/>
        <div className="media-body">
          <h5 className="mt-0 mb-1">{video.snippet.title}</h5>
          <p>From Channel: <a href={channelUrl} target="_blank">{video.snippet.channelTitle}</a></p>
        </div>

    </li>
  );
};

export default VideoListItem;
