const NEW_TEXT_POST = "NEW_TEXT_POST";
const NEW_VIDEO_POST = "NEW_VIDEO_POST";
const SET_POST_ID = "SET_POST_ID";
const SET_POST_OPEN = "SET_POST_OPEN";

export const newTextPost = (title, body) => {

  return(dispatch){
    dispatch({
      type: NEW_TEXT_POST,

      payload:{
        title: title,
        body: body,

      },

    });

  }

}

export const newVideoPost = (title, url) => {

  return(dispatch){
    dispatch({
      type: NEW_VIDEO_POST,

      payload:{
        title: title,
        url: url,
      },

    });

  }

}

export const setPostId = (newId) => {

  return(dispatch){
    dispatch({
      type: SET_POST_ID,

      payload: {
        id: newId,
      },

    });

  }

}

export const setPostOpen = (open) => {

  return(dispatch){
    dispatch({
      type: SET_POST_OPEN,

      payload:{
        open: open,
      },

    });

  }

}
