import axios from "axios";
 
const url = import.meta.env.PROD ? 
            "https://protected-chamber-12422-c8b311f333a4.herokuapp.com/gamecom/data" : 
            "http://localhost:3000/gamecom/data"
const jwtPrivateKey = localStorage.getItem('x-auth-token')

const client = axios.create({
    baseURL: url,
    headers: {
        'x-auth-token': jwtPrivateKey,
    }
})

export default client