import { Heading } from "@chakra-ui/react"
import useQueryStore from "../../stores/useQueryStore"

function FilterHeading() {
    const {platform, gameMode, genre} = useQueryStore()
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