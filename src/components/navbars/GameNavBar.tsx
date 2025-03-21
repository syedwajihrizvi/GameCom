import { Button, Image, Input, InputGroup, InputLeftElement, InputRightElement, Switch, MenuButton, Menu, MenuItem, MenuList, Flex, HStack} from "@chakra-ui/react"
import logo from "../../assets/logo.png"
import { CloseIcon } from "@chakra-ui/icons"
import useQueryStore from "../../stores/useQueryStore"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { IoSearchCircleSharp } from "react-icons/io5"
import "../../assets/css/navbar.css"
import { useGlobalContext } from "../../providers/global-provider"

interface Props {
    handleSwitchChange: () => void,
    mode: string,
}

function GameNavBar({handleSwitchChange, mode}: Props){
    const {handleSearch, resetQueryToDefault} = useQueryStore()
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const {isLoggedIn, user, isLoading} = useGlobalContext()

    useEffect(() => {
        if (isLoading) return;
    }, [isLoading])
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

    const signOut = () => {
        localStorage.removeItem('x-auth-token')
        navigate('/login')
    }

    return (
        <Flex className="navbar">
            <Image src={logo} cursor='pointer' onClick={() => navigate('/home')}/>
            <InputGroup>
                <InputLeftElement>
                    <IoSearchCircleSharp size={46} color="red"/>
                </InputLeftElement>
                    <Input value={search} 
                    onKeyDown={(event) => handleSearchInput(event.key, event.currentTarget.value)} 
                    onChange={(event) => setSearch(event.target.value)} borderRadius={20}
                    placeholder="Search For Games"/>
                <InputRightElement>
                    {search && <CloseIcon cursor='pointer' color='red.500' onClick={() => handleCloseIcon()}/>}
                </InputRightElement>
            </InputGroup>
            <HStack marginRight='1rem'>
                <Switch isChecked={mode=="dark"} colorScheme='red' size='lg' onChange={handleSwitchChange}/>
                {isLoggedIn ?
                <Menu>
                    <MenuButton >
                        <Button backgroundColor="red" borderRadius="100%" fontSize={18} color="white">
                            {user?.firstName.toUpperCase()}
                        </Button>
                    </MenuButton>
                    <MenuList>
                        <MenuItem onClick={() => navigate('/account')}>Settings</MenuItem>
                        <MenuItem onClick={signOut}>Sign Out</MenuItem>
                    </MenuList>
                </Menu> :
                <Link to="/home">
                    <Button backgroundColor="red" fontSize={18} color="white" paddingX={10} paddingY={5}>Sign Up</Button>
                </Link>
            }
            </HStack>
        </Flex>
    )
}

export default GameNavBar