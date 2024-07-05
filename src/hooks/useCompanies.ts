import { useQuery } from "@tanstack/react-query"
import apiClient from "../utils/apiService"
import { generateCompanyQuery } from "../utils/query_utils"

interface InvolvedCompany {
    id: number
}

interface Company {
    name: string
}

const useCompanies = (involvedCompanies: number[]) => {
    const fetchCompanies = () => {
        return apiClient.post<InvolvedCompany[]>('/involved_companies', `fields company; where id=${generateCompanyQuery(involvedCompanies)}`)
        .then(res => {
            const involvedCompanies = res.data.map(involvedCompany=> involvedCompany.id)
            return apiClient.post<Company[]>('/companies', `fields name; where id=${generateCompanyQuery(involvedCompanies)}`).then(res => res.data)
        })
    }

    return useQuery<Company[], Error>({
        queryKey: ['companies', involvedCompanies],
        queryFn:fetchCompanies
    })
}

export default useCompanies