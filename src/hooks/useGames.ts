import { useInfiniteQuery} from "@tanstack/react-query"
import apiClient from "../utils/apiService"
import { generateGameQuery } from "../utils/query_utils"

export interface Game {
    id: number,
    name: string,
    cover: number | undefined
    image_url: string | undefined,
    platforms: number[],
    aggregated_rating: number
    rating: number
    total_rating: number
    game_modes: number[]
}

const useGames = (query: string) => {

    const fetchGames = (pageParam: number) => {
        const gameQuery = generateGameQuery({search: query})
        return apiClient.post<Game[]>('/games', `${gameQuery}offset ${pageParam};`)
        .then(res => res.data)

    }
    return useInfiniteQuery<Game[], Error>({
        queryKey: ['games', query],
        queryFn: ({pageParam = 1}) => fetchGames(pageParam),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? (allPages.length*9)+1 : undefined
        }
    })
}

export default useGames