import React, {useState} from 'react';

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

    if(userInputTitle !== ""){
      setNewEdit(false);;

      if(!edit){
        addToDo(userInputTitle, userInputBody);

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
      <form onSubmit={handleSubmit}>
        <label>Title:</label>
        <br/>
        <input
          value={userInputTitle}
          type="text" name="title"
          placeholder="Enter title..."
          onChange={handleTitleChange}/>
        <br/>
        <label>Body:</label>
        <br/>
        <textarea
          value={userInputBody}
          type="text" name="body"
          placeholder="Enter body..."
          onChange={handleBodyChange}
          rows={5}
          cols={21}
        />

        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>

  );

};

export default ToDoForm;
