import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'ec5782cbc602381ddeeedd23dcf585b9',
    language: 'ko-KR',
  },
});

export default instance;
