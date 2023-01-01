import React, {useState, } from 'react';
import Header from './Header';
import BottomBar from './BottomBar';
import CurToDo from './CurToDo';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

import {Grid, Box} from '@mui/material/';

import styles from '../../css/styles.module.css';

const ToDoTracker = () => {
  const defaultToDo = {"id":-1, "title":"Welcome!", "body":"Select or create a new task to begin.",};

  const [toDoList, setToDoList] = useState([]);
  const [toDo, setToDo] = useState(defaultToDo);
  const [toDoNew, setToDoNew] = useState(false);
  const [toDoEdit, setToDoEdit] = useState(false);

  const addToDo = (userInputTitle, userInputBody) => {
    let copy = [...toDoList];
    copy = [...copy, {id: toDoList.length + 1, title: userInputTitle, body: userInputBody, complete: false}];
    setToDoList(copy);
    setToDo(copy[copy.length-1]);

  }

  const editToDo = (toDoEdit, userInputTitle, userInputBody) => {
    let copy = [...toDoList];
    copy[toDoEdit.id-1].title = userInputTitle;
    copy[toDoEdit.id-1].body = userInputBody;
    setToDoList(copy);

  }

  const removeToDo = (e) => {
    toDo.complete = true;
    setToDo(defaultToDo);

  }

  const setToDoUpdate = (newToDo) => {
    if(!(toDoEdit || toDoNew)){
      setToDo(newToDo)

    }

  }

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Box
            sx = {{
              display:"flex",
              justifyContent:"center",
              padding: 1,
              marginBottom: 1,
              backgroundColor: "#E5E7E9",
            }}
          >
            <Header />
          </Box>

        </Grid>

        <Grid item xs={6}>
          <Box
            sx = {{
              border: 1,
              height: 300,
              width: "auto",
              padding: 1,
              marginLeft: 1,
            }}
          >
            <ToDoList list={toDoList} setToDo={setToDoUpdate}/>
          </Box>

        </Grid>

        <Grid item xs={6}>
          <Box
            sx = {{
              border: 1,
              height: 300,
              width: "auto",
              padding: 1,
              marginLeft: 1,
              marginRight: 1,
            }}
          >
            {(toDoEdit || toDoNew) ?
              <ToDoForm toDo={toDo} edit={toDoEdit} setNewEdit={toDoEdit? setToDoEdit : setToDoNew} addToDo={addToDo} editToDo={editToDo}/>
              :
              <CurToDo toDo={toDo}/>
            }
          </Box>

        </Grid>

        <Grid item xs={12}>
          <Box
            sx = {{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 1,
              marginTop: 1,
              backgroundColor: "#E5E7E9",
            }}
          >
              <BottomBar setNew={setToDoNew} setEdit={setToDoEdit} removeToDo={removeToDo} disable={(toDoEdit || toDoNew)}/>
          </Box>

        </Grid>

      </Grid>

    </div>

  );

};

export default ToDoTracker;
