import { usePlatforms } from "../../../hooks/usePlatforms"
import SpecificDetails, { Detail } from "../../common/SpecificDetails"

interface Props {
    platformIds: number[] | undefined
}

function PlatformsList({platformIds}: Props) {
    const {data} = usePlatforms(platformIds ? platformIds : [])
    
    return <SpecificDetails heading="Platforms" details={data as Detail[]}/>
}

export default PlatformsList