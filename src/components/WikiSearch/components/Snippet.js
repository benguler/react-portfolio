import React, {useState} from 'react';

import {Box, Button, Typography} from '@mui/material/';

const Snippet = ({result, setOpen, setCurResult}) => {

  const onPreview = (result) =>{
    setOpen(true);
    setCurResult(result);
  }

  return(
    <Box
      sx={{
        backgroundColor: "#E2EEFB",
        margin: 1,
        padding: 1,
        width: 700,
      }}
    >
      <Typography variant="h4">{result.title}</Typography>
      <Typography variant="body1"><span dangerouslySetInnerHTML={{__html: result.snippet}} /></Typography>
      <Typography variant="body1">...</Typography>

      <Button variant="text" onClick={()=>{onPreview(result)}}>Preview</Button>
      <Button variant="text" href={`https://en.wikipedia.org?curid=${result.pageid}`}>Go</Button>

    </Box>

  );

};

export default Snippet;
