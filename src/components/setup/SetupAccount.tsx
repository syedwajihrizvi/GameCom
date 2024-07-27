import { Center, VStack, HStack, Heading, Button, Text } from "@chakra-ui/react";
import { CiLaptop, CiMonitor, CiMobile1 } from "react-icons/ci";
import { Link } from "react-router-dom";

function SetupAccount() {
    return (
        <Center  height='70vh' width="500px" margin='auto'>
            <VStack marginTop={30}>
                <HStack>
                    <CiMonitor size={110}/>
                    <CiLaptop size={110}/>
                    <CiMobile1 size={110}/>
                </HStack>
                <Heading textAlign='center'>Finish setting up your account.</Heading>
                <Text textAlign='center' noOfLines={2} as='b'>GameCom is personalized for you. Create a password to begin your GameCom Journery</Text>
                <Link to='/setup/register'><Button backgroundColor='red' color='white' width="350px" height="55px" borderRadius={1} fontSize={24}>Next</Button></Link>
            </VStack>
        </Center>
    )
}

export default SetupAccount