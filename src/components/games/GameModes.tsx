import { HStack, Icon } from "@chakra-ui/react";
import { GameModeIcons } from "../../utils/GameModeIcons";

interface Props {
    gameModes: number[]
}
function GameModes({gameModes}: Props) {
    const filterGameModes = (gameModes: number[]) => {
        const modes = gameModes.map(gameMode => GameModeIcons.getGameModeIcon(gameMode))
        return Array.from(new Set(modes));
    }
    const modes = filterGameModes(gameModes)
    return (
        <HStack>
            {modes.map((mode, index) => 
            <Icon key={index} marginTop={1} boxSize={6} as={mode}/>)}
        </HStack>
    )
}

export default GameModes