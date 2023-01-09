import React from 'react';

import {Typography, Box} from '@mui/material/';

const VideoItem = ({video, onVideoSelect}) => {
  return(
    <Box onClick={() => onVideoSelect(video)}>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
      <Typography variant="body1">{video.snippet.title}</Typography>
    </Box>
  );

}

export default VideoItem;
