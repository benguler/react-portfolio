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

  if(posts.curPostId!=0){
    return(
      <Dialog open={posts.open} onClose={()=>{closeDialog()}}>
        <DialogTitle><Typography variant="h4">{}</Typography></DialogTitle>
          <Typography>{posts.posts[(posts.curPostId-1)].title}</Typography>
          <Typography>{posts.posts[(posts.curPostId-1)].body}</Typography>
        <DialogContent>

        </DialogContent>

      </Dialog>
    );

  } else {
    return (<div></div>)

  }

}

export default Post;
