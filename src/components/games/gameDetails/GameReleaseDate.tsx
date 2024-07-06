import { Heading} from "@chakra-ui/react";
import moment from "moment"

interface Props {
    release_date: number
}
function GameReleaseDate({release_date}: Props) {

    const renderReleaseDate = (unix_timestamp: number) => {
        const date = moment.unix(unix_timestamp)
        return date.format("MMM Do YYYY")
    }
    return (
        <>
            <Heading as='h2' size='md' fontFamily='sans-serif'>Release Date</Heading>
            <Heading as='h4' size='xs' color='gray.500'>{renderReleaseDate(release_date)}</Heading>
        </>
    )
}

export default GameReleaseDate

