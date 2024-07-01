import { useQuery } from "@tanstack/react-query"
import apiService from "../utils/apiService"
import { GameVideo } from "../entities/GameVideo"

const useGameVideo = (videoIds: [number]) => {
    const videoId = videoIds[0]
    console.log("VIDEO ID: " + videoId)
    const fetchGameVideo = () => {
        return apiService.post<GameVideo[]>('/game_videos', `fields video_id;where id=${videoId};`)
        .then(res => res.data[0])
    }
    return useQuery<GameVideo>({
        queryKey: ['video', videoId],
        queryFn: fetchGameVideo
    })
}

export default useGameVideo