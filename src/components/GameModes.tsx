import { HStack, Icon } from "@chakra-ui/react";
import { GameModeIcons } from "../utils/GameModeIcons";

interface Props {
    gameModes: number[]
}
function GameModes({gameModes}: Props) {
    return (
        <HStack>
            {gameModes.map(mode => 
            <Icon marginTop={1} boxSize={6} as={GameModeIcons.getGameModeIcon(mode)}/>)}
        </HStack>
    )
}

export default GameModes