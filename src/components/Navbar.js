import React from 'react';
import {Link} from 'react-router-dom';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Navbar = ({toDo}) => {
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
