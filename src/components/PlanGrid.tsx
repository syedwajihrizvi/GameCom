import { Text, GridItem, Grid, Box, Heading, VStack } from "@chakra-ui/react"
import NavBar from "./navbars/NavBar"

interface Plan {
    title: string,
    quality: string,
    monthly_price: string,
    video_quality: string,
    sound_quality: string,
    resolution: string,
    audio: string,
    suppored_devices: string,
    download_devices: string,
    ads: string
}

const plans = [
    {title: ""}
]
function PlanGrid() {
    return (
        <Box>
            <NavBar/>
            <VStack>
                <Text>Step 2 of 3</Text>
                <Heading>Choose the plan that’s right for you</Heading>
                <Grid templateAreas={{md: `"partialPlans"`,
                                    base:`"fullPlans"`}}
                    templateColumns='1fr'>
                    <GridItem area="partialPlans" bg='orange.300' height='400px'>

                    </GridItem>
                    <GridItem area="fullPlans" bg='blue.300' height='400px'>

                    </GridItem>
                </Grid>
            </VStack>
        </Box>
    )
}

export default PlanGrid