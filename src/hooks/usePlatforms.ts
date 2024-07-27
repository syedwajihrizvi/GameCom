import { useQuery } from "@tanstack/react-query"
import dataClient from "../utils/services/dataService"
import { Platform } from "../entities/Platform"
import { generatePlatformsQuery } from "../utils/query_utils"

export const usePlatforms = (platforms: number[]) => {
    const fetchPlatforms = () => 
        dataClient.post<Platform[]>("/platforms", {query:generatePlatformsQuery(platforms)}).then(res => res.data)
    
    return useQuery<Platform[], Error>({
        queryKey: ['platforms', platforms],
        queryFn: fetchPlatforms
    })
}