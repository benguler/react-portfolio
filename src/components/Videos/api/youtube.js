import axios from 'axios';

const KEY = 'AIzaSyC2Ev4dLQteb_qqpkPJZrtYClr8gFD6cYY';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 10,
    key: KEY,
  }

});
