import { useParams } from "react-router-dom"
import useGameDetails from "../../../hooks/useGameDetails"
import { Box, Grid, GridItem, Heading, SimpleGrid} from "@chakra-ui/react"
import GameVideo from "../GameVideo"
import GameImages from "../GameImages"
import ExpandableText from "../../ExpandableText"
import PlatformsList from "./PlatformsList"
import GameModesList from "./GameModesList"
import DevelopersList from "./DevelopersList"
import ThemesList from "./ThemesList"
import GameRating from "../GameRating"

function GameDetails() {
    const {id: gameName} = useParams()
    const {data:gameDetails} = useGameDetails(gameName as string)

    return (
        gameDetails &&
        <>
            <Grid 
            templateAreas={`"details media"`}
            templateColumns={{base: '1fr',
                            lg: '800px 0.75fr'
            }}>
                <GridItem paddingLeft={3}>
                    <Heading as='h2' size='3xl' fontFamily='sans-serif' paddingBottom={2}>{gameDetails?.name}</Heading>
                    {gameDetails && <GameRating fontSize="2.0em" game={gameDetails}/>}
                    {gameDetails && <Box><ExpandableText summary={gameDetails.summary}/></Box>}
                    <SimpleGrid columns={2} spacingX={80} spacingY={5} paddingTop={5}>
                        <GridItem>
                            <PlatformsList platformIds={gameDetails.platforms}/>
                            <GameModesList gameModeIds={gameDetails.game_modes}/>
                        </GridItem>
                        <GridItem>
                            <DevelopersList involvedCompanyIds={gameDetails.involved_companies}/>
                            <ThemesList themeIds={gameDetails?.themes}/>
                        </GridItem>
                    </SimpleGrid>
                    {gameDetails.storyline && 
                    <Box paddingTop={2}>
                        <Heading as='h4' size='xl' fontFamily='sans-serif'>Storyline</Heading>
                        <ExpandableText summary={gameDetails.storyline}/>
                    </Box>
                    }
                </GridItem>
                <GridItem>
                    {gameDetails?.videos && <GameVideo videos={gameDetails.videos}/>}
                </GridItem>
            </Grid>
            <GameImages images={gameDetails.screenshots}/>
        </>
    )
}

export default GameDetails