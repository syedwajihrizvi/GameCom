import { generateGenreQuery } from "../utils/query_utils"
import { useQuery } from "@tanstack/react-query"
import apiClient from "../utils/apiService"
import { Genre } from "../entities/Genre"

const allGenre = {
    id: 0,
    name: 'All Genres'
}

const useGenres = () => {
    const fetchGenres = () => {
        return apiClient.post<Genre[]>('/genres', generateGenreQuery()).then(res => res.data)
    }
    return useQuery<Genre[], Error>({
        queryKey: ['genres'],
        queryFn: fetchGenres,
    })
}

export default useGenres
export {allGenre}