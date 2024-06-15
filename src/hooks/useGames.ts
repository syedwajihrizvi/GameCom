import { useQuery } from "@tanstack/react-query"
import apiClient from "../utils/apiService"

interface Game {
    id: number,
    name: string,
    cover: number | undefined
    image_url: string | undefined,
}

const useGames = () => {

    const fetchGames = () => {
        return apiClient.post<Game[]>('/games', "fields genres,platforms,name,slug,cover,aggregated_rating; sort aggregated_rating desc; limit 30;").then(res => res.data)

    }
    return useQuery<Game[], Error>({
        queryKey: ['games'],
        queryFn: fetchGames
    })
}

export default useGames