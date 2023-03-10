var postId = 0;

const initialState = {
  posts:[],
  curPostId: 0,
  open: false,

}

const postReducer = (state = initialState, action) => {
  switch(action.type) {
    case "NEW_TEXT_POST":
      postId += 1;

      return {
        ...state,
        posts: [
                ...state.posts,
                {type: "TEXT", id: postId, title: action.payload.title, body: action.payload.body,},
              ],

      }

      case "NEW_VIDEO_POST":
        postId += 1;

        return {
          ...state,
          posts: [
                  ...state.posts,
                  {type: "VIDEO", id: postId, title: action.payload.title, url: action.payload.url,},
                ],

        }

        case "SET_POST_ID":
          return {
            ...state,
            curPostId: action.payload.id,

          }

        case "SET_POST_OPEN":
          return {
            ...state,
            open: action.payload.open,

          }

    default:
      return state;

  }

}

export default postReducer;
