import { Box, useColorMode } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Footer from "../common/Footer"
import NavBar from "../navbars/NavBar"
import "../../assets/css/setup.css"

function SetUp() {
    const {colorMode, toggleColorMode} = useColorMode()

    // Needed since Chakra by default deploys with dark mode on producuction
    if (colorMode == "dark")
        toggleColorMode()
    return (
        <Box>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </Box>
    )
}

export default SetUp