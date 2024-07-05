import { useQuery } from "@tanstack/react-query"
import apiClient from "../utils/apiService"
import { Platform } from "../entities/Platform"
import { generatePlatformsQuery } from "../utils/query_utils"

export const usePlatforms = (platforms: number[]) => {
    const platformQuery = generatePlatformsQuery(platforms)
    const fetchPlatforms = () => 
        apiClient.post<Platform[]>(
            "/platforms", 
            `fields name; where id = ${platformQuery}`)
            .then(res => res.data)
    
    return useQuery<Platform[], Error>({
        queryKey: ['platforms', platforms],
        queryFn: fetchPlatforms
    })
}