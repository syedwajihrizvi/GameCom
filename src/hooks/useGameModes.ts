import { useQuery } from "@tanstack/react-query"
import apiClient from "../utils/apiService"
import { GameMode } from "../entities/GameMode"

export const useGameModes = () => {

    const fetchGameModes = () => {
        return apiClient.post<GameMode[]>('/game_modes', `fields name; limit 9;`).then(res => res.data)
    }
    return useQuery<GameMode[]>({
        queryKey: ["gameModes"],
        queryFn: fetchGameModes
    })
}