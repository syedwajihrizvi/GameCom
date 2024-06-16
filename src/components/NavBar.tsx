import { HStack, Image, Input, InputGroup, InputLeftElement, Switch} from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import { SearchIcon } from "@chakra-ui/icons"

interface Props {
    handleSwitchChange: () => void
    handleSearchSubmit: (keyName: string) => void
}

function NavBar({handleSwitchChange, handleSearchSubmit}: Props){

    const handleSearchInput = (event: string, target: HTMLInputElement) => {
        if (event == "Enter")
            handleSearchSubmit(target.value)
    }

    return (
        <HStack padding={2}>
            <Image boxSize="100px" src={logo}/>
            <InputGroup>
                <InputLeftElement>
                    <SearchIcon/>
                </InputLeftElement>
                <Input onKeyDown={(event) => handleSearchInput(event.key, event.currentTarget)} borderRadius={10} placeholder="Search For Games"/>
            </InputGroup>
            <Switch colorScheme='red' size='lg' onChange={handleSwitchChange}/>
        </HStack>
    )
}

export default NavBar