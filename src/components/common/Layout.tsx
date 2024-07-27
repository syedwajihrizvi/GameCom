import { useColorMode } from "@chakra-ui/react"
import GameNavBar from "../navbars/GameNavBar"
import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"
import Footer from "./Footer"
import useUser from "../../hooks/useUser"

function Layout() {
    const { toggleColorMode, colorMode } = useColorMode()
    const {data: user, error, isLoading} = useUser()

    if (!localStorage.getItem('x-auth-token') || error) {
        return <Navigate to='/'/>;
    }

    if (isLoading) return <div>Loading...</div>
    
    return (
        <>
            <GameNavBar handleSwitchChange={toggleColorMode} mode={colorMode} user={user}/>
            <Outlet context={user}/>
            <Footer/>
        </>
    )
}

export default Layout