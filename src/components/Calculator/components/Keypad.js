import React, {useState} from 'react';
import Key from './Key'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';

const Keypad = ({handleNum, handleDec, handleOp, handleEq, handleClr}) =>{

  return(
    <div>
      <Stack>
        <ButtonGroup>
          <Key value={7} handleClick={handleNum}/>
          <Key value={8} handleClick={handleNum}/>
          <Key value={9} handleClick={handleNum}/>
          <Key value='+' handleClick={handleOp}/>
        </ButtonGroup>

        <ButtonGroup>
          <Key value={4} handleClick={handleNum}/>
          <Key value={5} handleClick={handleNum}/>
          <Key value={6} handleClick={handleNum}/>
          <Key value='-' handleClick={handleOp}/>
        </ButtonGroup>

        <ButtonGroup>
          <Key value={1} handleClick={handleNum}/>
          <Key value={2} handleClick={handleNum}/>
          <Key value={3} handleClick={handleNum}/>
          <Key value='*' handleClick={handleOp}/>
        </ButtonGroup>

        <ButtonGroup>
          <Key value='C' handleClick={handleClr}/>
          <Key value={0} handleClick={handleNum}/>
          <Key value='.' handleClick={handleDec}/>
          <Key value='/' handleClick={handleOp}/>
        </ButtonGroup>

        <ButtonGroup>
          <Key value='=' handleClick={handleEq}/>
        </ButtonGroup>
      </Stack>
    </div>

  );

}

export default Keypad;
