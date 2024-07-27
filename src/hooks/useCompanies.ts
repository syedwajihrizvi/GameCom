import { useQuery } from "@tanstack/react-query"
import apiClient from "../utils/services/dataService"
import { generateCompanyQuery } from "../utils/query_utils"

interface InvolvedCompany {
    id: number
    company: Company
}

interface Company {
    id: number
    name: string
}

const useCompanies = (involvedCompanies: number[]) => {
    const fetchCompanies = () =>
        apiClient.post<InvolvedCompany[]>('/involved_companies', {query: generateCompanyQuery(involvedCompanies)})
                 .then(res => res.data)

    return useQuery<InvolvedCompany[], Error>({
        queryKey: ['companies', involvedCompanies],
        queryFn:fetchCompanies
    })
}

export default useCompanies