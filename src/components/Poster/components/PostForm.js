import React, {useState, useEffect} from 'react';
import {Typography, Box, Button ,Stack, FormControl, FormControlLabel, TextField, Radio, RadioGroup} from '@mui/material/';
import {useDispatch} from 'react-redux';

const PostForm = () => {

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [body, setBody] = useState("");
  const [postType, setPostType] = useState("TEXT");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    switch (postType) {
      case "TEXT":
        newTextPost();
        break;

      case "VIDEO":
        newVideoPost();
        break;

      default:
        break;

    }

  }

  const newTextPost = () => {
    dispatch({
      type: "NEW_TEXT_POST",

      payload:{
        title: title,
        body: body,
      }

    });

  }

  const newVideoPost = () => {
    dispatch({
      type: "NEW_VIDEO_POST",

      payload:{
        title: title,
        url: url,
      }

    });

  }

  const bodyOrUrl = () => {
    switch(postType){
      case "TEXT":
        return(
          <TextField
           id="outlined-multiline-flexible"
           label=""
           multiline
           maxRows={3}
           inputProps={{ maxLength: 280}}
           value = {body}
           onChange = {(e) => {setBody(e.currentTarget.value)}}
          />

        );

      case "VIDEO":
        return(
          <TextField
           id="outlined-multiline-flexible"
           label=""
           multiline
           maxRows={3}
           inputProps={{ maxLength: 280}}
           value = {body}
           onChange = {(e) => {setUrl(e.currentTarget.value)}}
          />

        );

      default:
        return(
          <div></div>

        );

    }

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
      <FormControl id="demo-controlled-radio-buttons-group">
        <RadioGroup
          aria-labelledby="demo-controlled-radio-buttons-group"
          name="controlled-radio-buttons-group"
          value={postType}
          onChange={(e) => {setPostType(e.currentTarget.value)}}
        >
          <FormControlLabel value="TEXT" control={<Radio />} label="Text" />
          <FormControlLabel value="VIDEO" control={<Radio />} label="Video" />
        </RadioGroup>

        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          inputProps={{ maxLength: 48}}
          value = {title}
          onChange = {(e) => {setTitle(e.currentTarget.value)}}
        />
        <br/>
        {bodyOrUrl()}

        <br/>

        <Button type="Submit" variant="outlined">Submit</Button>

      </FormControl>

    </Box>

  );

};

export default PostForm;
