import { useGameModes } from "../../../hooks/useGameModes"
import SpecificDetails, { Detail } from "../../SpecificDetails"

interface Props {
    gameModeIds: number[] | undefined
}

function GameModesList({gameModeIds}: Props) {
    const {data}= useGameModes(gameModeIds)

    return <SpecificDetails heading="Game Modes" details={data as Detail[]}/>
}

export default GameModesList