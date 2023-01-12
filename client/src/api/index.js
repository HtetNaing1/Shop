import axios from 'axios';

const url = 'https://shopmenubackend.onrender.com/';

export const fetchPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);