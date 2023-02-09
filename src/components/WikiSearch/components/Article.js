import React, {useState, useEffect} from 'react';
import {Dialog, DialogTitle, DialogContent, Typography} from '@mui/material/';

const Article = ({open, curResult, setOpen}) => {

  const [contents, setContents] = useState([]);
  const [error, setError] = useState();

  const articleTitle = (curResult == null)? "Article Title" : curResult.title;

  const url =
    `https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&titles=${articleTitle}`;

  const extractAPIContents = json => {
    console.log(url);
    const { pages } = json.query;
    return Object.keys(pages).map(id => pages[id].extract);

  };

  const getContents = async () => {
    let resp;
    let contents = [];

    try {
      resp = await fetch(url);
      const json = await resp.json();
      contents = extractAPIContents(json);
    } catch (err) {
      setError(err);
    }

    setContents(contents);
  };

  useEffect(() => {
    getContents();
  }, [curResult]);

  return (
    <Dialog open={open} onClose={()=>{setOpen(false)}}>
      <DialogTitle><Typography variant="h4">{articleTitle}</Typography></DialogTitle>

      <DialogContent>
        {contents.map(content => (
          <Typography variant="body1"><span dangerouslySetInnerHTML={{ __html: content }} /></Typography>
        ))}

      </DialogContent>

    </Dialog>
  );

};

export default Article;
