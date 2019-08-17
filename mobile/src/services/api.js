import axios from 'axios'

const myUrl = 'localhost'

const api = axios.create({
    baseURL: `http://${myUrl}:7777`
})

export default api
