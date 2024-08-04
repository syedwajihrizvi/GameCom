import { ChevronDownIcon } from "@chakra-ui/icons";
import { SimpleGrid, Center, HStack, Menu, MenuButton, Button, MenuList, MenuItem, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";

function NavBar() {
    const isLoggedIn = localStorage.getItem('x-auth-token')
    return (
        <SimpleGrid columns={{lg:2, md:1}} spacingX="100vh" spacingY={3} paddingBottom={3}>
            <Center>
                <Image src={logo} width={250} height='80px'/>
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
                        {!isLoggedIn && <Link to='/login'>Sign In</Link>}
                        {isLoggedIn && <Link to='/games'>Games</Link>}
                    </Button>
                </HStack>
            </Center>
        </SimpleGrid>
    )
}

export default NavBar