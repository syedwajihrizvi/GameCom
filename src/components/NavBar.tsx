import { HStack, Image, Input, InputGroup, InputLeftElement, Switch} from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import { SearchIcon } from "@chakra-ui/icons"
import { useState } from "react"

interface Props {
    handleSwitchChange: () => void
    handleSearchSubmit: (keyName: string) => void
    currentSearch: string | undefined
}

function NavBar({handleSwitchChange, handleSearchSubmit, currentSearch}: Props){
    const [search, setSearch] = useState(currentSearch)
    const handleSearchInput = (event: string) => {
        if (event == "Enter")
            handleSearchSubmit(search ? search : '')
    }

    return (
        <HStack padding={2}>
            <Image boxSize="100px" src={logo}/>
            <InputGroup>
                <InputLeftElement>
                    <SearchIcon/>
                </InputLeftElement>
                <Input value={search} onKeyDown={(event) => handleSearchInput(event.key)} onChange={(event) => setSearch(event.target.value)} borderRadius={10} placeholder="Search For Games"/>
            </InputGroup>
            <Switch colorScheme='red' size='lg' onChange={handleSwitchChange}/>
        </HStack>
    )
}

export default NavBar