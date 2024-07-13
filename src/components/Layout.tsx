import { useColorMode } from "@chakra-ui/react"
import GameNavBar from "./navbars/GameNavBar"
import { Outlet } from "react-router-dom"

function Layout() {
    const { toggleColorMode } = useColorMode()
    return (
        <>
            <GameNavBar handleSwitchChange={toggleColorMode}/>
            <Outlet/>
        </>
    )
}

export default Layout