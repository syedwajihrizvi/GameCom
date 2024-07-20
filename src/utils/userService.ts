import axios from "axios";

const url = "http://localhost:3000/gamecom/api/users"
const client = axios.create({
    baseURL: url
})

export default client