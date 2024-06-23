import { Grid, GridItem, HStack, useColorMode } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import GameGrid from './components/GameGrid'
import { useState } from 'react'
import { Query } from './utils/query_utils'
import PlatformSelector, {allPlatforms} from './components/PlatformSelector'
import { Platform } from './hooks/usePlatforms'
import GameModeSelector, { allGameModes } from './components/GameModeSelector'
import { GameMode } from './hooks/useGameModes'
import SortSelector, { SortOption } from './components/SortSelector'
import OrderSelector from './components/OrderSelector'

function App() {
  const [query, setQuery] = useState<Query>({genre: 0, platform: allPlatforms, gameMode: allGameModes, order: 'asc'} as Query)
  const { toggleColorMode } = useColorMode()

  const handleSearchSubmit = (searchQuery: string) => {
    if (searchQuery != query.search && searchQuery)
      setQuery({...query, search: searchQuery, genre: 0, platform: allPlatforms, sort: undefined})
  }

  const handleGenreSelect = (genreID: number) => {
    if (query.genre != genreID)
        setQuery({...query, genre:genreID, search: ''})
  }

  const handlePlatformSelect = (selectedPlatform: Platform) => {
    if (query.platform.id != selectedPlatform.id)
      setQuery({...query, platform: selectedPlatform})
  }

  const handleGameModeSelect = (selectedGameMode: GameMode) => {
    if (selectedGameMode.id != query.gameMode.id)
      setQuery({...query, gameMode: selectedGameMode})
  }

  const handleSortSelect = (selectedSort: SortOption) => {
    if (selectedSort.name == query.sort?.name) 
      setQuery({...query, sort: undefined})
    else
      setQuery({...query, sort: selectedSort, order: 'asc', search: ''})
  }

  const handleOrderSelect = (order: string) => {
    if (order != query.order)
      setQuery({...query, order})
  }

  return (
    <Grid
  templateAreas={`"header header"
                  "nav main"`}
  templateColumns={{base: '1fr',
                    lg: '200px 1fr'
                  }}>
      <GridItem pl='2' area={'header'}>
        <NavBar handleSearchSubmit = {handleSearchSubmit} handleSwitchChange={toggleColorMode} currentSearch={query.search ? query.search : ""}/>
      </GridItem>
      <GridItem area={'nav'}>
        <SideBar onGenreSelect={handleGenreSelect} currentGenre={query.genre}/>
      </GridItem>
      <GridItem pl='2'area={'main'}>
        <HStack>
          <GameModeSelector onGameModeSelect={handleGameModeSelect} currentGameMode={query.gameMode}/>
          <PlatformSelector onPlatformSelect={handlePlatformSelect} currentPlatform={query.platform}/>
          <SortSelector onSortSelector={handleSortSelect} currentSortOption={query.sort}/>
          {query.sort && <OrderSelector onOrderSelector={handleOrderSelect} currentOrder={query.order}/>}
        </HStack>
        <GameGrid query={query}/>
      </GridItem>
    </Grid>
  )
}

export default App
