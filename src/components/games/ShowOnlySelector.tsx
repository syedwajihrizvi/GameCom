import { ChevronDownIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react"
import useQueryStore from "../../stores/useQueryStore"

function ShowOnlySelector() {
    const {handleFavoriteSelect} = useQueryStore()
    return (
        <div className='menuList'>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Show Only
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => handleFavoriteSelect()}>My Favorites</MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}

export default ShowOnlySelector