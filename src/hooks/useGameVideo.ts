import { useQuery } from "@tanstack/react-query"
import apiService from "../utils/apiService"
import { GameVideo } from "../entities/GameVideo"
import { generateVideoQuery } from "../utils/query_utils"

const useGameVideo = (videoIds: number[]) => {
    const fetchGameVideo = () => {
        return apiService.post<GameVideo[]>('/game_videos', `fields video_id;${generateVideoQuery(videoIds)} limit 100;`)
        .then(res => res.data)
    }
    return useQuery<GameVideo[]>({
        queryKey: ['video', videoIds],
        queryFn: fetchGameVideo
    })
}

export default useGameVideo