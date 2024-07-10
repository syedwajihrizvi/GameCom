import { ChevronRightIcon } from "@chakra-ui/icons"
import { HStack, Input, Button, Text } from "@chakra-ui/react"

function SignUp() {
    return (
        <>
        <Text color="white" as="b" fontSize='lg'>Ready to watch? Enter your email to create or restart your membership.</Text>
        <HStack>
                <Input placeholder='Enter Email Address' height={55} borderRadius={1} backgroundColor='rgba(22, 0, 0, 0.2)'  _placeholder={{ color: 'white' }}/>
                <Button backgroundColor='red' color="white" width={340} height={55} borderRadius={2} rightIcon={<ChevronRightIcon boxSize={8}/>}>
                    <Text as='b' fontSize='2xl'>Get Started</Text>
                </Button>
        </HStack>
        </>
    )
}

export default SignUp