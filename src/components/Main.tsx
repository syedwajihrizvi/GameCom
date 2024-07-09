import { Box, Button, Center, Image, Input, Menu, MenuButton, MenuItem, MenuList, Text } from "@chakra-ui/react"
import { HStack, Heading, VStack } from "@chakra-ui/react"
import sectionOneImage from "../assets/image-1.png"
import sectionTwoImage from "../assets/image-2.png"
import { ChevronRightIcon, ChevronDownIcon } from "@chakra-ui/icons"
function Main() {
    return (
        <VStack backgroundColor='black'>
            <Box className="background" w='100%'>
                <Box className="logo">
                    <Heading>TITLE</Heading>
                </Box>
                <Box className="header-buttons">
                    <HStack>
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} color='white' backgroundColor='rgba(22, 0, 0, 0.2)'>
                                Language
                            </MenuButton>
                            <MenuList>
                                <MenuItem>English</MenuItem>
                                <MenuItem>French</MenuItem>
                            </MenuList>
                        </Menu>
                        <Button backgroundColor='red' color='white'>
                            Sign In
                        </Button>
                    </HStack>
                </Box>
                <Center className="register-main">
                    <VStack>
                        <Heading color="white" as='h2' size='3xl'>Unlimited Games, streams, and more.</Heading>
                        <Heading color="white" as='h4' size='lg'>Play Anywhere. Cancel Anytime</Heading>
                        <Text color="white" as="b" fontSize='lg'>Ready to watch? Enter your email to create or restart your membership.</Text>
                        <HStack>
                            <Input placeholder='Enter Email Address' height={55} borderRadius={1} backgroundColor='rgba(22, 0, 0, 0.2)'/>
                            <Button backgroundColor='red' color="white" width={340} height={55} borderRadius={2} rightIcon={<ChevronRightIcon boxSize={8}/>}>
                                <Text as='b' fontSize='2xl'>Get Started</Text>
                            </Button>
                        </HStack>
                    </VStack>
                </Center>
            </Box>
            <Center backgroundColor='black' w='100%' paddingTop={20}>
                <HStack>
                    <VStack color='white'>
                        <Heading as='h1' size='2xl'>Enjoy Anywhere. Enjoy Anytime</Heading>
                        <Heading as='h5' size='lg'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</Heading>
                    </VStack>
                    <Image src={sectionOneImage} height={300}/>
                </HStack>
            </Center>   
            <Center backgroundColor='black' w='100%' paddingTop={20}>
                <HStack spacing={60}>
                <Image src={sectionTwoImage} height={350}/>
                    <VStack color='white'>
                        <Heading as='h1' size='2xl'>Play Anywhere.</Heading>
                        <Heading as='h5' size='lg'>Stream your favorite games anywhere you want. View our current plants.</Heading>
                    </VStack>
                </HStack>
            </Center>  
        </VStack>
    )
}

export default Main