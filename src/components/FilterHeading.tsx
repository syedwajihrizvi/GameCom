import { Heading } from "@chakra-ui/react"
import { GameMode } from "../hooks/useGameModes"
import { Genre } from "../hooks/useGenres"
import { Platform } from "../hooks/usePlatforms"

interface Props {
    genre: Genre,
    platform: Platform,
    gameMode: GameMode
}

function FilterHeading({genre, platform, gameMode}: Props) {

    const renderGameHeading = () => {
        let gameHeading = ''
        if (platform.id != 0)
            gameHeading += platform.name + " "
        if (gameMode.id != 0)
            gameHeading += gameMode.name + " "
        if (genre.id != 0)
            gameHeading += genre.name + " "
        gameHeading += "Games"
        return gameHeading
    }

    return (
        <div className="menuList">
            <Heading as='h2' size='3xl' noOfLines={1} paddingBottom='15px'>
                {renderGameHeading()}
            </Heading>
        </div>
    )
}

export default FilterHeading