import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import NavBar from "./navbars/NavBar"

function SetUp() {
    return (
        <Box>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </Box>
    )
}

export default SetUp