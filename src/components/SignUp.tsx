import { ChevronRightIcon } from "@chakra-ui/icons"
import { Input, Button, Text, SimpleGrid, GridItem } from "@chakra-ui/react"

function SignUp() {
    return (
        <>
        <Text color="white" as="b" fontSize='lg'>Ready to watch? Enter your email to create or restart your membership.</Text>
        <SimpleGrid columns={{lg:2, md:1}} spacingX={10} spacingY={2}>
            <GridItem>
                <Input placeholder='Enter Email Address' height={55} borderRadius={1} backgroundColor='rgba(22, 0, 0, 0.2)'  _placeholder={{ color: 'white' }}/>
            </GridItem>
            <GridItem>
                <Button backgroundColor='red' color="white" width={340} height={55} borderRadius={2} rightIcon={<ChevronRightIcon boxSize={8}/>}>
                    <Text as='b' fontSize='2xl'>Get Started</Text>
                </Button>
            </GridItem>
        </SimpleGrid>
        </>
    )
}

export default SignUp