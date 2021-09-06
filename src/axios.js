import axios from 'axios';

const instance= axios.create({
    baseURL: "https://tiktok-mern-abhishek.herokuapp.com/",
});

export default instance;