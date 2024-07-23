import { useQuery } from "@tanstack/react-query"
import apiService from '../utils/apiService'
import { GameDetails } from "../entities/GameDetails";

const useGameDetails = (gameName: string) => {
    const fetchGameDetails = () => {
        return apiService.post<GameDetails[]>(
            '/games', 
            `query games "Game" {fields name,summary,involved_companies,platforms,game_modes,themes,storyline,aggregated_rating,rating,total_rating,first_release_date,videos.video_id,screenshots.image_id;where slug="${gameName}";};`).then(res => res.data[0])
    }
    return useQuery<GameDetails, Error>({
        queryKey: ['gameDetails', gameName],
        queryFn: fetchGameDetails
    })
}

export default useGameDetails