import { HStack, Image, Input, Switch} from "@chakra-ui/react"
import logo from "../assets/logo.webp"

interface Props {
    handleSwitchChange: () => void
}

function NavBar({handleSwitchChange}: Props){
    return (
        <HStack padding={2}>
            <Image boxSize="100px" src={logo}/>
            <Input borderRadius={10} color='red.300' placeholder='Search' />
            <Switch colorScheme='red' size='lg' onChange={handleSwitchChange}/>
        </HStack>
    )
}

export default NavBar