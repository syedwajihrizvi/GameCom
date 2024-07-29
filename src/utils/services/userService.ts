import axios from "axios";
const url = import.meta.env.PROD ? 
            "https://protected-chamber-12422-c8b311f333a4.herokuapp.com/gamecom/api/users" : 
            "http://localhost:3000/gamecom/api/users"
const client = axios.create({
    baseURL: url
})

export default client