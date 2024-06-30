import { Heading } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError } from "react-router-dom"

function ErrorPage() {
    const error = useRouteError()
    return (
        <>  
            {isRouteErrorResponse(error) &&
                <>
                    <Heading>Oops.</Heading>
                    <Heading>The requested page does not exist</Heading>
                </>
            }
            {!isRouteErrorResponse(error) && <Heading>Something went wrong</Heading>}
        </>
    )
}

export default ErrorPage