import { Box, Card, Center, CardBody, Heading, Image, Stack, StackDivider, VStack, Text, Input, Button, Link } from "@chakra-ui/react"
import logo from "../assets/logo.png"
import { Link as ReactRouterLink} from "react-router-dom"
function Login() {
    return (
        <Box className="login-background" width="100%">
            <VStack overflowY='hidden'>
                <Image src={logo}/>
                <Card backgroundColor='rgba(22, 0, 0, 0.7)' width="500px" height="70vh" padding={30} paddingBottom={40}>
                    <CardBody>
                        <Heading color='white'>Sign In</Heading>
                        <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <form>
                                <VStack>
                                    <Input placeholder="Email" height="50px" borderRadius={1} m={2}/>
                                    <Input placeholder="Password" height="50px" borderRadius={1} m={2}/>
                                    <Button backgroundColor='red' color='white' width="75%">
                                        Sign In
                                    </Button>
                                    <Text color="grey">OR</Text>
                                    <Button backgroundColor='grey' color='white' width='75%'>
                                        Use a Sign-In Code
                                    </Button>
                                    <Link color='white'>Forgot Your Password?</Link>
                                </VStack>
                            </form>
                        </Box>
                        <Box>
                            <Heading size='xs' color='white'>
                            New to Netflix? <ReactRouterLink to='/setup'>Sign Up Now</ReactRouterLink>
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