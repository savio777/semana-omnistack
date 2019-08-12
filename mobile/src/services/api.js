import axios from 'axios'

const myUrl = '000.000.0.000'
//const myUrl = 'localhost'

const api = axios.create({
    baseURL: `http://${myUrl}:7777`
})

export default api
