import { useQuery } from "@tanstack/react-query"
import dataClient from "../utils/services/dataService"
import { GameMode } from "../entities/GameMode"
import { generateGameModeQuery } from "../utils/query_utils"

export const useGameModes = (gameModeIds: number[] = []) => {

    const fetchGameModes = () =>
        dataClient.post<GameMode[]>('/gameModes', {query:generateGameModeQuery(gameModeIds)}).then(res => res.data)
    return useQuery<GameMode[]>({
        queryKey: ["gameModes"],
        queryFn: fetchGameModes
    })
}