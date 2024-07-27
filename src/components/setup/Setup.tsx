import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Footer from "../common/Footer"
import NavBar from "../navbars/NavBar"

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