import { Box} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Footer from "./common/Footer";

function LandingPage() {
    return (
        <Box className="landingGrid">
            <Box className="main">
                <Outlet/>
            </Box>
            <Box className="footer">
                <Footer/>
            </Box>
        </Box>
    )
}

export default LandingPage