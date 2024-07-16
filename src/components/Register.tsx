import { Center, VStack, Text, Button, Heading, Input, InputGroup, InputRightElement, Icon, Flex, Stack } from "@chakra-ui/react"
import { IoEyeOutline } from "react-icons/io5"
import { useState } from "react"
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from "react-router-dom";

const schema = z.object({
    email: z.string().email({message: "Must be a valid email"}),
    firstName: z.string().min(2, {message: "Name must be atleast 2 characters"}),
    lastName: z.string().min(2, {message: "Name must be atleast 2 characters"}),
    password: z.string().refine(val => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(val)
    }, {message: "Password is not valid"})
}).required()

type ValidationSchemaType = z.infer<typeof schema>

function Register() {
    const navigate = useNavigate()
    const [viewPassword, setViewPassword] = useState(false)
    const { register, handleSubmit, formState: {errors} } = useForm<ValidationSchemaType>({
        resolver: zodResolver(schema)
    })

    const onFormSubmit:SubmitHandler<ValidationSchemaType> = (data) => {
        navigate("/setup/choose-plan", { state: { data } })
    }

    return (
        <Center  height='70vh' width="450px" margin='auto'>
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
                <Button backgroundColor='red' color='white' width="450px" height="55px" borderRadius={1} fontSize={24} onClick={handleSubmit(onFormSubmit)}>Next</Button>
            </VStack>
        </Center>
    )
}

export default Register