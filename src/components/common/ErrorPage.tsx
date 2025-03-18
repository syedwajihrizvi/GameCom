import { Heading } from "@chakra-ui/react"
import { isRouteErrorResponse, useRouteError, useNavigate } from "react-router-dom"
import { useEffect } from "react"

function ErrorPage() {
    const error = useRouteError()
    const navigate = useNavigate()
    useEffect(() => {
        const timeout = setTimeout(() => {
            localStorage.removeItem('x-auth-token')
            navigate('/')
        }, 2000)

        return () => clearTimeout(timeout)
    })
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