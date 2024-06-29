import { HStack, Image, Input, InputGroup, InputLeftElement, Switch} from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import { SearchIcon } from "@chakra-ui/icons"
import useQueryStore from "../stores/useQueryStore"

interface Props {
    handleSwitchChange: () => void
}

function NavBar({handleSwitchChange}: Props){
    const {handleSearch} = useQueryStore()
    const handleSearchInput = (event: string, value: string) => {
        if (event == "Enter") {
            handleSearch(value ? value : '')
        }
    }

    return (
        <HStack padding={2}>
            <Image boxSize="100px" src={logo}/>
            <InputGroup>
                <InputLeftElement>
                    <SearchIcon/>
                </InputLeftElement>
                <Input id="searchInput" onKeyDown={(event) => handleSearchInput(event.key, event.currentTarget.value)} borderRadius={10} placeholder="Search For Games"/>
            </InputGroup>
            <Switch colorScheme='red' size='lg' onChange={handleSwitchChange}/>
        </HStack>
    )
}

export default NavBar