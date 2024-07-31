import { Center, VStack, Text, Button, Heading, Input, InputGroup, InputRightElement, Icon, Flex, Stack, ButtonGroup } from "@chakra-ui/react"
import { IoEyeOutline } from "react-icons/io5"
import { useState } from "react"
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {registerSchema} from "../../utils/schema/userSchema"
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion"

const schema = z.object(registerSchema).required()
const MotionCenter = motion(Center)

type ValidationSchemaType = z.infer<typeof schema>

function Register() {
    const navigate = useNavigate()
    const {state} = useLocation()
    const [viewPassword, setViewPassword] = useState(false)
    const { register, handleSubmit, formState: {errors}, watch} = useForm<ValidationSchemaType>({
        resolver: zodResolver(schema)
    })
    const [back, setBack] = useState(false)
    const [next, setNext] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)
    console.log(state)
    const onFormSubmit:SubmitHandler<ValidationSchemaType> = () => {
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
            navigate('/setup', {state: {onBack: true}})
        if (next)
            navigate("/setup/choose-plan", { state: watch() })
            
    }

    return (
        <MotionCenter initial={handleInitialAnimationState} animate={handleFinalAnimationState} transition={{ duration: 0.5 }} onAnimationComplete={isAnimating ? handleAnimationComplete: undefined} height='70vh' width="450px" margin='auto'>
            <VStack marginTop={30}>
                <Text>Step 1 of 3</Text>
                <Heading>Create a password to start your membership.</Heading>
                <Text>Just a few more steps and we're done. We hate paperwork too!</Text>
                <Input {...register('email')} placeholder="Enter your Email" borderRadius={1} height="50px"/>
                {errors.email && <Text color="red" width="100%">{errors.email.message}</Text>}
                <Flex justifyContent="start" width="100%">
                    <Stack width="100%" mr={2}>
                        <Input {...register('firstName')} placeholder="First Name" height="50px" borderRadius={1}/>
                        {errors.firstName && <Text color="red">{errors.firstName.message}</Text>}
                    </Stack>
                    <Stack width="100%">
                        <Input {...register('lastName')} placeholder="Last Name" height="50px" borderRadius={1}/>
                        {errors.lastName && <Text color="red">{errors.lastName.message}</Text>}
                    </Stack>
                </Flex>
                <InputGroup>
                    <InputRightElement height="100%">
                        <Center>
                            <Icon as={IoEyeOutline} _hover={{cursor: "pointer"}} onClick={() => setViewPassword(!viewPassword)}/>
                        </Center>
                    </InputRightElement>
                    <Input {...register("password")} placeholder="Enter your Password" borderRadius={1} height="50px" type={viewPassword?"text":"password"}/>
                </InputGroup>
                {errors.password && <Text color="red" width="100%">{errors.password.message}</Text>}
                <ButtonGroup width="450px">
                    <Button backgroundColor='red' color='white' width="450px" height="55px" borderRadius={1} fontSize={24} onClick={handleSelectBack}>Back</Button>
                    <Button backgroundColor='red' color='white' width="450px" height="55px" borderRadius={1} fontSize={24} onClick={handleSubmit(onFormSubmit)}>Next</Button>
                </ButtonGroup>
            </VStack>
        </MotionCenter>
    )
}

export default Register