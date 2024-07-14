import { Box, Center, Heading, HStack, VStack, Text, Image, Input, Flex, InputGroup, Link, Spacer, Stack, InputRightElement, Icon, Button } from "@chakra-ui/react"
import NavBar from "./navbars/NavBar"
import visa from "../assets/Payment/VISA.png"
import mastercard from "../assets/Payment/MASTERCARD.png"
import amex from "../assets/Payment/AMEX.png"
import { CiCircleQuestion, CiCreditCard1 } from "react-icons/ci"

function CreditDetails() {
    return (
        <Box>
            <NavBar/>
            <Center>
                <VStack width="500px" padding={5}>
                    <Text>Step 3 of 3</Text>
                    <Heading>Set up your credit or debit card.</Heading>
                    <Flex justifyContent='start' width="100%">
                        <HStack>
                            <Image src={visa}/>
                            <Image src={mastercard}/>
                            <Image src={amex}/>
                        </HStack>
                    </Flex>
                    <InputGroup> 
                    <InputRightElement height="100%">
                        <Icon as={CiCreditCard1} fontSize={30}/>
                    </InputRightElement>
                    <Input placeholder="Card number" height="55px" borderRadius={1} border='1px solid black'/>
                    </InputGroup>
                    <Flex justifyContent='start' width="100%">
                        <InputGroup>
                            <Input placeholder="Expiration date" height="55px" mr={1} borderRadius={1} border='1px solid black'/>
                            <InputGroup>
                            <InputRightElement height="100%">
                                <Icon as={CiCircleQuestion} fontSize={30}/>
                            </InputRightElement>
                                <Input placeholder="CVV" height="55px" borderRadius={1} border='1px solid black'/>
                            </InputGroup>
                        </InputGroup>
                    </Flex>
                    <Input placeholder="Name on card" height="55px" borderRadius={1} border='1px solid black'/>
                    <Flex width="100%" borderRadius={5} backgroundColor="gray.100" height="75px" padding={3}>
                        <Center height="100%">
                            <VStack spacing={0}>
                            <Text as='b'>$16.99/month (pre-tax)</Text>
                            <Text width="100%">Standard</Text>
                            </VStack>
                        </Center>
                        <Spacer />
                        <Center height="100%">
                            <Link color='blue' as='b'>Change</Link>
                        </Center>
                    </Flex>
                    <Text fontSize={10}>
                        By clicking the “Start Membership” button below, you agree to our Terms of Use, 
                        Privacy Statement, that you are over 18, and that Netflix will automatically continue 
                        your membership and charge the membership fee (currently $16.49/month plus applicable taxes) 
                        to your payment method until you cancel. You may cancel at any time to avoid future charges. 
                        To cancel, go to Account and click “Cancel Membership.
                    </Text>
                    <Button width="100%" backgroundColor="red" color="white" height="65px" fontSize={24}>Start Membership</Button>
                </VStack>
            </Center>
        </Box>
    )
}

export default CreditDetails