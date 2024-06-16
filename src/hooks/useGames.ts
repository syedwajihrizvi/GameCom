import { useQuery } from "@tanstack/react-query"
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

    const fetchGames = () => {
        return apiClient.post<Game[]>('/games', "fields genres,platforms,name,slug,cover,aggregated_rating,rating,total_rating,game_modes; sort hypes desc; limit 8;")
        .then(res => res.data)

    }
    return useQuery<Game[], Error>({
        queryKey: ['games'],
        queryFn: fetchGames
    })
}

export default useGames