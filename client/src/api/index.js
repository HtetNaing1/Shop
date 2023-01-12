import axios from 'axios';

const API = axios.create({ baseURL: 'https://shopmenubackend.onrender.com/'});

export const fetchPosts = () => API.get('/posts');

export const createPost = (newPost) => API.post('/posts', newPost);