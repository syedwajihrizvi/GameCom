/* eslint-disable react-refresh/only-export-components */
import { VStack, Link, Text } from "@chakra-ui/react";
import useGenres, { allGenre } from "../hooks/useGenres";
import useQueryStore from "../stores/useQueryStore";

function SideBar() {
    const {genre:currentGenre, handleGenre} = useQueryStore()
    const {data:genres} = useGenres()

    const setGenreBackgroundColor = (genreID: number) => {
        return currentGenre.id == genreID ? 'red.300' : undefined
    }

    const allGenres = (
        <Text backgroundColor={setGenreBackgroundColor(0)} key={0} fontSize='lg' as='b' borderRadius={5} padding={3}>
            <Link onClick={() => handleGenre(allGenre)} key='allGenres'>All Genres</Link>
        </Text>
    )
    return (
        <VStack align='start' paddingStart={4}>
            {allGenres}
            {genres?.map(genre => 
                <Text backgroundColor={setGenreBackgroundColor(genre.id)} key={`${genre.id}_${genre.name}`} fontSize='lg' as='b' borderRadius={5} padding={3}>
                    <Link _hover='none' onClick={() => handleGenre(genre)} key={genre.id}>{genre.name}</Link>
                </Text>)}
        </VStack>
    )
}

export default SideBar