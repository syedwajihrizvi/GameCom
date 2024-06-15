import { Grid, GridItem, useColorMode } from '@chakra-ui/react'
import './App.css'
import NavBar from './components/NavBar'
import SideBar from './components/SideBar'
import GameGrid from './components/GameGrid'

function App() {
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
        <GameGrid/>
      </GridItem>
    </Grid>
  )
}

export default App
