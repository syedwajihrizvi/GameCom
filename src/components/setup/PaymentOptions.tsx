import { Center, Flex, Heading, Spacer, Stack, Text, VStack, Image, HStack, Icon, Button } from "@chakra-ui/react"
import visa from "../../assets/Payment/VISA.png"
import mastercard from "../../assets/Payment/MASTERCARD.png"
import amex from "../../assets/Payment/AMEX.png"

import { IoIosArrowForward } from "react-icons/io"
import { CiLock } from "react-icons/ci"
import { RiLock2Fill } from "react-icons/ri"
import { useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"

const MotionCenter = motion(Center)

function PaymentOptions() {
    const navigate = useNavigate()
    const {state} = useLocation()
    const [next, setNext] = useState(false)
    const [back, setBack] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    const [option, setOption] = useState('')

    const handlePaymentSelection = (type:string) => {
        setIsAnimating(true)
        setNext(true)
        setOption(type)
    }

    const handleSelectBack = () => {
        setIsAnimating(true)
        setBack(true)
    }

    const handleInitialAnimationState = () => {
        if (back)
            return {x:0}
        else if (next)
            return {x:0}
        else if (state && state["onBack"])
            return {x:-1500}
        else
            return {x:1500}
    }

    const handleFinalAnimationState = () => {
        if (back)
            return {x:1500}
        else if (next)
            return {x: -1500}
        else if (state && state["onBack"])
            return {x:0}
        return {x:0}
    }

    const handleAnimationComplete = () => {
        if (back)
            navigate('/setup/plans', {state: {...state, onBack: true}})
        if (next)
            if (option == 'card')
                navigate("/setup/creditoption", { state: {...state, onBack:false} })
            else
                navigate("/home")        
    }

    console.log(state)
    return (
        <MotionCenter className="setup" initial={handleInitialAnimationState} animate={handleFinalAnimationState} transition={{ duration: 0.5 }} onAnimationComplete={isAnimating ? handleAnimationComplete: undefined} height='70vh' margin='auto'>
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
                <Button width="350px" height="55px" borderRadius={1} backgroundColor="red" color="white" fontSize={24} onClick={handleSelectBack}>Back</Button>
            </VStack>
        </MotionCenter>
    )
}

export default PaymentOptions