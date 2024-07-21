import { useParams } from "react-router-dom"
import useGameDetails from "../../../hooks/useGameDetails"
import { Box, Grid, GridItem, Heading, SimpleGrid, Skeleton} from "@chakra-ui/react"
import GameVideo from "../GameVideo"
import GameImages from "../GameImages"
import ExpandableText from "../../ExpandableText"
import PlatformsList from "./PlatformsList"
import GameModesList from "./GameModesList"
import DevelopersList from "./DevelopersList"
import ThemesList from "./ThemesList"
import GameRating from "../GameRating"
import GameReleaseDate from "./GameReleaseDate"

function GameDetails() {
    const {id: gameName} = useParams()
    const {data:gameDetails, isLoading} = useGameDetails(gameName as string)

    if (isLoading)
        return <Skeleton height="90vh"/>
    return (
        gameDetails &&
        <>
            <Grid>
                <GridItem paddingLeft={3}>
                    <Heading as='h2' size='3xl' fontFamily='sans-serif' paddingBottom={1}>{gameDetails?.name}</Heading>
                    <GameRating fontSize="2.0em" game={gameDetails}/>
                    <GameReleaseDate release_date={gameDetails.first_release_date}/>
                    <Box paddingBottom={5}><ExpandableText summary={gameDetails.summary}/></Box>
                    <SimpleGrid columns={{sm:1, md:2}}>
                        <GridItem>
                            <SimpleGrid columns={{sm: 2, md: 2}} spacingX={20} spacingY={5}>
                                <GridItem>
                                    <PlatformsList platformIds={gameDetails.platforms}/>
                                </GridItem>
                                <GridItem>
                                    <GameModesList gameModeIds={gameDetails.game_modes}/>
                                </GridItem>
                                <GridItem>
                                    <DevelopersList involvedCompanyIds={gameDetails.involved_companies}/>
                                </GridItem>
                                <GridItem>
                                    <ThemesList themeIds={gameDetails?.themes}/>
                                </GridItem>
                            </SimpleGrid>
                            {gameDetails.storyline && 
                                <Box>
                                    <Heading as='h4' size='xl' fontFamily='sans-serif'>Storyline</Heading>
                                    <ExpandableText summary={gameDetails.storyline}/>
                                </Box>
                            }
                        </GridItem>
                        <GridItem display="flex" justifyContent="left">
                            {gameDetails?.videos && <GameVideo videos={gameDetails.videos}/>}
                        </GridItem>
                    </SimpleGrid>
                </GridItem>
            </Grid>
            <GameImages images={gameDetails.screenshots}/>
        </>
    )
}

export default GameDetails