import React, {useState} from 'react';

import {TextField, Box, Button ,Stack} from '@mui/material/'

const ToDoForm = ({toDo, edit, setNewEdit, addToDo, editToDo}) => {
  const [ userInputTitle, setUserInputTitle ] = useState(edit? toDo.title : "");
  const [ userInputBody, setUserInputBody ] = useState(edit? toDo.body : "");

  const handleTitleChange = (e) => {
    setUserInputTitle(e.currentTarget.value);

  }

  const handleBodyChange = (e) => {
    setUserInputBody(e.currentTarget.value);

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //If title input
    if(userInputTitle !== ""){
      setNewEdit(false);;

      //New todo
      if(!edit){
        addToDo(userInputTitle, userInputBody);

      //Edit todo if not default todo
      }else if(toDo.id !== -1){
        editToDo(toDo, userInputTitle, userInputBody);

      }

      setUserInputTitle("");
      setUserInputBody("");

    }else{
      alert("Please enter title!");

    }


  }

  return (
    <div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      >
        <Stack spacing={2}>
          <TextField
            id="outlined-basic"
            label="Tite"
            variant="outlined"
            value={userInputTitle}
            onChange={handleTitleChange}
            inputProps={{ maxLength: 48}}
          />

          <TextField
           id="outlined-multiline-flexible"
           label="Body"
           multiline
           maxRows={3}
           value={userInputBody}
           onChange={handleBodyChange}
           inputProps={{ maxLength: 280}}
          />


          <Button type="Submit" variant="outlined">Submit</Button>


        </Stack>

      </Box>

    </div>

  );

};

export default ToDoForm;
