import axios from "axios";

const url = "http://localhost:3000/gamecom/data"
const jwtPrivateKey = localStorage.getItem('x-auth-token')

const client = axios.create({
    baseURL: url,
    headers: {
        'x-auth-token': jwtPrivateKey,
    }
})

export default client