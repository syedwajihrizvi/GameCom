import { VStack, Link, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

function SideBar() {
    const {data} = useGenres()
    const genres = data?.results
    return (
        <VStack align='start' paddingStart={2}>
            {genres?.map(genre => <Text fontSize='lg' as='b'><Link key={genre.id}>{genre.name}</Link></Text>)}
        </VStack>
    )
}

export default SideBar