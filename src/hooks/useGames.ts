import { useInfiniteQuery } from "@tanstack/react-query"
import apiClient from "../utils/apiService"
import { generateGameQuery, generateSearchQuery } from "../utils/query_utils"
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

    const fetchGames = async (pageParam: number) => {
        let gameQuery = generateGameQuery(query, user, pageParam)
        if (query.search) {
            const games = await apiClient.post<Game[]>('/games', `${generateSearchQuery(query.search)}`).then(res => res.data)
            const gameIDs = games.map(game => game.id)
            gameQuery = generateGameQuery(query, user, pageParam, gameIDs)
        }
        console.log(gameQuery)
        return apiClient.post<Game[]>('/games', `${gameQuery}`)
        .then(res => {
            return {data: res.data.slice(0, 24), hasMore: res.data.length > 24}
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
            return lastPage.hasMore ? (allPages.length*24) : undefined
        }
    })
}

export default useGames