import { ChevronDownIcon } from "@chakra-ui/icons";
import { HStack, Menu, MenuButton, Button, MenuList, MenuItem, Image, Flex } from "@chakra-ui/react";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import '../../assets/css/navbar.css'

function NavBar() {
    const isLoggedIn = localStorage.getItem('x-auth-token')
    return (
        <Flex className="navbar">
            <Image src={logo}/>
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
        </Flex>
    )
}

export default NavBar