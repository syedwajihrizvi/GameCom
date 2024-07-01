import { useInfiniteQuery} from "@tanstack/react-query"
import apiClient from "../utils/apiService"
import { generateGameQuery } from "../utils/query_utils"
import useQueryStore from "../stores/useQueryStore"
import { Game } from "../entities/Game"

const useGames = () => {
    const query = useQueryStore()
    const fetchGames = (pageParam: number) => {
        const gameQuery = generateGameQuery(query)
        return apiClient.post<Game[]>('/games', `${gameQuery}offset ${pageParam};`)
        .then(res => res.data)

    }
    const formattedQuery = {
        ...query, 
        gameMode: query.gameMode.name, 
        platform: query.platform.name, 
        sortOption: query.sort?.name
    }
    return useInfiniteQuery<Game[], Error>({
        queryKey: ['games', formattedQuery],
        queryFn: ({pageParam = 1}) => fetchGames(pageParam),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? (allPages.length*9)+1 : undefined
        }
    })
}

export default useGames