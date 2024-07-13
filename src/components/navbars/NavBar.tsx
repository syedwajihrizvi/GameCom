import { ChevronDownIcon } from "@chakra-ui/icons";
import { SimpleGrid, Center, HStack, Menu, MenuButton, Button, MenuList, MenuItem, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png"

function NavBar() {
    return (
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
    )
}

export default NavBar