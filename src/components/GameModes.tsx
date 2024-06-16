import { HStack, Icon } from "@chakra-ui/react";
import { GameModeIcons } from "../utils/GameModeIcons";

interface Props {
    gameModes: number[]
}
function GameModes({gameModes}: Props) {
    return (
        <HStack>
            {gameModes.map(mode => <Icon boxSize={10} color='red.300' as={GameModeIcons.getGameModeIcon(mode)}/>)}
        </HStack>
    )
}

export default GameModes