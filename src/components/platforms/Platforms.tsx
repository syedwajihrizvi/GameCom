import { HStack, Icon } from "@chakra-ui/react"
import { PlatformIcons } from "../../utils/PlatformIcons"


interface Props {
    platforms: number[]
}

function Platforms({platforms}: Props) {
    return (
        <HStack>
            {platforms.map(platform => 
                PlatformIcons.relevantplatform(platform) && 
                <Icon boxSize={6} as={PlatformIcons.getPlatformIcon(platform)}/>)}
        </HStack>
    )
}

export default Platforms