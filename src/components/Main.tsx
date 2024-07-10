import { Box, Button, Center, Image, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react"
import { HStack, Heading, VStack } from "@chakra-ui/react"
import logo from "../assets/logo.png"
import sectionOneImage from "../assets/image-1.png"
import sectionTwoImage from "../assets/image-2.png"
import sectionThreeImage from "../assets/image-3.png"

import { ChevronDownIcon } from "@chakra-ui/icons"
import Faq from "./Faq"
import SignUp from "./SignUp"
function Main() {
    return (
        <VStack backgroundColor='black'>
            <Box className="background" w='100%'>
                <Box className="logo">
                    <Image src={logo}/>
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
                        <SignUp/>
                    </VStack>
                </Center>
            </Box>
            <Center backgroundColor='black' w='100%' paddingTop={20}>
                <HStack>
                    <VStack color='white'>
                        <Heading as='h1' size='2xl'>Enjoy Anywhere. Enjoy Anytime</Heading>
                        <Heading as='h6' size='md' width={600}>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</Heading>
                    </VStack>
                    <Image src={sectionOneImage} height={300}/>
                </HStack>
            </Center>
            <Box backgroundColor='gray.800' width='100%' height='10px'/>
            <Center backgroundColor='black' w='100%' paddingTop={20} paddingBottom={20}>
                <HStack spacing={60}>
                <Image src={sectionTwoImage} height={350}/>
                    <VStack color='white'>
                        <Heading as='h1' size='2xl'>Play Anywhere. Play Anytime</Heading>
                        <Heading as='h6' size='md'>Stream your favorite games anywhere you want. View our current plants.</Heading>
                    </VStack>
                </HStack>
            </Center>
            <Box backgroundColor='gray.800' width='100%' height='10px'/>
            <Center backgroundColor='black' w='100%' paddingTop={20} paddingBottom={20}>
                <HStack spacing={60}>
                    <VStack color='white'>
                        <Heading as='h1' size='2xl'>Download your games offline.</Heading>
                        <Heading as='h6' size='md'>Play on a plane, train, or submarine...</Heading>
                    </VStack>
                </HStack>
                <Image src={sectionThreeImage} height={350}/>
            </Center>
            <Box backgroundColor='gray.800' width='100%' height='10px'/>
            <Center backgroundColor='black' w='100%' paddingTop={10} paddingBottom={10}>
                <VStack>
                    <Heading size='2xl' color='white' paddingBottom={5}>Frequently Asked Questions</Heading>
                    <Faq/>
                    <Faq/>
                    <Faq/>
                    <Faq/>
                    <Faq/>
                    <SignUp/>
                </VStack>
            </Center>

        </VStack>
    )
}

export default Main