import axios from 'axios'

const instance = axios.create({
    baseURL:'...' // The api (cloud function) url
});
export default instance