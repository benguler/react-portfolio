import React, {useState, useEffect} from 'react';
import {Dialog, DialogTitle, DialogContent, Typography} from '@mui/material/';
import {useSelector, useDispatch} from 'react-redux';

const Post = ({}) =>{

  const posts = useSelector((state) => state.posts);

  const dispatch = useDispatch();

  const closeDialog = () =>{
    dispatch(
      {
        type:"SET_POST_OPEN",

        payload:{
          open: false,

        }

      }

    )

  }

    const textOrVideo = () => {
      switch(posts.posts[(posts.curPostId-1)].type){
        case "TEXT":
          return(
            <div>
              <Typography>{posts.posts[(posts.curPostId-1)].body}</Typography>
            </div>

          );

        case "VIDEO":
          return(
            <div>
              <iframe title="video" src={posts.posts[(posts.curPostId-1)].url} height="480" width="854" />
            </div>

          );

        default:
          return(
            <div></div>

          );

      }

    }

  if(posts.curPostId!=0){
    return(
      <Dialog open={posts.open} onClose={()=>{closeDialog()}}>
        <DialogTitle><Typography variant="h4">{posts.posts[(posts.curPostId-1)].title}</Typography></DialogTitle>

        <DialogContent>
          {textOrVideo()}
        </DialogContent>

      </Dialog>
    );

  } else {
    return (<div></div>)

  }

}

export default Post;
