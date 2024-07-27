import { GameDetails } from "../entities/GameDetails";
import dataClient from '../utils/services/dataService'
import { useQuery } from "@tanstack/react-query"
import { generateGameDetailQuery } from "../utils/query_utils";

const useGameDetails = (gameName: string) => {
    const fetchGameDetails = () =>
        dataClient.post<GameDetails[]>('/games', {query:generateGameDetailQuery(gameName)}).then(res => res.data[0])
    return useQuery<GameDetails, Error>({
        queryKey: ['gameDetails', gameName],
        queryFn: fetchGameDetails
    })
}

export default useGameDetails