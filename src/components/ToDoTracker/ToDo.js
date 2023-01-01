import React from 'react';

import {ListItem, ListItemButton, ListItemText} from '@mui/material/';

const ToDo = ({toDo, setToDo}) => {
  return (
    <div>
      <ListItem disablePadding>
        <ListItemButton onClick={() => (setToDo(toDo))}>
          <ListItemText primary={toDo.title}/>
        </ListItemButton>
      </ListItem>
    </div>

  );

};

export default ToDo;
