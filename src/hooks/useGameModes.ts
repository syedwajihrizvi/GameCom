import { useQuery } from "@tanstack/react-query"
import apiClient from "../utils/apiService"
import { GameMode } from "../entities/GameMode"
import { generateGameModeQuery } from "../utils/query_utils"

export const useGameModes = (gameModeIds: number[] = []) => {

    const fetchGameModes = () => {
        return apiClient.post<GameMode[]>('/game_modes', generateGameModeQuery(gameModeIds))
        .then(res => res.data)
    }
    return useQuery<GameMode[]>({
        queryKey: ["gameModes"],
        queryFn: fetchGameModes
    })
}