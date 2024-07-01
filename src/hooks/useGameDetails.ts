import { useQuery } from "@tanstack/react-query"
import apiService from '../utils/apiService'
import { GameDetails } from "../entities/GameDetails";

const useGameDetails = (gameName: string) => {
    const fetchGameDetails = () => {
        return apiService.post<GameDetails[]>('/games', `fields name,summary,videos,screenshots;where slug="${gameName}";`).then(res => res.data[0])
    }
    return useQuery<GameDetails>({
        queryKey: ['games', gameName],
        queryFn: fetchGameDetails
    })
}

export default useGameDetails