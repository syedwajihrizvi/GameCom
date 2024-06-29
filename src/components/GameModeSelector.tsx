/* eslint-disable react-refresh/only-export-components */
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { useGameModes } from "../hooks/useGameModes"
import useQueryStore from "../stores/useQueryStore"

const allGameModes = {
    name: "All Game Modes",
    id: 0
}

function GameModeSelector() {
    const {gameMode: currentGameMode, handleGameMode} = useQueryStore()
    let {data:gameModes} = useGameModes()

    gameModes = [allGameModes, ...(gameModes ? gameModes:[])]
    return (
        <div className='menuList'>
        <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                {currentGameMode.name}
            </MenuButton>
            <MenuList>
                {gameModes.map(gameMode => 
                    gameMode.id != currentGameMode.id && 
                    <MenuItem onClick={() => handleGameMode(gameMode)} key={gameMode.id}>{gameMode.name}</MenuItem>)}
            </MenuList>
        </Menu>
    </div>       
    )
}

export default GameModeSelector
export {allGameModes}