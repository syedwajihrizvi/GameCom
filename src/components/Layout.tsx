import { useColorMode } from "@chakra-ui/react"
import GameNavBar from "./navbars/GameNavBar"
import { Outlet } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Footer from "./Footer"

function Layout() {
    const navigate = useNavigate()
    const { toggleColorMode, colorMode } = useColorMode()
    if (!localStorage.getItem('userJWT'))
        navigate('/')

    return (
        <>
            <GameNavBar handleSwitchChange={toggleColorMode} mode={colorMode}/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout