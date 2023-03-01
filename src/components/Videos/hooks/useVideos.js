import {useState, useEffect} from 'react';
import youtube from '../api/youtube';

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);

  }, []);

  //Get list of videos based on search term using youtube api
  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      }

    });

    setVideos(response.data.items);


  };

  return [videos, search];
};

export default useVideos;
