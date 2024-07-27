import { Center, Spinner } from "@chakra-ui/react"

function InfiniteLoader() {
    return (
        <Center>
            <div className="loader"><Spinner size='md' color='red.500'/></div>
        </Center>
    )
}

export default InfiniteLoader