import { Button, HStack, Image, Input, InputGroup, InputLeftElement, InputRightElement, Switch, MenuButton, Menu, MenuItem, MenuList} from "@chakra-ui/react"
import logo from "../../assets/logo.png"
import { CloseIcon } from "@chakra-ui/icons"
import useQueryStore from "../../stores/useQueryStore"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { IoSearchCircleSharp } from "react-icons/io5"

interface Props {
    handleSwitchChange: () => void,
    mode: string
}

function GameNavBar({handleSwitchChange, mode}: Props){
    const {handleSearch, resetQueryToDefault} = useQueryStore()
    const navigate = useNavigate()
    const [search, setSearch] = useState('')

    const handleSearchInput = (event: string, value: string) => {
        if (event == "Enter") {
            handleSearch(value ? value : '')
            navigate('/games')
        }
    }

    const handleCloseIcon = () => {
        setSearch('')
        resetQueryToDefault()
        navigate('/games')
    }

    const signOut = () => {
        localStorage.removeItem('x-auth-token')
        navigate('/login')
    }

    return (
        <HStack padding={2}>
            <Image src={logo} cursor='pointer' onClick={() => navigate('/games')}/>
            <InputGroup>
                <InputLeftElement>
                    <IoSearchCircleSharp size={46} color="red"/>
                </InputLeftElement>
                    <Input value={search} onKeyDown={(event) => handleSearchInput(event.key, event.currentTarget.value)} 
                    onChange={(event) => setSearch(event.target.value)} borderRadius={20}
                    placeholder="Search For Games"/>
                <InputRightElement>
                    {search && <CloseIcon cursor='pointer' color='red.500' onClick={() => handleCloseIcon()}/>}
                </InputRightElement>
            </InputGroup>
            <Switch isChecked={mode=="dark"} colorScheme='red' size='lg' onChange={handleSwitchChange}/>
            <Menu>
                <MenuButton >
                    <Button backgroundColor="red" borderRadius="100%" fontSize={18} color="white">
                        H
                    </Button>
                </MenuButton>
                <MenuList>
                    <MenuItem>Settings</MenuItem>
                    <MenuItem onClick={signOut}>Sign Out</MenuItem>
                </MenuList>
            </Menu>
        </HStack>
    )
}

export default GameNavBar