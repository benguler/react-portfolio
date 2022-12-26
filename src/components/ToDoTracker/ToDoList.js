import React from 'react';
import ToDo from './ToDo';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const ToDoList = ({list, setToDo}) => {
  return (
    <div>
      <List
        sx={{
        paddingLeft: "50px",
        bgcolor: 'background.paper',
        position: 'relative',
        overflow: 'auto',
        maxHeight: 300,
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
