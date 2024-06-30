import { useParams } from "react-router-dom"
import useGameDetails from "../../hooks/useGameDetails"
import { Grid, GridItem, Heading, Text } from "@chakra-ui/react"
import GameVideo from "./GameVideo"

function GameDetails() {
    const {id: gameName} = useParams()
    const {data:gameDetails} = useGameDetails(gameName as string)
    return (
        <Grid 
        templateAreas={`"details media"`}
        templateColumns={{base: '1fr',
                          lg: '950px 1fr'
        }}>
            <GridItem paddingLeft={5}>
                <Heading as='h2' size='3xl'>{gameDetails?.name}</Heading>
                <Text fontSize='2xl'>{gameDetails?.summary}</Text>
            </GridItem>
            <GridItem>
                {gameDetails?.videos && <GameVideo videos={gameDetails.videos}/>}
            </GridItem>
        </Grid>
    )
}

export default GameDetails