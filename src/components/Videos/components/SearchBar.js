import  React, {useState} from 'react';

import {TextField, Box} from '@mui/material/'

const SearchBar = ({onFormSubmit, setDisplayCount}) => {
  const [term, setTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    //Reset display count
    setDisplayCount(5);

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
          label=""
          variant="outlined"
          value={term}
          onChange={handleSearchChange}
          fullWidth
        />

      </Box>
    </div>

  );

};

export default SearchBar;
