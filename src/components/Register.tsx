import { Box, Center, VStack, Text, Button, Heading, Input } from "@chakra-ui/react"
import NavBar from "./navbars/NavBar"

function Register() {
    return (
        <Box>
            <NavBar/>
            <Center  height='70vh' width="450px" margin='auto'>
                <VStack marginTop={30}>
                    <Text>Step 1 of 3</Text>
                    <Heading>Create a password to start your membership.</Heading>
                    <Text>Just a few more steps and we're done. We hate paperwork too!</Text>
                    <Input placeholder="Enter your Email" borderRadius={1} height="50px"/>
                    <Input placeholder="Enter your Password" borderRadius={1} height="50px"/>
                    <Button backgroundColor='red' color='white' width="450px" height="55px" borderRadius={1} fontSize={24}>Next</Button>
                </VStack>
            </Center>
        </Box>
    )
}

export default Register