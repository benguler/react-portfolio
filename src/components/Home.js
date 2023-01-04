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
        <Typography variant="h4">
          Page List
        </Typography>


              <Box
                sx={{
                  width: 700,
                  marginTop: 2,
                  textAlign: "justify",
                }}
              >
                <Typography variant="h5">
                  Calculator
                </Typography>

                <Typography variant="body1">
                A simple Calculator widget styled with bootstrap.
                </Typography>

              </Box>

              <Box
                sx={{
                  width: 700,
                  marginTop: 2,
                  textAlign: "justify",
                }}
              >
                <Typography variant="h5">
                  ToDo Tracker
                </Typography>

                <Typography variant="body1">
                A tracker for tasks. Allows user to add, edit, and delete tasks. Styled with Material UI.
                </Typography>

              </Box>

      </Box>

    </div>

  );

};

export default Home;
