import React from 'react';

import {Button, Stack} from '@mui/material/';

const BottomBar = ({setNew, setEdit, removeToDo, disable}) => {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => {setNew(true)}} disabled={disable}>Create</Button>
        <Button variant="contained" onClick={() => {setEdit(true)}} disabled={disable}>Edit</Button>
        <Button variant="contained" onClick={removeToDo} disabled={disable}>Remove</Button>
      </Stack>
    </div>

  );

};

export default BottomBar;
