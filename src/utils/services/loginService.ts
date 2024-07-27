import axios from "axios"

const url = "http://localhost:3000/gamecom/login"
const client = axios.create({
    baseURL: url
})

export default client