import { useParams } from "react-router-dom"
import useGameDetails from "../../hooks/useGameDetails"
import { Grid, GridItem, Heading, Skeleton, Stack, Text} from "@chakra-ui/react"
import GameVideo from "./GameVideo"
import GameImages from "./GameImages"

function GameDetails() {
    const {id: gameName} = useParams()
    const {data:gameDetails, isLoading} = useGameDetails(gameName as string)
    return (
        <>
            <Grid 
            templateAreas={`"details media"`}
            templateColumns={{base: '1fr',
                            lg: '950px 1fr'
            }}>
                <GridItem paddingLeft={5}>
                    {!isLoading &&
                    <>
                        <Heading as='h2' size='3xl'>{gameDetails?.name}</Heading>
                        <Text fontSize='2xl'>{gameDetails?.summary}</Text>
                    </>}
                    {isLoading && 
                    <Stack>
                    <Skeleton height='80px' />
                    <Skeleton height='80px' />
                    <Skeleton height='80px' />
                  </Stack>
                    }
                </GridItem>
                <GridItem>
                    {gameDetails?.videos && <GameVideo videos={gameDetails.videos}/>}
                </GridItem>
            </Grid>
            {gameDetails?.screenshots && <GameImages images={gameDetails?.screenshots}/>}
        </>
    )
}

export default GameDetails