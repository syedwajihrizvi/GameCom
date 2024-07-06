import { HStack, Icon } from "@chakra-ui/react"
import { PlatformIcons } from "../../utils/PlatformIcons"

interface Props {
    platforms: number[]
}

function Platforms({platforms}: Props) {
    const filterIcons = (platformIcons: number[]) => {
        const releventPlatforms = platformIcons.filter(platform => PlatformIcons.relevantplatform(platform))
        const icons = releventPlatforms.map(platform => PlatformIcons.getPlatformIcon(platform)) 
        return Array.from(new Set(icons));  
    }
    const icons = filterIcons(platforms)
    return (
        <HStack>
            {icons.map(icon => 
                <Icon key={icon?.toString()} boxSize={6} as={icon}/>)}
        </HStack>
    )
}

export default Platforms