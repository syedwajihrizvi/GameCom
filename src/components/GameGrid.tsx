import { Card, CardBody, SimpleGrid, VStack, Image, HStack, Spacer, Skeleton, Container, background } from "@chakra-ui/react"
import GameImage from "./GameImage"
import defaultPlaceHolder from "../assets/no-image-placeholder-6f3882e0.webp"
import useGames from "../hooks/useGames"
import Platforms from "./Platforms"
import GameRating from "./GameRating"
import GameModes from "./GameModes"
import GameName from "./GameName"

function GameGrid() {
    const {data:games, isLoading} = useGames()
    const cardSkeletons = [1, 2, 3, 4, 5, 6, 7, 8]

    return (
        <SimpleGrid paddingLeft={4} spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
            {isLoading && cardSkeletons.map(skeleton =>
                <Card borderRadius={10} width='400px' height='600px' key={skeleton}>
                    <CardBody>
                        <Skeleton />
                    </CardBody>
                </Card>
            )}
            {!isLoading && games?.map(game => 
            <Card _hover={{background:"red.300", cursor: 'pointer', height: '720px', width: '420px'}} borderRadius={10} width='400px' height='700px' key={game.id} overflow='hidden'>
                <CardBody>
                    <VStack>
                        {game.cover && <GameImage coverId={game.cover}/>}
                        {!game.cover && <Image objectFit='cover' src={defaultPlaceHolder}/>}
                        <GameName gameName={game.name}/>  
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
                </CardBody>
            </Card>)}
        </SimpleGrid>
    )
}

export default GameGrid