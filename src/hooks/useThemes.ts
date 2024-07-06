import { useQuery } from "@tanstack/react-query"
import apiClient from "../utils/apiService"
import { generateThemeQuery } from "../utils/query_utils"

interface Theme {
    id: number,
    name: string
}

export const useThemes = (themes: number[]) => {

    const fetchThemes = () => {
        return apiClient.post<Theme[]>('/themes', `fields name; ${generateThemeQuery(themes)} limit 100;`).then(res => res.data)
    }

    return useQuery<Theme[]>({
        queryKey: ["themes", themes],
        queryFn: fetchThemes
    })
}
