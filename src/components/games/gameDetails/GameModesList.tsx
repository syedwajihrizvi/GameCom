import { Skeleton } from "@chakra-ui/react"
import { useGameModes } from "../../../hooks/useGameModes"
import SpecificDetails, { Detail } from "../../SpecificDetails"

interface Props {
    gameModeIds: number[]
}

function GameModesList({gameModeIds}: Props) {
    const {data, isLoading}= useGameModes(gameModeIds)

    return (
        <>
            {isLoading && <Skeleton height='40px'/>}
            {!isLoading && <SpecificDetails heading="Game Modes" details={data as Detail[]}/>}
        </>
    )
}

export default GameModesList