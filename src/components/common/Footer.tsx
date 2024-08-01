import { Flex, GridItem, Link, List, ListItem, SimpleGrid, Text, Button, VStack, useColorMode } from "@chakra-ui/react"

function Footer() {

    const {colorMode} = useColorMode()
    return (
        <Flex backgroundColor="#F7F7F7" className="footer" width="100%" justifyContent='center' marginTop={5}>
            <VStack color="black" alignItems={{md:'start', sm:'center'}} padding={10}>
                <Text>Questions? Call 1-844-542-4813</Text>
                <SimpleGrid columns={{lg: 4, md: 2}} spacingX={40} >
                    <GridItem>
                        <List spacing={4}>
                            <ListItem><Link>FAQ</Link></ListItem>
                            <ListItem><Link>Privacy</Link></ListItem>
                        </List>
                    </GridItem>
                    <GridItem>
                        <List spacing={4}>
                            <ListItem><Link>Help Center</Link></ListItem>
                            <ListItem><Link>Cookie Preferences</Link></ListItem>
                        </List>
                    </GridItem>
                    <GridItem>
                        <List spacing={4}>
                            <ListItem><Link>GameCom</Link></ListItem>
                            <ListItem><Link>Corporate Information</Link></ListItem>
                        </List>
                    </GridItem>
                    <GridItem>
                        <List spacing={4}>
                            <ListItem><Link>Terms of Use</Link></ListItem>
                            <ListItem><Link>Ad Choices</Link></ListItem>
                        </List>
                    </GridItem>
                </SimpleGrid>
                <Button color="black" border={colorMode=="dark"?"1px solid black": ""} padding={5} height="55px" width="150px">English</Button>
            </VStack>
        </Flex>
    )
}

export default Footer