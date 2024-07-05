import { useQuery } from "@tanstack/react-query"
import apiClient from "../utils/apiService"
import { generateThemeQuery } from "../utils/query_utils"

interface Theme {
    id: number,
    name: string
}

export const useThemes = (themes: number[]) => {
    const themeQuery = generateThemeQuery(themes)

    const fetchThemes = () => {
        return apiClient.post<Theme[]>('/themes', `fields name; where id=${themeQuery}`).then(res => res.data)
    }

    return useQuery<Theme[]>({
        queryKey: ["themes", themeQuery],
        queryFn: fetchThemes
    })
}
