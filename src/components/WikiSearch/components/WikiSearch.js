import React, {useState, useEffect} from 'react';
import Search from './Search';
import Snippets from './Snippets';
import Article from './Article';

import {Typography, Box, Button ,Stack} from '@mui/material/';

const WikiSearch = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);
  const [open, setOpen] = useState(false);
  const [curResult, setCurResult] = useState(null);

  return(
    <Box>
      <Typography variant="h4">Wiki-Search</Typography>
      <Search term={term} setTerm={setTerm} setResults={setResults}/>
      <Snippets results={results} setOpen={setOpen} setCurResult={setCurResult}/>
      <Article open={open} setOpen={setOpen} curResult={curResult}/>

    </Box>

  );

};

export default WikiSearch;
