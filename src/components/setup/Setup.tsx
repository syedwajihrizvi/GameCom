import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import Footer from "../common/Footer"
import NavBar from "../navbars/NavBar"
import useUser from "../../hooks/useUser"

function SetUp() {
    const {data: user} = useUser()
    return (
        <Box>
            <NavBar user={user}/>
            <Outlet/>
            <Footer/>
        </Box>
    )
}

export default SetUp