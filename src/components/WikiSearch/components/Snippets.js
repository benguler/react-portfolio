import React, {useState} from 'react';
import Snippet from './Snippet';

import {TextField, Box, Button ,Stack} from '@mui/material/';

const Snippets = ({results, setOpen, setCurResult}) => {

  const returnedResults = results.map((result) =>{
    return(
        <Snippet result={result} setOpen={setOpen} setCurResult={setCurResult}/>
    );

  });

  return(
    <Box>
      {returnedResults}
    </Box>

  );

};

export default Snippets;
