import { useInfiniteQuery } from "@tanstack/react-query"
import dataClient from "../utils/services/dataService"
import { generateGameQuery, generateSearchQuery } from "../utils/query_utils"
import useQueryStore from "../stores/useQueryStore"
import { Game } from "../entities/Game"
import { useGlobalContext } from "../providers/global-provider"

export interface InfiniteQueryData<T> {
    data: T[],
    hasMore: boolean
}

const useGames = () => {
    const query = useQueryStore()
    const {user} = useGlobalContext()
    const fetchGames = async (pageParam: number) => {
        let gameQuery = generateGameQuery(query, user, pageParam)
        // Workaround untilt the twerps at IGDB fix their API
        if (query.search) {
            const games = await dataClient.post<Game[]>('/games', {query:generateSearchQuery(query.search)})
                                          .then(res => res.data)
            gameQuery = generateGameQuery(query, user, pageParam, games.map(game => game.id))
        }
        return dataClient.post<Game[]>('/games', {query: gameQuery})
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