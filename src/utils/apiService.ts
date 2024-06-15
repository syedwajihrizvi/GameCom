import axios from "axios";
import keys from '../../private/keys'
import { FetchResponse, Genre } from "../hooks/useGenres";

const url = "https://cors-anywhere.herokuapp.com/https://www.giantbomb.com/api"
const logger = (data: FetchResponse<Genre>) => {
    console.log(data)
}
const client = axios.create({
    baseURL: url,
    params: {
        'api_key': keys.giantBombKey,
        'format': 'json',
        'json_callback': logger
    }
})

export default client