import { useColorMode } from "@chakra-ui/react"
import GameNavBar from "./navbars/GameNavBar"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Layout() {
    const navigate = useNavigate()
    const { toggleColorMode } = useColorMode()

    if (!localStorage.getItem('userJWT'))
        navigate('/')

    return (
        <>
            <GameNavBar handleSwitchChange={toggleColorMode}/>
            <Outlet/>
        </>
    )
}

export default Layout