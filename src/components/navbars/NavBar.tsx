import { Box, Button, Image, Flex } from "@chakra-ui/react";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import '../../assets/css/navbar.css'

function NavBar() {
    const isLoggedIn = localStorage.getItem('x-auth-token')
    return (
        <Flex className="navbar">
            <Image src={logo}/>
            <Box className="buttons" paddingRight="10px" paddingLeft="10px">
                <Button backgroundColor='red' color='white' className="nav__btn" mr={5}>
                    {!isLoggedIn && <Link to='/'>View Games</Link>}
                </Button>
                <Button backgroundColor='red' color='white' className="nav__btn">
                    {!isLoggedIn && <Link to='/login'>Sign In</Link>}
                    {isLoggedIn && <Link to='/'>Games</Link>}
                </Button>
            </Box>
        </Flex>
    )
}

export default NavBar