import { Box, Center, Image, Stack, Button} from "@chakra-ui/react"
import { Heading, VStack } from "@chakra-ui/react"
import sectionOneImage from "../../assets/image-1.webp"
import sectionTwoImage from "../../assets/image-2.webp"
import sectionThreeImage from "../../assets/image-3.webp"
import {Faqs, faqs} from "../../utils/faqs"
import Faq from "./Faq"
import SignUp from "../setup/SignUp"
import NavBar from "../navbars/NavBar"
import { useNavigate } from "react-router-dom"

import "../../assets/css/main.css"
import Divider from "./Divider"
import Footer from "./Footer"

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
                    <Stack className="main-section__text" color="white" textAlign='center'>
                        <Heading width="100%" as='h1' size='3xl'>Enjoy Anywhere. Enjoy Anytime.</Heading>
                        <Heading as='h6' size='sm'>Play on Smart TVs, tablets, laptops, phones, and more.</Heading>
                    </Stack>
                    <Image src={sectionOneImage} height={300}/>
                </Box>
                <Divider/>
                <Box className="main-section">
                    <Image src={sectionTwoImage} height={300}/>
                    <Stack className="main-section__text" color="white" textAlign='center'>
                        <Heading as='h1' size='3xl'>Play Anywhere. Play Anytime.</Heading>
                        <Heading as='h6' size='sm'>Stream your favorite games anywhere you want.</Heading>
                    </Stack>
                </Box>
                <Divider/>
                <Box className="main-section">
                    <Stack className="main-section__text" color="white" textAlign='center'>
                        <Heading as='h1' size='3xl'>Download your games offline.</Heading>
                        <Heading as='h6' size='sm'>Play on a plane, train, or even a submarine.</Heading>
                    </Stack>
                    <Image src={sectionThreeImage} height={300}/>
                </Box>
                <Divider/>
                <Center backgroundColor='black' width='100%'>
                    <VStack>
                        <Heading textAlign='center' size='2xl' color='white' paddingBottom={5}>Frequently Asked Questions</Heading>
                        {faqs.map((faq:Faqs) => <Faq question={faq.question} answer={faq.answer}/>)}
                        {!isLoggedIn && <SignUp/>}
                        {isLoggedIn && 
                        <Button backgroundColor="red"  color="white" height={55} fontSize={32} padding={5} borderRadius={3} onClick={() => navigate('/games')}>
                            View All Games
                        </Button>}
                    </VStack>
                </Center>
                <Divider/>
                <Footer/>
            </VStack>

    )
}

export default Main