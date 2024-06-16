import { VStack, Link, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

function SideBar() {
    const {data:genres} = useGenres()
    return (
        <VStack align='start' paddingStart={4}>
            {genres?.map(genre => <Text key={`${genre.id}_${genre.name}`}fontSize='lg' as='b'><Link key={genre.id}>{genre.name}</Link></Text>)}
        </VStack>
    )
}

export default SideBar