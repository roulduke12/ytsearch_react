import axios from 'axios';

const KEY = 'AIzaSyAEzrIa3KZOsfIqOZsG8l6bUfbUzzm_p1Y';


export default axios.create({
  baseURL:'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 50,
    key: KEY
  }


});
