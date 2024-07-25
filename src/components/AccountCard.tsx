import { Button, ButtonGroup, Center, Flex, Heading, Icon, Input, InputGroup, InputRightElement, Stack, VStack } from "@chakra-ui/react"
import { CiCircleQuestion } from "react-icons/ci"

function AccountCard() {
    return (
        <Center height="80vh">
            <VStack width="500px">
                <Heading width="100%">Card</Heading>
                <Input placeholder="Card Number" height="55px" mr={1} borderRadius={1} border='1px solid black'/>
                <Flex justifyContent='start' width="100%">
                    <Input placeholder="Expiration date" height="55px" mr={1} borderRadius={1} border='1px solid black'/>
                    <Stack>
                        <InputGroup>
                            <InputRightElement height="100%">
                                <Icon as={CiCircleQuestion} fontSize={30}/>
                            </InputRightElement>
                            <Input placeholder="CVV" height="55px" borderRadius={1} border='1px solid black'/>
                        </InputGroup>
                    </Stack>
                </Flex>
                <ButtonGroup width="100%">
                    <Button borderRadius={1} height="55px" width="100%" colorScheme="green" fontSize={20}>Save</Button>
                    <Button borderRadius={1} height="55px" width="100%" colorScheme="red" fontSize={20}>Delete Card</Button>
                </ButtonGroup>
                <Button borderRadius={1} height="55px" width="100%" colorScheme="gray" fontSize={20}>Back</Button>
            </VStack>
        </Center>
    )
}

export default AccountCard