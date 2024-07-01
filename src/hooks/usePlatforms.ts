import { useQuery } from "@tanstack/react-query"
import apiClient from "../utils/apiService"
import { Platform } from "../entities/Platform"

export const usePlatforms = (platformQuery: string) => {
    
    const fetchPlatforms = () => 
        apiClient.post<Platform[]>(
            "/platforms", 
            `fields name; where id = ${platformQuery}`)
            .then(res => res.data)
    
    return useQuery<Platform[], Error>({
        queryKey: ['platforms'],
        queryFn: fetchPlatforms
    })
}