import React from 'react';
import {Typography, Box} from '@mui/material/';

const Home = () => {
  return (
    <div>
      <Box
        sx={{
          marginLeft: 1,
        }}
      >
        <Typography variant="h1">React Portfolio</Typography>

      </Box>

      <Box
        sx={{
          width: 700,
          marginTop: 2,
          marginLeft: 4,
          textAlign: "justify",
        }}
      >
        <Typography variant="body1">
          &nbsp;Welcome to my React Portfolio! I am a recent graduate of the University of Massachusetts Lowell with a Bachelor's in Computer Science with a minor in Mathematics. This is a Portfolio of my current progress working with the React JS framework. Click the book icon on the bottom right to select a page.
        </Typography>

      </Box>

      <Box
        sx={{
          width: 700,
          marginTop: 2,
          marginLeft: 4,
          textAlign: "left",
        }}
      >
        <Typography variant="h5">
          Page List
        </Typography>

      </Box>

    </div>

  );

};

export default Home;
