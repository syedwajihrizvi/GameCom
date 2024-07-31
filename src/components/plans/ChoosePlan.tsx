import { Center, VStack, Heading, Button, Text, Icon, HStack, ButtonGroup } from "@chakra-ui/react"
import { IoCheckmark } from "react-icons/io5"
import { useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useState } from "react"

const MotionCenter = motion(Center)

function ChoosePlan() {
    const navigate = useNavigate()
    const {state} = useLocation()
    const [next, setNext] = useState(false)
    const [back, setBack] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    const handleSelectNext = () => {
        setIsAnimating(true)
        setNext(true)
    }

    const handleSelectBack = () => {
        setIsAnimating(true)
        setBack(true)
    }

    const handleInitialAnimationState = () => {
        if (back)
            return {x:-1500}
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
            navigate('/setup/register', {state: {onBack: true}})
        if (next)
            navigate("/setup/plans", { state: {...state, onBack: false} })
            
    }

    console.log(state)
    return (
        <MotionCenter initial={handleInitialAnimationState} animate={handleFinalAnimationState} transition={{ duration: 0.5 }} onAnimationComplete={isAnimating ? handleAnimationComplete: undefined} height='70vh' width="450px" margin='auto'>
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
                <ButtonGroup width="350px">
                    <Button backgroundColor='red' color='white' width="100%" height="55px" borderRadius={1} fontSize={24} onClick={handleSelectBack}>
                        Back
                    </Button>
                    <Button backgroundColor='red' color='white' width="100%" height="55px" borderRadius={1} fontSize={24} onClick={handleSelectNext}>
                        Next
                    </Button>
                </ButtonGroup>
            </VStack>
        </MotionCenter>
    )
}

export default ChoosePlan