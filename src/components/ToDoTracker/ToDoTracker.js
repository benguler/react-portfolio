import React, {useState, } from 'react';
import Header from './Header';
import BottomBar from './BottomBar';
import CurToDo from './CurToDo';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

import Grid from '@mui/material/Grid';

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

  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <div className={styles.Header}>
            <Header />
          </div>

        </Grid>

        <Grid item xs={6}>
          <div className={styles.ToDoList}>
            <ToDoList list={toDoList} setToDo={setToDo}/>
          </div>

        </Grid>

        <Grid item xs={6}>
          <div className={styles.FormCurToDo}>
            {(toDoEdit || toDoNew) ?
              <ToDoForm toDo={toDo} edit={toDoEdit} setNewEdit={toDoEdit? setToDoEdit : setToDoNew} addToDo={addToDo} editToDo={editToDo}/>
              :
              <CurToDo toDo={toDo}/>
            }
          </div>

        </Grid>

        <Grid item xs={12}>
          <div className={styles.BottomBar}>
              <BottomBar setNew={setToDoNew} setEdit={setToDoEdit} removeToDo={removeToDo} dis={(toDoEdit || toDoNew)}/>
          </div>

        </Grid>

      </Grid>

    </div>

  );

};

export default ToDoTracker;
