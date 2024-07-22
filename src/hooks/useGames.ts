import { useInfiniteQuery } from "@tanstack/react-query"
import apiClient from "../utils/apiService"
import { generateGameQuery } from "../utils/query_utils"
import useQueryStore from "../stores/useQueryStore"
import { Game } from "../entities/Game"
import useUser from "./useUser"

export interface InfiniteQueryData<T> {
    data: T[],
    hasMore: boolean
}

const useGames = () => {
    const query = useQueryStore()
    const {data: user} = useUser()

    const fetchGames = (pageParam: number) => {
        const gameQuery = generateGameQuery(query, user, pageParam)
        return apiClient.post<Game[]>('/games', `${gameQuery}`)
        .then(res => {
            return {data: res.data.slice(0, 8), hasMore: res.data.length > 8}
        })

    }
    const formattedQuery = {
        ...query, 
        gameMode: query.gameMode.name, 
        platform: query.platform.name, 
        sortOption: query.sort?.name
    }
    return useInfiniteQuery<InfiniteQueryData<Game>, Error>({
        queryKey: ['games', formattedQuery],
        queryFn: ({pageParam = 0}) => fetchGames(pageParam),
        getNextPageParam: (lastPage, allPages) => {
            if (query.showOnlyFavorites) {
                console.log(lastPage)
                console.log(`Has More: ${lastPage.hasMore}`)
                console.log((allPages.length*8))
            }
            return lastPage.hasMore ? (allPages.length*8) : undefined
        }
    })
}

export default useGames