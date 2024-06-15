import { Card, CardBody, SimpleGrid, VStack, Heading, Image } from "@chakra-ui/react"
import GameImage from "./GameImage"
import defaultPlaceHolder from "../assets/no-image-placeholder-6f3882e0.webp"
import useGames from "../hooks/useGames"

function GameGrid() {
    const {data:games} = useGames()
    return (
        <SimpleGrid paddingLeft={4} spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
            {games?.map(game => 
            <Card borderRadius={10} width='400px' key={game.id} overflow='hidden'>
                <CardBody>
                    <VStack>
                        {game.cover && <GameImage coverId={game.cover}/>}
                        {!game.cover && <Image objectFit='cover' src={defaultPlaceHolder}/>}
                        <Heading>{game.name}</Heading>
                    </VStack>
                </CardBody>
            </Card>)}
        </SimpleGrid>
    )
}

export default GameGrid