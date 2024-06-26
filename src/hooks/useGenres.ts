import { useQuery } from "@tanstack/react-query"
import apiClient from "../utils/apiService"

export interface Genre {
    id: number
    name: string,
}

const allGenre = {
    id: 0,
    name: 'All Genres'
}

const useGenres = () => {
    const fetchGenres = () => {
        return apiClient.post<Genre[]>('/genres', "fields name,slug; limit 30;").then(res => res.data)
    }
    return useQuery<Genre[], Error>({
        queryKey: ['genres'],
        queryFn: fetchGenres,
    })
}

export default useGenres
export {allGenre}