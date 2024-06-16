import { Badge } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"

interface Props {
    game: Game
}
function GameRating({game}: Props) {
    const renderRating = (game: Game) => {
        return Math.round(game.rating) || Math.round(game.total_rating) || Math.round(game.aggregated_rating) || '--'
    }
    return <Badge fontSize='1.2em' borderRadius={10} variant="solid" colorScheme='red'>{renderRating(game)}</Badge>
}

export default GameRating