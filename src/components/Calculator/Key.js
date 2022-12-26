import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Key = ({value, handleClick}) =>{
  const w = (value == '=') ? 320 : 80;

  return(
    <div>
      <Button variant="outline-secondary"
              style = {{width: w, height: 80}}
              onClick={e => handleClick(value)}>{value}</Button>{' '}
    </div>

  );

}

export default Key;
