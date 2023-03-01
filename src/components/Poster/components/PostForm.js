import React, {useState, useEffect} from 'react';

import {Typography, Box, Button ,Stack, TextField} from '@mui/material/';

const PostForm = () => {

  const handleTitleChange = (e) => {

  }

  const handleAuthorChange = (e) => {

  }

  const handleBodyChange = (e) => {

  }

  const handleSubmit = (e) => {
    e.preventDefault();

  }

  return(
    <Box
    component="form"
    sx={{
      '& .MuiTextField-root': { m: 1, width: '25ch' },
    }}
    noValidate
    autoComplete="off"
    onSubmit={handleSubmit}
    >
      <Stack spacing={2}>
        <TextField
          id="outlined-basic"
          label="Tite"
          variant="outlined"
          value={""}
          onChange={handleTitleChange}
          inputProps={{ maxLength: 48}}
        />

        <TextField
          id="outlined-basic"
          label="Author"
          variant="outlined"
          value={""}
          onChange={handleAuthorChange}
          inputProps={{ maxLength: 48}}
        />

        <TextField
         id="outlined-multiline-flexible"
         label="Body"
         multiline
         maxRows={3}
         value={""}
         onChange={handleBodyChange}
         inputProps={{ maxLength: 280}}
        />


        <Button type="Submit" variant="outlined">Submit</Button>


      </Stack>

    </Box>

  );

};

export default PostForm;
