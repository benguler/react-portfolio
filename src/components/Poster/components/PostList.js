import React, {useState, useEffect} from 'react';

import Post from './Post';

import {Typography, Box, Button ,Stack} from '@mui/material/';

import {useSelector} from 'react-redux';

const PostList = () => {

  const posts = useSelector((state) => state.posts);

  return(
    <div>
      {posts.posts.map((post) => {
        return (<Post postContent={post}/>);
      })}
    </div>

  );

};

export default PostList;
