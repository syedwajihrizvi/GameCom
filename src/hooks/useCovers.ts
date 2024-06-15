import { useQuery } from '@tanstack/react-query';
import apiClient from '../utils/apiService'

interface Cover {
    image_id: string
}

const useCovers = (coverID : number | undefined) => {
    const fetchCovers = () => {
        return apiClient.post<Cover[]>('/covers', `fields image_id; where id = ${coverID};`).then(res => res.data[0])
    }
    return useQuery<Cover, Error>({
        queryKey: ['covers', coverID],
        queryFn: fetchCovers
    })
}

export default useCovers