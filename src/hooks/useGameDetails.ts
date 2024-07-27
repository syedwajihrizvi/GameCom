import { GameDetails } from "../entities/GameDetails";
import apiService from '../utils/apiService'
import { useQuery } from "@tanstack/react-query"
import { generateGameDetailQuery } from "../utils/query_utils";

const useGameDetails = (gameName: string) => {
    const fetchGameDetails = () => {
        return apiService.post<GameDetails[]>(
            '/games', generateGameDetailQuery(gameName))
            .then(res => res.data[0])
    }
    return useQuery<GameDetails, Error>({
        queryKey: ['gameDetails', gameName],
        queryFn: fetchGameDetails
    })
}

export default useGameDetails