import React, {useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import LoadMore from './LoadMore';

import useVideos from '../hooks/useVideos';

import {Typography, Box} from '@mui/material/';

const App =()=>{
  const[selectedVideo, setSelectedVideo] = useState(null);
  const[displayCount, setDisplayCount] = useState(5);

  const[videos, search] = useVideos('');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return(
    <Box>
      <SearchBar onFormSubmit={search} setDisplayCount={setDisplayCount}/>
      <VideoDetail video={selectedVideo} />
      <VideoList onVideoSelect={(video) => setSelectedVideo(video)} videos={videos.slice(0, displayCount)}/>
      <LoadMore displayCount={displayCount} setDisplayCount={setDisplayCount}/>
    </Box>

  );

}

export default App;
