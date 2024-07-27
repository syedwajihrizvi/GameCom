import { Text, Grid, GridItem, HStack, SimpleGrid, Button, ButtonGroup} from "@chakra-ui/react"
import FilterHeading from "../games/FilterHeading"
import GameGrid from "../games/GameGrid"
import GameModeSelector from "../games/GameModeSelector"
import OrderSelector from "../selectors/OrderSelector"
import PlatformSelector from "../platforms/PlatformSelector"
import SideBar from "./SideBar"
import SortSelector from "../selectors/SortSelector"
import { CiGrid41, CiGrid2H } from "react-icons/ci";
import useQueryStore from "../../stores/useQueryStore"
import ShowOnlySelector from "../games/ShowOnlySelector"

function Home() {
    const {genre, platform, gameMode, sort, handleLayoutToggle} = useQueryStore()
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
              <SimpleGrid columns={{sm:1, md:1, lg:2, xl: 2, '2xl': 2}} spacingX="60%">
                <GridItem>
                  <HStack>
                      <GameModeSelector/>
                      <PlatformSelector/>
                      <SortSelector/>
                      {sort && <OrderSelector/>}
                      <ShowOnlySelector/>
                  </HStack>
                </GridItem>
                <GridItem>
                  <HStack className="display">
                    <Text as='b'>Display Options</Text>
                    <ButtonGroup spacing={1}>
                      <Button onClick={() => handleLayoutToggle(false)}><CiGrid41/></Button>
                      <Button onClick={() => handleLayoutToggle(true)}><CiGrid2H/></Button>
                    </ButtonGroup>
                  </HStack>
                </GridItem>
              </SimpleGrid>
              <GameGrid/>
            </GridItem>
          </Grid>
    )
}

export default Home