import '../../App.css'
import React, { useState } from "react"
import { Card, CardBody, SimpleGrid, VStack, Image, HStack, Spacer, Skeleton, Container, Button } from "@chakra-ui/react"
import GameImage from "./GameImage"
import defaultPlaceHolder from "../../assets/no-image-placeholder-6f3882e0.webp"
import useGames from "../../hooks/useGames"
import { Game } from "../../entities/Game"
import Platforms from "../platforms/Platforms"
import GameRating from "./GameRating"
import GameModes from "./GameModes"
import GameName from "./GameName"
import InfiniteScroll from "react-infinite-scroll-component"
import InfiniteLoader from "../InfiniteLoader"
import { useNavigate } from 'react-router-dom'
import useQueryStore from '../../stores/useQueryStore'
import FavoriteIcon from './Favorite'
import useUser from '../../hooks/useUser'
import apiClient from '../../utils/userService'

function GameGrid() {
    const {verticalLayout} = useQueryStore()
    const {data:games, isLoading, fetchNextPage, hasNextPage} = useGames()
    const {data: user} = useUser()
    const [previewVideo, setPreviewVideo] = useState(0)
    const cardSkeletons = [1, 2, 3, 4, 5, 6, 7, 8]
    const numberOfGames = games ? games?.pages.reduce((total, currentValue) => total + currentValue.length, 0) : 0
    const navigate = useNavigate()

    const toDetails = (gameSlug: string) => {
        navigate("/games/" + gameSlug)
    }

    const handleFavoriteGame = async (id: number, current_state: boolean) => {
        const result = await apiClient.put(`/${user?.id}`, {"favoriteGames": [String(id)]})
        return result.status
    }

    return (
        <>
            <InfiniteScroll dataLength={numberOfGames} next={fetchNextPage} hasMore={!!hasNextPage} loader=<InfiniteLoader/>>
                <SimpleGrid columns={verticalLayout ? 1 : {sm:1, md:1, lg:2, xl: 3, '2xl': 4}} spacingX={2} spacingY={6} paddingRight={10} paddingLeft="5px" marginTop={5} onMouseLeave={() => setPreviewVideo(0)}>
                    {isLoading && cardSkeletons.map(skeleton =>
                        <Card className={verticalLayout ? 'singleGameCard':'gameCard'}  key={skeleton}>
                            <CardBody key={skeleton+1}>
                                <Skeleton key={skeleton+2}/>
                            </CardBody>
                        </Card>
                    )}
                    {!isLoading && games?.pages.map((page: Game[]) => 
                        <React.Fragment>
                            {page.map(game =>
                                <Card className={verticalLayout ? 'singleGameCard':'gameCard'} _hover={{transform: 'scale(1.05)', transition: 'transform 0.15s ease-in'}} 
                                   key={game.id} onMouseEnter={() => setPreviewVideo(game.id)} onMouseLeave={() => setPreviewVideo(0)} overflow='hidden'>
                                        <VStack>
                                            {game.cover && <GameImage coverId={game.cover} isPreview={game.id == previewVideo} videos={game.videos}/>}
                                            {!game.cover && <Image className="gameImage" src={defaultPlaceHolder} />}
                                            {previewVideo != game.id && <GameName gameName={game.name}/>}
                                            {previewVideo == game.id && <Button width="90%" backgroundColor='red.500' onClick={() => toDetails(game.slug)}>View More</Button>}
                                            <Container>
                                                <HStack>
                                                    <VStack>
                                                        <Container>
                                                            {game.platforms && <Platforms platforms={game.platforms}/>}
                                                            {game.game_modes && <GameModes gameModes={game.game_modes}/>}  
                                                        </Container>
                                                    </VStack>
                                                    <Spacer />
                                                    <HStack>
                                                        <GameRating game={game}/>
                                                        <FavoriteIcon likeFor={game.id} isActive={false} onFavoriteClick={handleFavoriteGame}/>
                                                    </HStack>
                                                </HStack>
                                            </Container>
                                        </VStack>
                                </Card>
                            )}
                        </React.Fragment>
                    )}
                </SimpleGrid>
            </InfiniteScroll>
        </>
    )
}

export default GameGrid