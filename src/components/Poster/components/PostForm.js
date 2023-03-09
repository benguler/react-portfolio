import React, {useState, useEffect} from 'react';

import {Typography, Box, Button ,Stack, TextField} from '@mui/material/';

import {useDispatch} from 'react-redux';

const PostForm = () => {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "NEW_POST",

      payload:{
        title: title,
        author: author,
        body: body,
      }
    })

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
      <TextField
        id="outlined-basic"
        label=""
        variant="outlined"
        inputProps={{ maxLength: 48}}
        value = {title}
        onChange = {(e) => {setTitle(e.currentTarget.value)}}
      />
      <br/>

      <TextField
        id="outlined-basic"
        label=""
        variant="outlined"
        inputProps={{ maxLength: 48}}
        value = {author}
        onChange = {(e) => {setAuthor(e.currentTarget.value)}}
      />
      <br/>

      <TextField
       id="outlined-multiline-flexible"
       label=""
       multiline
       maxRows={3}
       inputProps={{ maxLength: 280}}
       value = {body}
       onChange = {(e) => {setBody(e.currentTarget.value)}}
      />
      <br/>

      <Button type="Submit" variant="outlined">Submit</Button>

    </Box>

  );

};

export default PostForm;
