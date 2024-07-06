import { Badge } from "@chakra-ui/react"
import { Game } from "../../entities/Game"
import { GameDetails } from "../../entities/GameDetails"

interface Props {
    game: Game | GameDetails
    fontSize?:string
}
function GameRating({game, fontSize}: Props) {
    const gameRating = Math.round(game.rating) || Math.round(game.total_rating) || Math.round(game.aggregated_rating) || '--'

    const renderRatingColor = () => {
        if (gameRating == '--')
            return 'blue'
        if (gameRating > 80)
            return 'green'
        if (gameRating > 65 && gameRating <= 80)
            return 'yellow'
        if (gameRating > 50 && gameRating <= 65)
            return 'orange'
        return 'red'
    }

    return <Badge fontSize={fontSize ? fontSize : '1.2em'} borderRadius={5} variant="solid" colorScheme={renderRatingColor()}>{gameRating}</Badge>
}

export default GameRating