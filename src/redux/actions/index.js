const NEW_POST = "NEW_POST";

const redux = require('redux');
const createStore = redux.createStore;

const newPost = () => {

  return {
    type: NEW_POST;
    title: "Post title",
    author: "Post author",
    body: "post body",
  }

}

const store = createStore(reducer);
