import { useInfiniteQuery} from "@tanstack/react-query"
import apiClient from "../utils/apiService"

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

const useGames = () => {

    const fetchGames = (pageParam: number) => {
        console.log('Page Param: ' + pageParam)
        return apiClient.post<Game[]>('/games', `fields genres,platforms,name,slug,cover,aggregated_rating,rating,total_rating,game_modes; sort hypes desc; limit 9; offset ${pageParam};`)
        .then(res => res.data)

    }
    return useInfiniteQuery<Game[], Error>({
        queryKey: ['games'],
        queryFn: ({pageParam = 1}) => fetchGames(pageParam),
        getNextPageParam: (lastPage, allPages) => {
            return lastPage.length > 0 ? (allPages.length*9)+1 : undefined
        }
    })
}

export default useGames