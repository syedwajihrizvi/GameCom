import { HStack, Image, Input, InputGroup, InputLeftElement, InputRightElement, Switch} from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import { SearchIcon, CloseIcon } from "@chakra-ui/icons"
import useQueryStore from "../stores/useQueryStore"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

interface Props {
    handleSwitchChange: () => void
}

function NavBar({handleSwitchChange}: Props){
    const {handleSearch, resetQueryToDefault} = useQueryStore()
    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    const handleSearchInput = (event: string, value: string) => {
        if (event == "Enter") {
            handleSearch(value ? value : '')
            navigate('/')
        }
    }

    const handleCloseIcon = () => {
        setSearch('')
        resetQueryToDefault()
        navigate('/')
    }

    return (
        <HStack padding={2}>
            <Image boxSize="100px" src={logo} cursor='pointer' onClick={() => navigate('/')}/>
            <InputGroup>
                <InputLeftElement>
                    <SearchIcon/>
                </InputLeftElement>
                <Input value={search} onKeyDown={(event) => handleSearchInput(event.key, event.currentTarget.value)} onChange={(event) => setSearch(event.target.value)} borderRadius={10} placeholder="Search For Games"/>
                <InputRightElement>
                {search && <CloseIcon cursor='pointer' color='red.500' onClick={() => handleCloseIcon()}/>}
                </InputRightElement>
            </InputGroup>
            <Switch colorScheme='red' size='lg' onChange={handleSwitchChange}/>
        </HStack>
    )
}

export default NavBar