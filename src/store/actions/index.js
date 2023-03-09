const NEW_POST = "NEW_POST";

export const newPost = (title, author, body) => {

  return(dispatch){
    dispatch({
      type: NEW_POST,

      payload:{
        title: "Post title",
        author: "Post author",
        body: "post body",
      }
      
    });
  }

}
