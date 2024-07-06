import SpecificDetails, { Detail } from "../../SpecificDetails"
import useCompanies from "../../../hooks/useCompanies"

interface Props {
    involvedCompanyIds: number[]
}

function DevelopersList({involvedCompanyIds}:Props) {
    const {data} = useCompanies(involvedCompanyIds)

    return <SpecificDetails heading="Companies Involved" details={data as Detail[]}/>
}

export default DevelopersList