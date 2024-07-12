import { Box, Button, Center, Image, Menu, MenuButton, MenuItem, MenuList, SimpleGrid, GridItem, List, ListItem, Link} from "@chakra-ui/react"
import { HStack, Heading, VStack } from "@chakra-ui/react"
import logo from "../assets/logo.png"
import sectionOneImage from "../assets/image-1.png"
import sectionTwoImage from "../assets/image-2.png"
import sectionThreeImage from "../assets/image-3.png"
import {Faqs, faqs} from "../utils/faqs"
import { ChevronDownIcon } from "@chakra-ui/icons"
import Faq from "./Faq"
import SignUp from "./SignUp"
function Main() {
    return (
            <VStack backgroundColor='black' width="100%">
                <Box className="background" width='100%'>
                    <SimpleGrid columns={{lg:2, md:1}} spacingX="100vh" spacingY={3}>
                        <Center>
                            <Image src={logo}/>
                        </Center>
                        <Center>
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
                        </Center>
                    </SimpleGrid>
                    <Center className="register-main">
                        <VStack>
                            <Heading color="white" as='h1' size='3xl'>Unlimited Games, streams, and more.</Heading>
                            <Heading color="white" as='h6' size='lg'>Play Anywhere. Cancel Anytime</Heading>
                            <SignUp/>
                        </VStack>
                    </Center>
                </Box>
                <Center backgroundColor='black' w='100%' paddingTop={20}>
                    <SimpleGrid columns={{lg: 2, md:1}}>
                        <Center>
                            <VStack color='white' paddingTop={20}>
                                <Heading as='h1' size='3xl'>Enjoy Anywhere. Enjoy Anytime</Heading>
                                <Heading as='h6' size='md' width={600}>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</Heading>
                            </VStack>
                        </Center>
                        <Center>
                            <Image src={sectionOneImage} height={300}/>
                        </Center>
                    </SimpleGrid>
                </Center>
                <Box backgroundColor='gray.800' width='100%' height='10px'/>
                <Center backgroundColor='black' w='100%' paddingTop={20} paddingBottom={20}>
                    <SimpleGrid columns={{lg: 2, md:1}}>
                        <Center>
                            <Image src={sectionTwoImage} height={350}/>
                        </Center>
                        <Center>
                            <VStack color='white' paddingTop={20}>
                                <Heading as='h1' size='3xl'>Play Anywhere. Play Anytime</Heading>
                                <Heading as='h6' size='md'>Stream your favorite games anywhere you want. View our current plants.</Heading>
                            </VStack>
                        </Center>
                    </SimpleGrid>
                </Center>
                <Box backgroundColor='gray.800' width='100%' height='10px'/>
                <Center backgroundColor='black' w='100%' paddingTop={20} paddingBottom={20}>
                    <SimpleGrid columns={{lg: 2, md:1}}>
                        <Center>
                            <VStack color='white' paddingTop={20}>
                                <Heading as='h1' size='2xl'>Download your games offline.</Heading>
                                <Heading as='h6' size='md'>Play on a plane, train, or submarine...</Heading>
                            </VStack>
                        </Center>
                        <Center>
                            <Image src={sectionThreeImage} height={350}/>
                        </Center>
                    </SimpleGrid>
                </Center>
                <Box backgroundColor='gray.800' width='100%' height='10px'/>
                <Center backgroundColor='black' w='100%' paddingTop={10} paddingBottom={10}>
                    <VStack>
                        <Heading size={{lg:'2xl', md:'lg'}} color='white' paddingBottom={5}>Frequently Asked Questions</Heading>
                        {faqs.map((faq:Faqs) => <Faq question={faq.question} answer={faq.answer}/>)}
                        <SignUp/>
                    </VStack>
                </Center>
                <Box backgroundColor='gray.800' width='100%' height='10px'/>
                <Center backgroundColor='black' w='100%' paddingTop={10} paddingBottom={10}>
                    <VStack>
                        <Heading color='white' as='h5' size='md' paddingBottom={10}>Questions? Call 1-844-542-4813</Heading>
                        <SimpleGrid columns={{lg:4, md:2}} spacingX={40} spacingY={10}>
                            <GridItem>
                                <List spacing={2}>
                                    <ListItem><Link color='white'>FAQ</Link></ListItem>
                                    <ListItem><Link color='white'>Account</Link></ListItem>
                                    <ListItem><Link color='white'>Investor Relations</Link></ListItem>
                                    <ListItem><Link color='white'>GameCom Shop</Link></ListItem>
                                    <ListItem><Link color='white'>Buy Gift Cards</Link></ListItem>
                                </List>
                            </GridItem>
                            <GridItem>
                                <List spacing={2}>
                                    <ListItem><Link color='white'>Terms of Use</Link></ListItem>
                                    <ListItem><Link color='white'>Cookie Preferences</Link></ListItem>
                                    <ListItem><Link color='white'>Contact Us</Link></ListItem>
                                    <ListItem><Link color='white'>Legal Notices</Link></ListItem>
                                    <ListItem><Link color='white'>Ad Choices</Link></ListItem>
                                </List>
                            </GridItem>
                            <GridItem>
                                <List spacing={2}>
                                    <ListItem><Link color='white'>Help Center</Link></ListItem>
                                    <ListItem><Link color='white'>Media Center</Link></ListItem>
                                    <ListItem><Link color='white'>Jobs</Link></ListItem>
                                    <ListItem><Link color='white'>Redeem Gift Cards</Link></ListItem>
                                    <ListItem><Link color='white'>Ways to watch</Link></ListItem>
                                </List>
                            </GridItem>
                            <GridItem>                            
                                <List spacing={2}>
                                    <ListItem><Link color='white'>Privacy</Link></ListItem>
                                    <ListItem><Link color='white'>Corporate Information</Link></ListItem>
                                    <ListItem><Link color='white'>Speed Test</Link></ListItem>
                                    <ListItem><Link color='white'>Only on GameCom</Link></ListItem>
                                    <ListItem><Link color='white'>Careers</Link></ListItem>
                                </List>
                            </GridItem>
                        </SimpleGrid>
                        <Image src={logo} marginTop={10}/>
                    </VStack>
                </Center>
            </VStack>

    )
}

export default Main