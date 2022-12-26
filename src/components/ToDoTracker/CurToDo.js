import React from 'react';

const CurToDo = ({toDo}) => {
  return (
    <div>
      <h4>{toDo.title}</h4>
      <p>{toDo.body}</p>
    </div>

  );

};

export default CurToDo;
