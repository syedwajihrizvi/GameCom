import { Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text } from "@chakra-ui/react"

function GameGrid() {
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
        <SimpleGrid paddingLeft={4} spacing={4} templateColumns='repeat(auto-fill, minmax(400px, 1fr))'>
            {cards.map(card => 
            <Card borderRadius={10} width='400px' key={card} overflow='hidden'>
                <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                <Button>View here</Button>
                </CardFooter>
            </Card>)}
        </SimpleGrid>
    )
}

export default GameGrid