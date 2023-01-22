import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import LoadMore from './LoadMore';

import useVideos from '../hooks/useVideos';

import {Typography, Box, Grid} from '@mui/material/';

const App =()=>{
  const[selectedVideo, setSelectedVideo] = useState(null);
  const[displayCount, setDisplayCount] = useState(5);

  const[videos, search] = useVideos('');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return(
    <Box
      sx={{
        marginLeft: 5,
      }}
    >
      <Grid container>
        <Grid item xs={6} md={6}>
          <Box
            sx={{
              width:500,
            }}
          >
            <Typography variant="h1">VIDEOS</Typography>
            <SearchBar onFormSubmit={search} setDisplayCount={setDisplayCount}/>
          </Box>

          <Box
            sx={{
              marginTop: 3,
            }}
          >
            <VideoDetail video={selectedVideo} />
          </Box>

        </Grid>

        <Grid item xs={6} md={6}>

          <Box
            sx={{
              marginTop: 28,
              width:330,
            }}
          >
            <VideoList onVideoSelect={(video) => setSelectedVideo(video)} videos={videos.slice(0, displayCount)}/>
          </Box>

          <Box
            sx={{
              marginTop: 3,
              marginBottom: 3,
              width:330,
            }}
          >
            <LoadMore displayCount={displayCount} setDisplayCount={setDisplayCount}/>
          </Box>

        </Grid>

      </Grid>

    </Box>
  );

}

export default App;
