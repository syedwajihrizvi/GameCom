import axios from "axios";

export interface FetchResponse<T> {
    count: number
    results: T[]
}

const url = "http://localhost:3000/gamecom/api/users"
const client = axios.create({
    baseURL: url
})

export default client