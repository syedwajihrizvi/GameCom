import SpecificDetails, { Detail } from "../../common/SpecificDetails"
import useCompanies from "../../../hooks/useCompanies"

interface Props {
    involvedCompanyIds: number[]
}

function DevelopersList({involvedCompanyIds}:Props) {
    const {data} = useCompanies(involvedCompanyIds)
    const companies = data?.map(involved_company => involved_company.company)
    return <SpecificDetails heading="Companies Involved" details={companies as Detail[]}/>
}

export default DevelopersList