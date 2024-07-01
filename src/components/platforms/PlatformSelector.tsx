/* eslint-disable react-refresh/only-export-components */
import { ChevronDownIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, Button, MenuList, MenuItem} from "@chakra-ui/react"
import { usePlatforms } from "../../hooks/usePlatforms"
import { generatePlatformsQuery } from "../../utils/query_utils"
import { PlatformIcons } from "../../utils/PlatformIcons"
import useQueryStore from "../../stores/useQueryStore"

const allPlatforms = {
    id: 0,
    name: "All Platforms"
}


function PlatformSelector() {
    const {platform: currentPlatform, handlePlatform} = useQueryStore()
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
                        platform.id != currentPlatform.id) && <MenuItem onClick={() => handlePlatform(platform)} key={platform.id}>{platform.name}</MenuItem>
                        )
                    }
                </MenuList>
            </Menu>
        </div>
    )
}

export default PlatformSelector
export {allPlatforms}