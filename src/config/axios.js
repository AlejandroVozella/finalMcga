import axios from 'axios';

const axiosClient = axios.create({
    baseURL: 'https://final-mcga-alejandrovozella.herokuapp.com/'
}) 



// const axiosClient = axios.create({
//     baseURL: 'https://app-finalmcga.herokuapp.com/'
// }) 

export default axiosClient;