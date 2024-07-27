import { useQuery } from "@tanstack/react-query"
import apiClient from "../utils/apiService"
import { generateCompanyQuery } from "../utils/query_utils"

interface InvolvedCompany {
    id: number
    company: number
}

interface Company {
    name: string
}

const useCompanies = (involvedCompanies: number[]) => {
    const fetchCompanies = () => {
        return apiClient.post<InvolvedCompany[]>('/involved_companies', `
        fields company; ${generateCompanyQuery(involvedCompanies)} limit 100;`)
        .then(res => {
            const involvedCompanies = res.data.map(involvedCompany=> involvedCompany.company)
            return apiClient.post<Company[]>('/companies', 
            `fields name; ${generateCompanyQuery(involvedCompanies)} limit 100;`)
            .then(res => res.data)
        })
    }

    return useQuery<Company[], Error>({
        queryKey: ['companies', involvedCompanies],
        queryFn:fetchCompanies
    })
}

export default useCompanies