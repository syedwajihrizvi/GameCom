import { Skeleton } from "@chakra-ui/react"
import { useThemes } from "../../../hooks/useThemes"
import SpecificDetails, { Detail } from "../../SpecificDetails"

interface Props {
    themeIds: number[]
}

function ThemesList({themeIds}: Props) {
    const {data, isLoading} = useThemes(themeIds)
    return (
        <>
            {isLoading && <Skeleton height='40px'/>}
            {!isLoading && <SpecificDetails heading="Themes" details={data as Detail[]}/>}
        </>
    )
}

export default ThemesList