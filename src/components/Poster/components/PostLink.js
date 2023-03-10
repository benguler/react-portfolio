import React, {useState, useEffect} from 'react';
import {Typography, Box, Button ,Stack} from '@mui/material/';
import {useDispatch} from 'react-redux';

const PostLink = ({postContent}) => {

  const dispatch = useDispatch();

  const setPostId = () => {
    dispatch(
        {
        type: "SET_POST_ID",

        payload:{
          id: postContent.id,

        }

      },

    );

  }

  const setPostOpen = () => {
    dispatch(
      {
        type: "SET_POST_OPEN",

        payload:{
          open: true,

        }

      }

    );

  }

  const openDialog = () =>{
    setPostId();
    setPostOpen();

  }

  return(
    <Box
      sx={{
        marginTop: 2,
        backgroundColor: "lightgray",
      }}

    >
      <Typography>{postContent.title}</Typography>
      <Button onClick={openDialog}>Open Post</Button>

    </Box>

  );

};

export default PostLink;
