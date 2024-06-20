import { useQuery } from "@tanstack/react-query"
import apiClient from "../utils/apiService"

export interface Platforms {
    id: number
    name: string
}

export const usePlatforms = (platformQuery: string) => {
    
    const fetchPlatforms = () => 
        apiClient.post<Platforms[]>(
            "/platforms", 
            `fields name; where id = ${platformQuery}`)
            .then(res => res.data)
    
    return useQuery<Platforms[], Error>({
        queryKey: ['platforms'],
        queryFn: fetchPlatforms
    })
}