/* eslint-disable react-refresh/only-export-components */
import { VStack, Link, Text } from "@chakra-ui/react";
import useGenres, { allGenre } from "../../hooks/useGenres";
import useQueryStore from "../../stores/useQueryStore";

function SideBar() {
    const {genre:currentGenre, handleGenre} = useQueryStore()
    const {data:genres} = useGenres()

    const setGenreBackgroundColor = (genreID: number) => {
        return currentGenre.id == genreID ? 'red' : undefined
    }

    const allGenres = (
        <Text backgroundColor={setGenreBackgroundColor(0)} key={0} fontSize='lg' as='b' borderRadius={5} padding={1}>
            <Link onClick={() => handleGenre(allGenre)} key='allGenres'>All Genres</Link>
        </Text>
    )
    return (
        <VStack height="95vh" overflowY="scroll" align='start' paddingStart={4} width="100%">
            {allGenres}
            {genres?.map(genre => 
                <Text backgroundColor={setGenreBackgroundColor(genre.id)} key={`${genre.id}_${genre.name}`} fontSize='lg' as='b' borderRadius={5} padding={1}>
                    <Link _hover='none' onClick={() => handleGenre(genre)} key={genre.id}>{genre.name}</Link>
                </Text>)}
        </VStack>
    )
}

export default SideBar