import { useQuery } from "@tanstack/react-query"
import apiClient from "../utils/apiService"

export interface FetchResponse<T> {
    count: number
    results: T[]
}
export interface Genre {
    id: number
    name: string
}

const useGenres = () => {

    const fetchGenres = () => {
        return apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data)
    }
    return useQuery<FetchResponse<Genre>, Error>({
        queryKey: ['genres'],
        queryFn: fetchGenres,
        retry: false
    })
}

export default useGenres