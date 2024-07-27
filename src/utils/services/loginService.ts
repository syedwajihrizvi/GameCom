import axios from "axios"

const url = "https://protected-chamber-12422-c8b311f333a4.herokuapp.com/gamecom/login"
const client = axios.create({
    baseURL: url
})

export default client