import { ChevronDownIcon } from "@chakra-ui/icons";
import { SimpleGrid, Center, HStack, Menu, MenuButton, Button, MenuList, MenuItem, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.png"
import { Link } from "react-router-dom";
import { User } from "../../entities/User";

interface Props {
    user: User | undefined
}

function NavBar({user}: Props) {
    return (
        <SimpleGrid columns={{lg:2, md:1}} spacingX="100vh" spacingY={3} paddingBottom={3}>
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
                        {!user?.id && <Link to='/login'>Sign In</Link>}
                        {user?.id && <Link to='/games'>Games</Link>}
                    </Button>
                </HStack>
            </Center>
        </SimpleGrid>
    )
}

export default NavBar