import { useParams } from "react-router-dom"
import useGameDetails from "../../../hooks/useGameDetails"
import { Box, Grid, GridItem, Heading, SimpleGrid, Skeleton, Stack} from "@chakra-ui/react"
import GameVideo from "../GameVideo"
import GameImages from "../GameImages"
import ExpandableText from "../../ExpandableText"
import PlatformsList from "./PlatformsList"
import GameModesList from "./GameModesList"
import DevelopersList from "./DevelopersList"
import ThemesList from "./ThemesList"

function GameDetails() {
    const {id: gameName} = useParams()
    const {data:gameDetails, isLoading} = useGameDetails(gameName as string)
    return (
        <>
            <Grid 
            templateAreas={`"details media"`}
            templateColumns={{base: '1fr',
                            lg: '800px 0.75fr'
            }}>
                <GridItem paddingLeft={3}>
                    {!isLoading &&
                    <>
                        <Heading as='h2' size='3xl' fontFamily='sans-serif'>{gameDetails?.name}</Heading>
                        {gameDetails && <ExpandableText summary={gameDetails.summary}/>}
                    </>
                    }
                    {isLoading && 
                    <Stack>
                        <Skeleton height='80px' />
                        <Skeleton height='80px' />
                        <Skeleton height='80px' />
                    </Stack>
                    }
                    <SimpleGrid columns={2} spacingX={80} spacingY={5} paddingTop={5}>
                        <PlatformsList platformIds={gameDetails ? gameDetails.platforms : []}/>
                        <GameModesList gameModeIds={gameDetails ? gameDetails.platforms : []}/>
                        <DevelopersList involvedCompanyIds={gameDetails ? gameDetails.involved_companies : []}/>
                        <ThemesList themeIds={gameDetails ? gameDetails.themes : []}/>
                    </SimpleGrid>
                    {!isLoading &&
                    <Box paddingTop={2}>
                        <Heading as='h4' size='xl' fontFamily='sans-serif'>Storyline</Heading>
                        {gameDetails && <ExpandableText summary={gameDetails.storyline}/>}
                    </Box>
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