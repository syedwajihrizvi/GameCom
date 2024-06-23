import axios from "axios";
import keys from '../../private/keys'

export interface FetchResponse<T> {
    count: number
    results: T[]
}

const heroku_development_url = "http://localhost:8080/"
const url = `${heroku_development_url}https://bipn930cal.execute-api.us-west-2.amazonaws.com/production/v4`
const client = axios.create({
    baseURL: url,
    headers: {
        'x-api-key': keys.awsKey,
    }
})

export default client