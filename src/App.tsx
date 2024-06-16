import { Grid, GridItem, useColorMode } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import GameGrid from './components/GameGrid'
import { useState } from 'react'

function App() {
  const [search, setSearch]= useState('')
  const { toggleColorMode } = useColorMode()

  const handleSearchSubmit = (searchQuery: string) => {
    if (searchQuery != search && searchQuery.length > 0)
      setSearch(searchQuery)
  }

  return (
    <Grid
  templateAreas={`"header header"
                  "nav main"`}
  templateColumns={{base: '1fr',
                    lg: '200px 1fr'
                  }}>
      <GridItem pl='2' area={'header'}>
        <NavBar handleSearchSubmit = {handleSearchSubmit} handleSwitchChange={toggleColorMode}/>
      </GridItem>
      <GridItem area={'nav'}>
        <SideBar/>
      </GridItem>
      <GridItem pl='2'area={'main'}>
        <GameGrid query={search}/>
      </GridItem>
    </Grid>
  )
}

export default App
