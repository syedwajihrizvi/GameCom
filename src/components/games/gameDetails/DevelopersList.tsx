import { Skeleton } from "@chakra-ui/react"
import SpecificDetails, { Detail } from "../../SpecificDetails"
import useCompanies from "../../../hooks/useCompanies"

interface Props {
    involvedCompanyIds: number[]
}

function DevelopersList({involvedCompanyIds}:Props) {
    const {data, isLoading} = useCompanies(involvedCompanyIds)

    return (
        <>
            {isLoading && <Skeleton height='40px'/>}
            {!isLoading && <SpecificDetails heading="Companies Involved" details={data as Detail[]}/>}
        </>
    )
}

export default DevelopersList