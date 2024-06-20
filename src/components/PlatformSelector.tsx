import { ChevronDownIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, Button, MenuList, MenuItem} from "@chakra-ui/react"

function PlatformSelector() {
    return (
        <div className='platformsMenu'>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Platforms
                </MenuButton>
                <MenuList>
                    <MenuItem>All Platforms</MenuItem>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}

export default PlatformSelector