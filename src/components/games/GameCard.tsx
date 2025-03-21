import { Card, VStack, Button, Container, Box, Spacer, Image } from "@chakra-ui/react"
import useQueryStore from "../../stores/useQueryStore"
import Platforms from "../platforms/Platforms"
import FavoriteIcon from "./Favorite"
import GameImage from "./GameImage"
import GameModes from "./GameModes"
import GameName from "./GameName"
import GameRating from "./GameRating"
import { Game } from "../../entities/Game"
import defaultPlaceHolder from "../../assets/no-image-placeholder-6f3882e0.webp"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { useQueryClient } from "@tanstack/react-query"
import apiClient from "../../utils/services/userService"
import { useGlobalContext } from "../../providers/global-provider"

interface Props {
    game: Game
}

function GameCard({game}:Props) {
    const queryClient = useQueryClient()
    const {verticalLayout} = useQueryStore()
    const {isLoggedIn, user} = useGlobalContext()
    const [showPreview, setShowPreview] = useState(false)
    const navigate = useNavigate()

    const handleFavoriteGame = async (current_state: boolean) => {
        if (current_state == true) {
            const result = await apiClient.put(`/${user?.id}`, {"-favoriteGames": [String(game.id)]})
            if (result.status == 200) {
                queryClient.invalidateQueries(["me"])
            }
            return result.status
        }
        const result = await apiClient.put(`/${user?.id}`, {"favoriteGames": [String(game.id)]})
        if (result.status == 200) {
            queryClient.invalidateQueries(["me"])
        }
        return result.status
    }

    return (
        <Card className={verticalLayout ? 'singleGameCard':'gameCard'} 
            _hover={{transform: 'scale(1.05)', transition: 'transform 0.15s ease-in'}} 
            key={game.id} onMouseEnter={() => setShowPreview(true)} onMouseLeave={() => setShowPreview(false)} overflow='hidden' boxShadow="0 4px 12px rgba(0, 0, 0, 0.15)">
            <VStack>
                {game.cover && <GameImage cover={game.cover} showPreview={showPreview} videos={game.videos}/>}
                {!game.cover && <Image className="gameImage" src={defaultPlaceHolder} />}
                {!showPreview  && <GameName gameName={game.name}/>}
                {showPreview && <Button width="90%" backgroundColor='red.500' onClick={() => navigate(game.slug)}>View More</Button>}
                <Box display='flex' width='100%' padding="0 10px">
                    <VStack>
                        <Container>
                            {game.platforms && <Platforms platforms={game.platforms}/>}
                            {game.game_modes && <GameModes gameModes={game.game_modes}/>}  
                        </Container>
                    </VStack>
                    <Spacer />
                    <VStack>
                        <GameRating game={game}/>
                        {isLoggedIn && <FavoriteIcon likeFor={game.id} 
                                                     isActive={user && user.favoriteGames ? user.favoriteGames.includes(String(game.id)): false} 
                                                     onFavoriteClick={handleFavoriteGame}/>}
                    </VStack>
                </Box>
            </VStack>
        </Card>
    )
}

export default GameCard