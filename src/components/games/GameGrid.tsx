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

function GameGrid() {
    const {data:games, isLoading, fetchNextPage, hasNextPage} = useGames()
    const [previewVideo, setPreviewVideo] = useState(0)
    const cardSkeletons = [1, 2, 3, 4, 5, 6, 7, 8]
    const numberOfGames = games ? games?.pages.reduce((total, currentValue) => total + currentValue.length, 0) : 0
    const navigate = useNavigate()
    const toDetails = (gameSlug: string) => {
        navigate("/games/" + gameSlug)
    }
    return (
        <>
            <InfiniteScroll dataLength={numberOfGames} next={fetchNextPage} hasMore={!!hasNextPage} loader=<InfiniteLoader/>>
                <SimpleGrid columns={{sm:1, md:1, lg:2, xl: 3, '2xl': 4}} spacingX={2} spacingY={6} padding={10}>
                    {isLoading && cardSkeletons.map(skeleton =>
                        <Card className='gameCard' key={skeleton}>
                            <CardBody key={skeleton+1}>
                                <Skeleton key={skeleton+2}/>
                            </CardBody>
                        </Card>
                    )}
                    {!isLoading && games?.pages.map((page: Game[]) => 
                        <React.Fragment>
                            {page.map(game =>
                                <Card className='gameCard' _hover={{transform: 'scale(1.05)', transition: 'transform 0.15s ease-in'}} 
                                   key={game.id} onMouseEnter={() => setPreviewVideo(game.id)} onMouseLeave={() => setPreviewVideo(0)} overflow='hidden'>
                                        <VStack>
                                            {game.cover && <GameImage coverId={game.cover} isPreview={game.id == previewVideo} videos={game.videos}/>}
                                            {!game.cover && <Image className="gameImage" src={defaultPlaceHolder} />}
                                            {previewVideo != game.id && <GameName gameName={game.name}/>}
                                            {previewVideo == game.id && <Button width="90%" backgroundColor='red.500' onClick={() => toDetails(game.slug)}>View More</Button>}
                                            <Container>
                                                <HStack>
                                                    <VStack paddingTop={5}>
                                                        <Container>
                                                            {game.platforms && <Platforms platforms={game.platforms}/>}
                                                            {game.game_modes && <GameModes gameModes={game.game_modes}/>}  
                                                        </Container>
                                                    </VStack>
                                                    <Spacer />
                                                    <GameRating game={game}/>
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