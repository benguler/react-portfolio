import React from 'react';
import {Link} from 'react-router-dom';

import {Button, Stack} from '@mui/material/';

const Navbar = () => {
  
  return (
    <div>
      <Stack direction="row" spacing={1}>
        <Button component={Link} to="/" variant="contained" color="primary">
          Home
        </Button>
        <Button component={Link} to="/calculator" variant="contained" color="primary">
          Calculator
        </Button>
        <Button component={Link} to="/todotracker" variant="contained" color="primary">
          ToDoTracker
        </Button>

      </Stack>

    </div>

  );

};

export default Navbar;
