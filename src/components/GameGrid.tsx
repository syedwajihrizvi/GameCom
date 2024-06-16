import { Card, CardBody, SimpleGrid, VStack, Heading, Image, HStack, Spacer, Skeleton } from "@chakra-ui/react"
import GameImage from "./GameImage"
import defaultPlaceHolder from "../assets/no-image-placeholder-6f3882e0.webp"
import useGames from "../hooks/useGames"
import Platforms from "./Platforms"
import GameRating from "./GameRating"

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
            <Card borderRadius={10} width='400px' key={game.id} overflow='hidden'>
                <CardBody>
                    <VStack>
                        {game.cover && <GameImage coverId={game.cover}/>}
                        {!game.cover && <Image objectFit='cover' src={defaultPlaceHolder}/>}
                        <Heading>{game.name}</Heading>
                        <HStack>
                            {game.platforms && <Platforms platforms={game.platforms}/>}
                            <Spacer/>
                            <Spacer/>
                            <GameRating game={game}/>
                        </HStack>
                    </VStack>
                </CardBody>
            </Card>)}
        </SimpleGrid>
    )
}

export default GameGrid