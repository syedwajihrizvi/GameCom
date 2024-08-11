import { Text, Box, Heading, VStack, Card, Stack, StackDivider, CardBody, Flex, Spacer, Center, Button, Link, ButtonGroup } from "@chakra-ui/react"
import PlanHeader from "./PlanHeader"
import { useState } from "react"
import { useLocation, useNavigate, useOutletContext} from "react-router-dom"
import apiClient from "../../utils/services/userService"
import { User } from "../../entities/User"
import { plans } from "./utils/plans"
import { motion } from "framer-motion"

import "../../assets/css/plangrids.css"

const MotionCenter = motion(Center)

function PlanGrid() {
    const navigate = useNavigate()
    const [currentPlan, setCurrentPlan] =  useState(0)
    const {state} = useLocation()
    const user = useOutletContext<User>()   
    const isLoggedIn = localStorage.getItem('x-auth-token')
    const [back, setBack] = useState(false)
    const [next, setNext] = useState(false)
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
            return {x:0}
        else if (next)
            return {x:0}
        else if (state && state["onBack"])
            return {x:-1500}
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
        if (back) {
            if (isLoggedIn) {
                navigate("/account")
            }
            else {
                navigate("/setup/choose-plan", {state: {...state, onBack: true}}) 
            }          
        }
        if (next)
            if (isLoggedIn) {
                apiClient.put(`/${user?.id}`, {'selectedPlan': plans[currentPlan].title})
                         .then(() => navigate("/account"))
            }
            else {
                state["selectedPlan"] = plans[currentPlan].title
                state["selectedPlanPrice"] = plans[currentPlan].price
                navigate("/setup/payment", {state: {...state, onBack: false}}) 
            } 
    }

    const handlePlanSelect = (index: number) => {
        setCurrentPlan(index)
    }

    return (
        <MotionCenter className="signup" initial={handleInitialAnimationState} animate={handleFinalAnimationState} transition={{ duration: 0.5 }} onAnimationComplete={isAnimating ? handleAnimationComplete: undefined}>
            <VStack width="100%" padding={10}>
                {!isLoggedIn && <Text>Step 2 of 3</Text>}
                <Heading mb={2}>Choose the plan that’s right for you</Heading>
                <Box className="fullPlans" gap={5}>
                    {plans.map((plan, index) => 
                        <Card border={currentPlan == index ? "3px solid red": ""} onClick={() => handlePlanSelect(index)} padding={2} _hover={{cursor: "pointer", transform: 'scale(1.01)', transition: 'transform 0.15s ease-in'}} boxShadow='0 4px 12px rgba(0, 0, 0, 0.15)'>
                            <VStack>
                                <PlanHeader title={plan.title} quality={plan.quality} partial={false}/>
                                <CardBody  width='100%'>
                                    <Stack divider={<StackDivider />} spacing='2'>
                                        {plan.values.map(value => 
                                        <Box>
                                            <Text color='gray.500' fontSize='sm' as='b' display='block'>{value.name}</Text>
                                            <Text as='b' fontSize='md'>{value.value}</Text>
                                        </Box>
                                        )}
                                    </Stack>
                                </CardBody>
                            </VStack>
                        </Card>
                    )}                 
                </Box>
                <Box className="partialPlans">
                    <Flex gap={3} mb={5} padding={3} alignItems='center' justifyContent='center'>
                        {plans.map((plan, index) =>
                            <Card width="100%" onClick={() => handlePlanSelect(index)} _hover={{cursor: "pointer", transform: 'scale(1.05)', transition: 'transform 0.15s ease-in'}} borderRadius={10} border={index == currentPlan ? "1px solid black":""}>
                                <PlanHeader title={plan.title} quality={plan.quality} partial={true}/>
                            </Card>
                        )}
                    </Flex>
                    <Flex width='100%' justifyContent='center'>
                        <Stack divider={<StackDivider />} width="100%" padding={5}>
                                {plans[currentPlan].values.map(planDetail => 
                                    <Flex>
                                        <Text color='gray.500' fontSize='sm' as='b' display='block'>{planDetail.name}</Text>
                                        <Spacer/>
                                        <Text as='b' fontSize='md'>{planDetail.value}</Text>
                                    </Flex>
                                )}
                            </Stack>
                    </Flex>
                </Box>
                <Stack spacing={2} marginTop="1rem">
                    <Text fontSize={14}>
                        <Link color='blue'>Learn more about an ad-supported plan</Link>. If you select an ad-supported plan, 
                        you will be required to provide your date of birth for ads personalization 
                        and other purposes consistent with the GameCom Privacy Statement.
                    </Text>
                    <Text fontSize={14}>
                        Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. 
                        Not all content is available in all resolutions. See <Link color="blue">Terms of Use</Link> for more details.
                    </Text>
                    <Text fontSize={14}>
                    Only people who live with you may use your account. Add 1 extra member with Standard or up to 2 with Premium. 
                    <Link color="blue">Learn more</Link>. Watch on 4 different devices at the same time with Premium and 2 with Standard or Standard with ads.
                    </Text>
                    <Flex width="100%" justifyContent='center'>
                        <ButtonGroup className="button-group" width='60%'>
                            <Button backgroundColor='red' width="100%" color='white' height="55px" borderRadius={1} fontSize={28} onClick={handleSelectBack}>Back</Button>
                            <Button backgroundColor='red' width="100%" color='white' height="55px" borderRadius={1} fontSize={28} onClick={handleSelectNext}>{isLoggedIn?"Update Plan": "Next"}</Button>
                        </ButtonGroup>
                    </Flex>
                </Stack>
            </VStack>
        </MotionCenter>
    )
}

export default PlanGrid