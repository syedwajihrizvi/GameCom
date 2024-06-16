import { Spinner } from "@chakra-ui/react"

function InfiniteLoader() {
    return (
        <div className="loader"><Spinner size='md' color='red.500'/></div>
    )
}

export default InfiniteLoader