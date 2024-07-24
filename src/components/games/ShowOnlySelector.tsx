import { ChevronDownIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react"
import useQueryStore from "../../stores/useQueryStore"
import { useState } from "react"

const menuOptions: string[] = ["My Favorites"]

function ShowOnlySelector() {
    const {handleFavoriteSelect} = useQueryStore()
    const [showState, setShowState] = useState('Show Only')

    const handleSelect = (option: string) => {
        handleFavoriteSelect()
        setShowState(option == showState ? "Show Only":option)
    }

    return (
        <div className='menuList'>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {showState}
                </MenuButton>
                <MenuList>
                    {menuOptions.map(option => 
                    <MenuItem onClick={() => handleSelect(option)}>{option}</MenuItem>)}
                </MenuList>
            </Menu>
        </div>
    )
}

export default ShowOnlySelector