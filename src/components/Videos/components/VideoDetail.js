import React from 'react';

import {Typography, Box} from '@mui/material/';

const VideoDetail = ({video}) => {

  if(!video){
      return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return(
    <Box>
      <iframe title="video" src={videoSrc} height="480" width="854"/>
      <Box
        sx={{
          backgroundColor:"#F2F3F4",
          padding: 1,
          width: 854
        }}
      >
        <Typography variant="h5">{video.snippet.title}</Typography>
        <Typography variant="body1">{video.snippet.description}</Typography>
      </Box>

    </Box>

  );

}

export default VideoDetail;
