import {GridItem, Link, List, ListItem, SimpleGrid, Image, Center, Heading, Flex } from "@chakra-ui/react"

import logo from "../../assets/logo.png"

function Footer() {

    return (
        <Center backgroundColor='black' w='100%' paddingTop={10} paddingBottom={10}>
        <Flex flexDirection='column' justifyContent='center' alignItems='center'>
            <Heading color='white' as='h5' size='md' paddingBottom={10}>Questions? Call 1-844-542-4813</Heading>
            <SimpleGrid columns={{lg:4, md:2}} spacingY={10} spacingX={10} justifyContent='center' alignContent='center' justifyItems='center'>
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
        </Flex>
    </Center>
    )
}

export default Footer