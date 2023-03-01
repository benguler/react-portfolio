import React from 'react';
import {Typography, Box} from '@mui/material/';

const Home = () => {
  return (
    <div>
      <Box
        sx={{
          paddingLeft: 5,
          backgroundColor:"#3498DB",
        }}
      >
        <Typography variant="h1">React Portfolio</Typography>

      </Box>

      <Box
        sx={{
          width: 700,
          marginTop: 2,
          marginLeft: 8,
          textAlign: "justify",
        }}
      >
        <Typography variant="body1">
          &nbsp;Welcome to my React Portfolio! My name is Ben Guler and I am a recent graduate of the University of Massachusetts Lowell with a Bachelor's in Computer Science and a minor in Mathematics. This is a Portfolio of my current progress working with the React JS framework. Click the book icon on the bottom right to select a page.
        </Typography>

      </Box>

      <Box
        sx={{
          width: 700,
          marginTop: 2,
          marginLeft: 8,
          textAlign: "left",
        }}
      >
        <Typography variant="h4">Page List</Typography>


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
                A simple Calculator widget. Styled with bootstrap.
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

              <Box
                sx={{
                  width: 700,
                  marginTop: 2,
                  textAlign: "justify",
                }}
              >
                <Typography variant="h5">
                  Videos
                </Typography>

                <Typography variant="body1">
                An application that allows users to search youtube videos. Uses the youtube api and styled with material ui.
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
                  WikiSearch
                </Typography>

                <Typography variant="body1">
                A application that allows users to search wikipedia articles. Uses the wikipedia api and styled with material ui.
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
                  WikiSearch
                </Typography>

                <Typography variant="body1">
                A application that allows users to search wikipedia articles. Uses the wikipedia api and styled with material ui.
                </Typography>

              </Box>

      </Box>

    </div>

  );

};

export default Home;
