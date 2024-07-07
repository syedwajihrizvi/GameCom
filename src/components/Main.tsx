import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons"
import { Box, Button, Flex, HStack, Heading, Input, Menu, MenuButton, MenuItem, MenuList, Spacer, Text, VStack } from "@chakra-ui/react"

function Main() {
    return (
        <VStack>
            <Flex className="background" w="100%">
                <Flex w="100%">
                    <Box paddingLeft={40} paddingTop={10}>
                        <Heading>Title</Heading>
                    </Box>
                    <Spacer />
                    <Box paddingRight={40} padding={10}>
                        <HStack>
                            <Menu>
                                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                    Language
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>English</MenuItem>
                                    <MenuItem>French</MenuItem>
                                </MenuList>
                            </Menu>
                            <Button backgroundColor='red' color='white'>Sign In</Button>
                        </HStack>
                    </Box>
                </Flex>
                <Flex className="main-text" minWidth='max-content' alignItems='center'>
                    <VStack>
                        <Heading as='h1' size='3xl' fontFamily="Netflix Sans">Your Favorite Games, in your favorite place</Heading>
                        <Heading as='h5' size='lg' paddingTop={3} fontFamily="Netflix Sans">Play Anywhere. Cancel Anytime.</Heading>
                        <Heading as='h4' size='sm' paddingTop={3} paddingBottom={5} fontFamily="Netflix Sans">Ready to play? Enter your email to create or restart your membership.</Heading>
                        <HStack>
                            <Input placeholder='Email Adress' height='50px' width='360px' borderRadius={3} backgroundColor="rgba(0, 0, 0, 0.4)"/>
                            <Button rightIcon={<ChevronRightIcon boxSize={8} color='white'/>} backgroundColor='red' width="220px" height="50px" borderRadius={3}>
                                <Text fontSize='2xl' color='white'>Get Started</Text>
                            </Button>
                        </HStack>
                    </VStack>
                </Flex>
            </Flex>       
        </VStack>
    )
}

export default Main