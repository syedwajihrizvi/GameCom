import { Box, VStack, HStack, Heading, Button, Text } from "@chakra-ui/react";
import { CiLaptop, CiMonitor, CiMobile1 } from "react-icons/ci";
import { useNavigate, useLocation } from "react-router-dom"
import { motion } from 'framer-motion'
import { useState } from "react";

const MotionCenter = motion(Box)

function SetupAccount() {
    const navigate = useNavigate()
    const {state} = useLocation()
    const [isAnimating, setIsAnimating] = useState(false)
    const [next, setNext] = useState(false)
    const handleInitialAnimationState = () => {
        if (next) {
            return {x:0}
        }
        else if (state && state["onBack"]) {
            return {x:-1500}
        }
        return {x:1500}
    }

    const handleFinalAnimationState = () => {
        if (next) {
            return {x: -1500}
        }
        else if (state && state["onBack"]) {
            return {x: 0}
        }
        return {x:0}
    }

    const handleNext = () => {
        setIsAnimating(true)
        setNext(true)
    }

    const handleAnimationComplete = () => {
        if (next) {
            navigate('/setup/register')
        }
    }
    return (
        <MotionCenter className="signup" 
        initial={handleInitialAnimationState()} 
        animate={handleFinalAnimationState()} transition={{ duration: 0.5 }} 
        onAnimationComplete={isAnimating ? handleAnimationComplete:undefined} 
        height='60vh'>
            <VStack className='content'>
                <HStack>
                    <CiMonitor size={50}/>
                    <CiLaptop size={50}/>
                    <CiMobile1 size={50}/>
                </HStack>
                <Heading textAlign='center'>Finish setting up your account.</Heading>
                <Text textAlign='center' noOfLines={2} as='b'>GameCom is personalized for you. Create a password to begin your GameCom Journey.</Text>
                    <Button onClick={handleNext} backgroundColor='red' color='white' width="300px" height="55px" borderRadius={1} fontSize={24}>Next</Button>
            </VStack>
        </MotionCenter>
    )
}

export default SetupAccount