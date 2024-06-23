/* eslint-disable react-refresh/only-export-components */
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, Button, MenuList, MenuItem} from "@chakra-ui/react"
import { Platform, usePlatforms } from "../hooks/usePlatforms"
import { generatePlatformsQuery } from "../utils/query_utils"
import { PlatformIcons } from "../utils/PlatformIcons"

const allPlatforms = {
    id: 0,
    name: "All Platforms"
}

interface Props {
    onPlatformSelect: (selectedPlatform: Platform) => void
    currentPlatform: Platform
}

function PlatformSelector({onPlatformSelect, currentPlatform}: Props) {
    let {data:platforms} = usePlatforms(generatePlatformsQuery(PlatformIcons.getAllPlatformIds()))
    platforms = [{id: 0, name: "All Platforms"},...(platforms? platforms : [])]
    return (
        <div className='menuList'>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {currentPlatform.name}
                </MenuButton>
                <MenuList height={400} overflowY='scroll'>
                    {platforms?.map(platform => (
                        platform.id != currentPlatform.id) && <MenuItem onClick={() => onPlatformSelect(platform)} key={platform.id}>{platform.name}</MenuItem>
                        )
                    }
                </MenuList>
            </Menu>
        </div>
    )
}

export default PlatformSelector
export {allPlatforms}