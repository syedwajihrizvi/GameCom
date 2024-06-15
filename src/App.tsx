import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'

function App() {
  return (
    <Grid
  templateAreas={`"header header"
                  "nav main"`}>
      <GridItem pl='2' bg='orange.300' area={'header'}>
        Header
      </GridItem>
      <GridItem pl='2' bg='pink.300' area={'nav'}>
        Nav
      </GridItem>
      <GridItem pl='2' bg='green.300' area={'main'}>
        Main
      </GridItem>
    </Grid>
  )
}

export default App
