import { useColorMode } from "@chakra-ui/react"
import NavBar from "./NavBar"
import { Outlet } from "react-router-dom"

function Layout() {
    const { toggleColorMode } = useColorMode()
    return (
        <>
            <NavBar handleSwitchChange={toggleColorMode}/>
            <Outlet/>
        </>
    )
}

export default Layout