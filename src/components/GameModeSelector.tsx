/* eslint-disable react-refresh/only-export-components */
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { GameMode, useGameModes } from "../hooks/useGameModes"

const allGameModes = {
    name: "All Game Modes",
    id: 0
}

interface Props {
    onGameModeSelect : (gameMode: GameMode) => void
    currentGameMode: GameMode
}

function GameModeSelector({onGameModeSelect, currentGameMode}: Props) {
    let {data:gameModes} = useGameModes()

    gameModes = [allGameModes, ...(gameModes ? gameModes:[])]
    return (
        <div className='platformsMenu'>
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {currentGameMode.name}
            </MenuButton>
            <MenuList>
                {gameModes.map(gameMode => 
                    gameMode.id != currentGameMode.id && 
                    <MenuItem onClick={() => onGameModeSelect(gameMode)} key={gameMode.id}>{gameMode.name}</MenuItem>)}
            </MenuList>
        </Menu>
    </div>       
    )
}

export default GameModeSelector
export {allGameModes}