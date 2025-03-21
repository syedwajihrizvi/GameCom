import { useColorMode } from "@chakra-ui/react"
import GameNavBar from "../navbars/GameNavBar"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"

function Layout() {
    const { toggleColorMode, colorMode } = useColorMode()
    
    return (
        <>
            <GameNavBar handleSwitchChange={toggleColorMode} mode={colorMode}/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout