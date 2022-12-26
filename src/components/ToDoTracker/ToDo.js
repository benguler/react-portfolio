import React from 'react';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

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
