import React, {useState, useEffect} from 'react';
import PostLink from './PostLink';
import {useSelector} from 'react-redux';
import {Typography, Box, Button ,Stack} from '@mui/material/';

const PostList = () => {

  const posts = useSelector((state) => state.posts);

  return(
    <div>
      {posts.posts.map((post) => {
        return (<PostLink postContent={post}/>);
      })}
    </div>

  );

};

export default PostList;
