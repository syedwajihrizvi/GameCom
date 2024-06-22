import { useQuery } from "@tanstack/react-query"
import apiClient from "../utils/apiService"

export interface GameMode {
    name: string,
    id: number
}

export const useGameModes = () => {

    const fetchGameModes = () => {
        return apiClient.post<GameMode[]>('/game_modes', `fields name; limit 9;`).then(res => res.data)
    }
    return useQuery<GameMode[]>({
        queryKey: ["gameModes"],
        queryFn: fetchGameModes
    })
}