import { Center, Flex, Heading, Spacer, Stack, Text, VStack, Image, HStack, Icon } from "@chakra-ui/react"
import visa from "../../assets/Payment/VISA.png"
import mastercard from "../../assets/Payment/MASTERCARD.png"
import amex from "../../assets/Payment/AMEX.png"

import { IoIosArrowForward } from "react-icons/io"
import { CiLock } from "react-icons/ci"
import { RiLock2Fill } from "react-icons/ri"
import { useLocation, useNavigate } from "react-router-dom"

function PaymentOptions() {
    const navigate = useNavigate()
    const {state: {data}} = useLocation()

    const handlePaymentSelection = (type:string) => {
        if (type == "card")
            navigate("/setup/creditoption", {state: {data}})
        else
            navigate("/home")
    }

    return (
        <Center height='70vh' width="450px" margin='auto'>
            <VStack>
                <Icon as={CiLock} color='red' fontSize={40} border="1px solid red" borderRadius={100} padding={1}/>
                <Text>Step 3 of 3</Text>
                <Heading>Choose how to pay.</Heading>
                <Text textAlign='center'>Your payment is encrypted and you can change how you pay anytime.</Text>
                <Text>Secure for peace of mind. Cancel easily online.</Text>
                <Stack width="100%">
                    <Flex justifyContent='end'>
                        <Text alignContent='end' fontSize={12}>End-to-end encrypted</Text>
                        <Icon as={RiLock2Fill} mt={2} fontSize={18} color='gold'/>
                    </Flex>
                    <Flex border="2px solid" borderRadius={5} padding={5} borderColor='gray.500' _hover={{cursor: "pointer"}} onClick={() => handlePaymentSelection('card')}>
                        <Text mr={1}>Credit or Debit Card</Text>
                        <HStack spacing={1}>
                            <Image src={visa}/>
                            <Image src={mastercard}/>
                            <Image src={amex}/>
                        </HStack>
                        <Spacer/>
                        <IoIosArrowForward size={26}/>
                    </Flex>
                    <Flex border="2px solid" borderRadius={5} padding={5} borderColor='gray.500' _hover={{cursor: "pointer"}}>
                        <Text mr={1}>Gift Code</Text>
                        <Spacer/>
                        <IoIosArrowForward size={26}/>
                    </Flex>
                </Stack>
            </VStack>
        </Center>
    )
}

export default PaymentOptions