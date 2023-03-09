import React, {useState, useEffect} from 'react';

import {Typography, Box, Button ,Stack} from '@mui/material/';

const Post = ({postContent}) => {

  return(
    <Box
      sx={{
        marginTop: 2,
      }}

    >
      <Typography>{postContent.title}</Typography>
      <Typography>{postContent.author}</Typography>
      <Typography>{postContent.body}</Typography>

    </Box>

  );

};

export default Post;
