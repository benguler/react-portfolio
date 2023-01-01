import React from 'react';
import {Typography} from '@mui/material/';

const CurToDo = ({toDo}) => {
  return (
    <div>
      <Typography variant="h5">{toDo.title}</Typography>
      <Typography variant="body1">{toDo.body}</Typography>
    </div>

  );

};

export default CurToDo;
