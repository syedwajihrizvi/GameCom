import { useQuery } from "@tanstack/react-query"
import apiClient from "../utils/apiService"

export interface Platform {
    id: number
    name: string
}

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