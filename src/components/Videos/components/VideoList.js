import React from 'react';
import VideoItem from './VideoItem'

import {Typography, Box} from '@mui/material/';

const VideoList = ({videos, onVideoSelect}) => {
  let count = 0;

  const renderedList = videos.map((video) => {
    return(
      <Box
        sx={{
          marginTop: 3,
          padding: 1,
          backgroundColor:"#F2F3F4",
        }}
        >
        <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video = {video}/>
      </Box>
    );

  });

  return(
    <Box>
      {renderedList}
    </Box>

  );
};

export default VideoList;
