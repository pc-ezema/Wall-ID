import axios from 'axios';

axios.defaults.baseURL = 'https://wall.victornwadinobi.com/api/';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');