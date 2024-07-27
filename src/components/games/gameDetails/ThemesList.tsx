import { useThemes } from "../../../hooks/useThemes"
import SpecificDetails, { Detail } from "../../common/SpecificDetails"

interface Props {
    themeIds: number[]
}

function ThemesList({themeIds}: Props) {
    const {data} = useThemes(themeIds)
    return <SpecificDetails heading="Themes" details={data as Detail[]}/>}

export default ThemesList