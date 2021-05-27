import axios from 'axios'

const instance = axios.create({
    baseURL://'https://us-central1-clone-22f24.cloudfunctions.net/api'
    'http://127.0.0.1:5001/clone-22f24/us-central1/api' // The api (cloud function) url
});
export default instance