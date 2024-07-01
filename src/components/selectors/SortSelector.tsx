import { ChevronDownIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react"
import useQueryStore from '../../stores/useQueryStore';
import { SortOption } from "../../entities/SortOption";

const sortOptions = [
    {name: "Rating", queryString: "rating"} as SortOption,
    {name: "Release Date", queryString: "first_release_date"} as SortOption,
    {name: "Hypes", queryString: "hypes"} as SortOption
]

function SortSelector() {
    const {sort: currentSortOption, handleSortSelect} = useQueryStore()
    return (
        <div className='menuList'>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Sort By: {currentSortOption ? currentSortOption .name: ""}
                </MenuButton>
                <MenuList>
                    {sortOptions.map(option =>
                    <MenuItem key={option.name} onClick={() => handleSortSelect(option)} 
                    backgroundColor={option.queryString == currentSortOption?.queryString ? 'green.300' : ''}>
                        {option.name}
                    </MenuItem>)}
                </MenuList>
            </Menu>
        </div>
    )
}

export default SortSelector