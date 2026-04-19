import axios from 'axios'

const baseURL = "https://k305jhbh09.execute-api.ap-southeast-1.amazonaws.com/"

const api = axios.create({
    baseURL: baseURL
})

export default api