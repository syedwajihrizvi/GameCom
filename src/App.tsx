import { Grid, GridItem, HStack, useColorMode } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import GameGrid from './components/games/GameGrid'
import PlatformSelector from './components/platforms/PlatformSelector'
import GameModeSelector from './components/games/GameModeSelector'
import SortSelector from './components/selectors/SortSelector'
import OrderSelector from './components/selectors/OrderSelector'
import FilterHeading from './components/FilterHeading'
import useQueryStore from './stores/useQueryStore'

function App() {
  const {genre, platform, gameMode, sort} = useQueryStore()
  const { toggleColorMode } = useColorMode()

  return (
    <Grid
  templateAreas={`"header header"
                  "nav main"`}
  templateColumns={{base: '1fr',
                    lg: '200px 1fr'
                  }}>
      <GridItem pl='2' area={'header'}>
        <NavBar handleSwitchChange={toggleColorMode}/>
      </GridItem>
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

export default App
