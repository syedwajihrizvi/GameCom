import apiClient from "../../utils/services/loginService"
import { useForm } from "react-hook-form"
import { Link as RouterLink, useNavigate} from "react-router-dom"
import { Box, Card, CardBody, Heading, Image, Stack, StackDivider, VStack, Text, Input, Button, Link } from "@chakra-ui/react"
import logo from "../../assets/logo.png"
import { useState } from "react"
import Footer from "../common/Footer"

import "../../assets/css/login.css"

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
            localStorage.setItem('x-auth-token', res.data)
            navigate('/games')
        })
        .catch(err => {
            setLoginError(err.response.data) 
        })
    }

    return (
        <Box className="login-background" width="100%">
            <VStack>
                <Image src={logo}/>
                <Card className="login" backgroundColor="rgba(22, 0, 0, 0.7)">
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
                            New to GameCom? <RouterLink to='/setup'>Sign Up Now</RouterLink>
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
                <Footer/>
            </VStack>
        </Box>
    )
}

export default Login 