import { useQuery } from "@tanstack/react-query"
import dataClient from "../utils/services/dataService"
import { generateThemeQuery } from "../utils/query_utils"

interface Theme {
    id: number,
    name: string
}

export const useThemes = (themes: number[]) => {

    const fetchThemes = () =>
        dataClient.post<Theme[]>('/themes', {query:generateThemeQuery(themes)}).then(res => res.data)

    return useQuery<Theme[]>({
        queryKey: ["themes", themes],
        queryFn: fetchThemes
    })
}
