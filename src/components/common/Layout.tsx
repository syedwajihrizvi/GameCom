import { useColorMode } from "@chakra-ui/react"
import GameNavBar from "../navbars/GameNavBar"
import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"
import Footer from "./Footer"

function Layout() {
    const { toggleColorMode, colorMode } = useColorMode()
    if (!localStorage.getItem('x-auth-token')) {
        console.log("No X-AUTH-TOKEN")
        return <Navigate to='/'/>;
    }

    return (
        <>
            <GameNavBar handleSwitchChange={toggleColorMode} mode={colorMode}/>
            <Outlet/>
            <Footer/>
        </>
    )
}

export default Layout