import  React, {useState} from 'react';

import {TextField, Box} from '@mui/material/'

const SearchBar = ({onFormSubmit}) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    onFormSubmit(term);

  };

  const handleSearchChange = (e) => {
    setTerm(e.currentTarget.value);

  };

  return(
    <div>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Video Search"
          variant="outlined"
          value={term}
          onChange={handleSearchChange}
        />

      </Box>
    </div>

  );

};

export default SearchBar;
