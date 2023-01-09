import React from 'react';

import {Typography, Box} from '@mui/material/';

const VideoDetail = ({video}) => {
  const styles = {
    videoItem: {
      display: "flex !important",
      alignItems: "center !important",
      cursor: "pointer",
    }

  };

  if(!video){
      return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return(
    <Box>
    <iframe title={styles.videoItem} src={videoSrc} />
    <Typography variant="h5">{video.snippet.title}</Typography>
    <Typography variant="body1">{video.snippet.description}</Typography>
    </Box>

  );

}

export default VideoDetail;
