import { Box, Center, VStack, Heading, Button, Text, Icon, HStack } from "@chakra-ui/react"
import NavBar from "./navbars/NavBar"
import { IoCheckmark } from "react-icons/io5"

function ChoosePlan() {
    return (
        <Box>
            <NavBar/>
            <Center  height='70vh' width="450px" margin='auto'>
                <VStack marginTop={30}>
                    <Text>Step 2 of 3</Text>
                    <Heading>Choose your plan.</Heading>
                    <HStack>
                        <Icon as={IoCheckmark} color='red' boxSize={12}/>
                        <Text width="250px" fontSize={20}>No commitments, cancel anytime.</Text>
                    </HStack>
                    <HStack>
                        <Icon as={IoCheckmark} color='red' boxSize={12}/>
                        <Text width="250px" fontSize={20}>Endless gaming for one low price.</Text>
                    </HStack>
                    <HStack>
                        <Icon as={IoCheckmark} color='red' boxSize={12}/>
                        <Text width="250px" fontSize={20}>Enjoy GameCom on all your devices</Text>
                    </HStack>
                    <Button backgroundColor='red' color='white' width="300px" height="55px" borderRadius={1} fontSize={24}>Next</Button>
                </VStack>
            </Center>
        </Box>
    )
}

export default ChoosePlan