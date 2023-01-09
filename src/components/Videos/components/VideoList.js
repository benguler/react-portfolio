import React from 'react';
import VideoItem from './VideoItem'

import {Typography, Box} from '@mui/material/';

const VideoList = ({videos, onVideoSelect}) => {
  const renderedList = videos.map((video) => {
    return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video = {video}/>

  });

  return(
    <Box>
      {renderedList}
    </Box>

  );
};

export default VideoList;
