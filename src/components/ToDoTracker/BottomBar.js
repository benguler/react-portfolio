import React from 'react';

import {Button, Stack} from '@mui/material/';

const BottomBar = ({setNew, setEdit, removeToDo, dis}) => {
  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" onClick={() => {setNew(true)}} disabled={dis}>Create</Button>
        <Button variant="contained" onClick={() => {setEdit(true)}} disabled={dis}>Edit</Button>
        <Button variant="contained" onClick={removeToDo} disabled={dis}>Remove</Button>
      </Stack>
    </div>

  );

};

export default BottomBar;
