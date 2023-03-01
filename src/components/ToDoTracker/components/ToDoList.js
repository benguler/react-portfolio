import React from 'react';
import ToDo from './ToDo';

import {List, ListItem, ListItemButton, ListItemText} from '@mui/material/';

const ToDoList = ({list, setToDo}) => {
  return (
    <div>
      <List
        sx={{
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 290,
        '& ul': { padding: 0 },
      }}
      subheader={<li />}

      >
        {list.map(toDo => {
          if(!toDo.complete){
              return (<ToDo toDo={toDo} setToDo={setToDo}/>);
          }
        })}

      </List>
    </div>

  );

};

export default ToDoList;
