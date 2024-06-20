import { Grid, GridItem, useColorMode } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import GameGrid from './components/GameGrid'
import { useState } from 'react'
import { Query } from './utils/query_utils'
import PlatformSelector from './components/PlatformSelector'

function App() {
  const [query, setQuery] = useState<Query>({genre: 0} as Query)
  const { toggleColorMode } = useColorMode()

  const handleSearchSubmit = (searchQuery: string) => {
    if (searchQuery != query.search && searchQuery)
      setQuery({search: searchQuery, genre: 0})
  }

  const handleGenreSelect = (genreID: number) => {
    if (query.genre != genreID)
        setQuery({...query, genre:genreID, search: ''})
        console.log("Search: " + query.search)
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
        <PlatformSelector/>
        <GameGrid query={query}/>
      </GridItem>
    </Grid>
  )
}

export default App
