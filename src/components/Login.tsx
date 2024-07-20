import apiClient from "../utils/loginService"
import { useForm } from "react-hook-form"
import { Link as RouterLink, useNavigate} from "react-router-dom"
import { Box, Card, Center, CardBody, Heading, Image, Stack, StackDivider, VStack, Text, Input, Button, Link } from "@chakra-ui/react"
import logo from "../assets/logo.png"
import { useState } from "react"

interface LoginForm {
    email: string,
    password: string
}

function Login() {
    const { register, handleSubmit } = useForm<LoginForm>()
    const [loginError, setLoginError] = useState<string>()
    const navigate = useNavigate()

    const handleSignIn = (data:LoginForm) => {
        apiClient.post('/', data)
        .then(res => {
            localStorage.setItem('userJWT', res.data)
            navigate('/games')
        })
        .catch(err => {
            setLoginError(err.response.data) 
        })
    }

    return (
        <Box className="login-background" width="100%">
            <VStack overflowY='hidden'>
                <Image src={logo}/>
                <Card backgroundColor='rgba(22, 0, 0, 0.7)' width="500px" height="70vh" padding={30} paddingBottom={40}>
                    <CardBody>
                        <Heading color='white'>Sign In</Heading>
                        <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <VStack onClick={() => setLoginError('')}>
                                <Input {...register('email')} color="white" placeholder="Email" height="50px" borderRadius={1} m={2}/>
                                <Input {...register('password')} color="white" type="password" placeholder="Password" height="50px" borderRadius={1} m={2}/>
                                {loginError && <Text color="red">{loginError}</Text>}
                                <Button backgroundColor='red' color='white' width="75%" onClick={handleSubmit(handleSignIn)}>
                                    Sign In
                                </Button>
                                <Text color="grey">OR</Text>
                                <Button backgroundColor='grey' color='white' width='75%'>
                                    Use a Sign-In Code
                                </Button>
                                <Link color='white'>Forgot Your Password?</Link>
                            </VStack>
                        </Box>
                        <Box>
                            <Heading size='xs' color='white'>
                            New to Netflix? <RouterLink to='/setup'>Sign Up Now</RouterLink>
                            </Heading>
                        </Box>
                        <Box>
                            <Heading size='xs' width="60%" color="white">
                            This page is protected by Google reCAPTCHA to ensure you're not a bot. <Link color="grey">Learn more.</Link>
                            </Heading>
                        </Box>
                        </Stack>
                    </CardBody>
                </Card>
                <Center className="footer" backgroundColor='rgba(22, 0, 0, 0.7)' width="100%" height="200px" marginTop='30px'>
                    <Heading color='white' size='sm'>Questions: Call 1-844-542-4813</Heading>
                </Center>
            </VStack>
        </Box>
    )
}

export default Login 