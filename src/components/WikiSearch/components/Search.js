import React, {useState} from 'react';
import axios from 'axios';

import {TextField, Box, Button ,Stack} from '@mui/material/';

const Search = ({term, setTerm, setResults}) => {

  const handleInputChange = (e) => {
    setTerm(e.currentTarget.value);

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
        params:{
          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,
        }

      });

    setResults(data.query.search);

  }

  return(
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          onChange = {handleInputChange}
          inputProps={{
            maxLength: 100,
          }}

          style={{
            width:400,
          }}
      />

      <Button
        type="Submit"
        variant="outlined"
        style={{
          height:60,
          marginLeft: 5,
        }}
        >
        Search
      </Button>

    </Box>

  );

};

export default Search;
