import { Grid, GridItem, HStack} from "@chakra-ui/react"
import FilterHeading from "./FilterHeading"
import GameGrid from "./games/GameGrid"
import GameModeSelector from "./games/GameModeSelector"
import OrderSelector from "./selectors/OrderSelector"
import PlatformSelector from "./platforms/PlatformSelector"
import SideBar from "./SideBar"
import SortSelector from "./selectors/SortSelector"
import useQueryStore from "../stores/useQueryStore"

function Home() {
    const {genre, platform, gameMode, sort} = useQueryStore()
    return (
        <Grid
        templateAreas={`"nav main"`}
        templateColumns={{base: '1fr',
                          md: '300px 1fr',
                          lg: '200px 1fr'
                        }}>
            <GridItem area={'nav'}>
              <SideBar/>
            </GridItem>
            <GridItem pl='2'area={'main'}>
              {(genre.id != 0 || platform.id != 0 || gameMode.id != 0) && 
              <FilterHeading />}
              <HStack>
                <GameModeSelector/>
                <PlatformSelector/>
                <SortSelector/>
                {sort && <OrderSelector/>}
              </HStack>
              <GameGrid/>
            </GridItem>
          </Grid>
    )
}

export default Home