import { Box, Center, Image,SimpleGrid, GridItem, List, ListItem, Link, Stack, Button} from "@chakra-ui/react"
import { Heading, VStack } from "@chakra-ui/react"
import logo from "../../assets/logo.png"
import sectionOneImage from "../../assets/image-1.png"
import sectionTwoImage from "../../assets/image-2.png"
import sectionThreeImage from "../../assets/image-3.png"
import {Faqs, faqs} from "../../utils/faqs"
import Faq from "./Faq"
import SignUp from "../setup/SignUp"
import NavBar from "../navbars/NavBar"
import { useNavigate } from "react-router-dom"

import "../../assets/css/main.css"

function Main() {
    const navigate = useNavigate()
    const isLoggedIn = localStorage.getItem('x-auth-token')

    return (
            <VStack backgroundColor='black' width="100%" overflow='hidden'>
                <Box className="background" width='100%'>
                    <NavBar/>
                    <Box className="register-main">
                        <VStack textAlign='center'>
                            <Heading color="white" as='h1' size='3xl'>Unlimited Games, streams, and more.</Heading>
                            <Heading color="white" as='h6' size='lg'>Play Anywhere. Cancel Anytime.</Heading>
                            {!isLoggedIn && <SignUp/>}
                            {isLoggedIn && 
                            <Button backgroundColor="red" color="white" height={55} fontSize={32} padding={5} borderRadius={3} onClick={() => navigate('/games')}>
                                View All Games
                            </Button>}
                        </VStack>
                    </Box>
                </Box>
                <Box className="main-section">
                    <Stack color="white" textAlign='center'>
                        <Heading as='h1' size='3xl'>Enjoy Anywhere. Enjoy Anytime.</Heading>
                        <Heading as='h6' size='sm'>Play on Smart TVs, tablets, laptops, phones, and more.</Heading>
                    </Stack>
                    <Image src={sectionOneImage} height={300}/>
                </Box>
                <Box backgroundColor='gray.800' width='100%' height='10px'/>
                <Box className="main-section">
                    <Image src={sectionTwoImage} height={300}/>
                    <Stack color="white" textAlign='center'>
                        <Heading as='h1' size='3xl'>Play Anywhere. Play Anytime.</Heading>
                        <Heading as='h6' size='sm'>Stream your favorite games anywhere you want.</Heading>
                    </Stack>
                </Box>
                <Box backgroundColor='gray.800' width='100%' height='10px'/>
                <Box className="main-section">
                    <Stack color="white" textAlign='center'>
                        <Heading as='h1' size='3xl'>Download your games offline.</Heading>
                        <Heading as='h6' size='sm'>Play on a plane, train, or even a submarine.</Heading>
                    </Stack>
                    <Image src={sectionThreeImage} height={300}/>
                </Box>
                <Box backgroundColor='gray.800' width='100%' height='10px'/>
                <Center backgroundColor='black' width='100%'>
                    <VStack>
                        <Heading textAlign='center' size='2xl' color='white' paddingBottom={5}>Frequently Asked Questions</Heading>
                        {faqs.map((faq:Faqs) => <Faq question={faq.question} answer={faq.answer}/>)}
                        {!isLoggedIn && <SignUp/>}
                        {isLoggedIn && 
                        <Button backgroundColor="red"  height={55} fontSize={32} padding={5} borderRadius={3} onClick={() => navigate('/games')}>
                            View All Games
                        </Button>}
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