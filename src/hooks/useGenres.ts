import { generateGenreQuery } from "../utils/query_utils"
import { useQuery } from "@tanstack/react-query"
import dataClient from "../utils/services/dataService"
import { Genre } from "../entities/Genre"

const allGenre = {
    id: 0,
    name: 'All Genres'
}

const useGenres = () => {
    const fetchGenres = () => 
        dataClient.post<Genre[]>('/genres', {query: generateGenreQuery()}).then(res => res.data)

    return useQuery<Genre[], Error>({
        queryKey: ['genres'],
        queryFn: fetchGenres,
    })
}

export default useGenres
export {allGenre}