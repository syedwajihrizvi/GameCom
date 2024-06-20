import { ChevronDownIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, Button, MenuList, MenuItem} from "@chakra-ui/react"
import { usePlatforms } from "../hooks/usePlatforms"
import { generatePlatformsQuery } from "../utils/query_utils"
import { PlatformIcons } from "../utils/PlatformIcons"

function PlatformSelector() {
    const {data:platforms} = usePlatforms(generatePlatformsQuery(PlatformIcons.getAllPlatformIds()))

    return (
        <div className='platformsMenu'>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Platforms
                </MenuButton>
                <MenuList height={400} overflowY='scroll'>
                    <MenuItem>All Platforms</MenuItem>
                    {platforms?.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
                </MenuList>
            </Menu>
        </div>
    )
}

export default PlatformSelector