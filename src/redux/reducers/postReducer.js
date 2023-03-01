

const initialState = {
  title: "",
  author: "",
  body: "",
}

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case "NEW_POST":
      return {
        ...state,


      }

      default:
        return state;

  }

}

export default postReducer;
