import React, {useState, useEffect} from 'react';
import PostForm from './PostForm';
import PostList from './PostList';
import Post from './Post';
import {Typography, Box, Button ,Stack} from '@mui/material/';

const Poster = () => {

  return(
    <Box
      sx={{

      }}

    >
      <Typography variant="h1">POSTER</Typography>
      <PostForm />
      <PostList />
      <Post />

    </Box>

  );

};

export default Poster;
