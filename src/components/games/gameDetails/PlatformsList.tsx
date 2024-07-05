import { Skeleton } from "@chakra-ui/react"
import { usePlatforms } from "../../../hooks/usePlatforms"
import SpecificDetails, { Detail } from "../../SpecificDetails"

interface Props {
    platformIds: number[]
}

function PlatformsList({platformIds}: Props) {
    const {data, isLoading} = usePlatforms(platformIds)
    
    return (
        <>
            {isLoading && <Skeleton height='40px'/>}
            {!isLoading && <SpecificDetails heading="Platforms" details={data as Detail[]}/>}
        </>
    )
}

export default PlatformsList