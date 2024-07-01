import { useQuery } from "@tanstack/react-query"
import apiService from "../utils/apiService"
import { generateImageQuery } from "../utils/query_utils"

interface GameScreenShots {
    image_id: string
}

const useGameScreenshots = (image_ids: [number]) => {
    const fetchScreenshots = () => {
        return apiService.post<GameScreenShots[]>(
            "/screenshots", 
            `fields image_id; where id=${generateImageQuery(image_ids)}`)
        .then(res => res.data)
    }

    return useQuery<GameScreenShots[]>({
        queryKey: ['screenshots'],
        queryFn: fetchScreenshots
    })
}

export default useGameScreenshots