import axios from "axios";
import keys from '../../private/keys'

export interface FetchResponse<T> {
    count: number
    results: T[]
}

const corsAnywhereProxy = "http://localhost:8080"
const api = "https://bipn930cal.execute-api.us-west-2.amazonaws.com/production/v4"
const url = `${corsAnywhereProxy}/${api}`
const client = axios.create({
    baseURL: url,
    headers: {
        'x-api-key': keys.awsKey,
    }
})

export default client