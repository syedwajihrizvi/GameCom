import { VStack, Link, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";

interface Props {
    onGenreSelect : (genreID: number) => void
    currentGenre: number | undefined
}

function SideBar({onGenreSelect, currentGenre}: Props) {
    const {data:genres} = useGenres()

    const setGenreBackgroundColor = (genreID: number) => {
        return currentGenre == genreID ? 'red.300' : undefined
    }

    const allGenres = (
        <Text backgroundColor={setGenreBackgroundColor(0)} key={0} fontSize='lg' as='b' borderRadius={5} padding={3}>
            <Link onClick={() => onGenreSelect(0)} key='allGenres'>All Genres</Link>
        </Text>
    )
    return (
        <VStack align='start' paddingStart={4}>
            {allGenres}
            {genres?.map(genre => 
                <Text backgroundColor={setGenreBackgroundColor(genre.id)} key={`${genre.id}_${genre.name}`} fontSize='lg' as='b' borderRadius={5} padding={3}>
                    <Link onClick={() => onGenreSelect(genre.id)} key={genre.id}>{genre.name}</Link>
                </Text>)}
        </VStack>
    )
}

export default SideBar