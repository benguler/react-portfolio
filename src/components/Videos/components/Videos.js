import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import LoadMore from './LoadMore';

import useVideos from '../hooks/useVideos';

import {Typography, Box} from '@mui/material/';

const App =()=>{
  const[selectedVideo, setSelectedVideo] = useState(null);
  const[videos, search] = useVideos('react javascript');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return(
    <Box>
      <SearchBar onFormSubmit={search} />
      <VideoDetail video={selectedVideo} />
      <VideoList onVideoSelect={(video) => setSelectedVideo(video)} videos={videos} />
      <LoadMore />
    </Box>

  );

}

export default App;
