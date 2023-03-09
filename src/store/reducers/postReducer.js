const initialState = {
  posts:[]

}

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case "NEW_POST":
      return {
        ...state,
        posts: [
                ...state.posts,
                {title: action.payload.title, author: action.payload.author, body: action.payload.body,},
              ],

      }

    default:
      return state;

  }

}

export default postReducer;
