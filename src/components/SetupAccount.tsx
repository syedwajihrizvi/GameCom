import { Center, Box, VStack, HStack, Heading, Button, Text } from "@chakra-ui/react";
import NavBar from "./navbars/NavBar";
import { CiLaptop, CiMonitor, CiMobile1 } from "react-icons/ci";

function SetupAccount() {
    return (
        <Box>
            <NavBar/>
            <Center  height='70vh' width="500px" margin='auto'>
                <VStack marginTop={30}>
                    <HStack>
                        <CiMonitor size={110}/>
                        <CiLaptop size={110}/>
                        <CiMobile1 size={110}/>
                    </HStack>
                    <Heading textAlign='center'>Finish setting up your account.</Heading>
                    <Text textAlign='center' noOfLines={2} as='b'>GameCom is personalized for you. Create a password to begin your GameCom Journery</Text>
                    <Button backgroundColor='red' color='white' width="350px" height="55px" borderRadius={1} fontSize={24}>Next</Button>
                </VStack>
            </Center>
        </Box>
    )
}

export default SetupAccount