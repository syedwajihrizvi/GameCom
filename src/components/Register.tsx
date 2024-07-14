import { Center, VStack, Text, Button, Heading, Input, InputGroup, InputRightElement, Icon } from "@chakra-ui/react"
import {Link} from "react-router-dom"
import { IoEyeOutline } from "react-icons/io5"
import { useState } from "react"

function Register() {
    const [viewPassword, setViewPassword] = useState(false)
    return (
            <Center  height='70vh' width="450px" margin='auto'>
                <VStack marginTop={30}>
                    <Text>Step 1 of 3</Text>
                    <Heading>Create a password to start your membership.</Heading>
                    <Text>Just a few more steps and we're done. We hate paperwork too!</Text>
                    <Input placeholder="Enter your Email" borderRadius={1} height="50px"/>
                    <InputGroup>
                    <InputRightElement height="100%">
                        <Center>
                            <Icon as={IoEyeOutline} _hover={{cursor: "pointer"}} onClick={() => setViewPassword(!viewPassword)}/>
                        </Center>
                    </InputRightElement>
                    <Input placeholder="Enter your Password" borderRadius={1} height="50px" type={viewPassword?"text":"password"}/>
                    </InputGroup>
                    <Link to="/setup/choose-plan"><Button backgroundColor='red' color='white' width="450px" height="55px" borderRadius={1} fontSize={24}>Next</Button></Link>
                </VStack>
            </Center>
    )
}

export default Register