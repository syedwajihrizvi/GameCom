import { ChevronDownIcon } from "@chakra-ui/icons"
import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react"

export interface SortOption {
    name: string
    queryString: string

}

interface Props {
    onSortSelector: (sortOption: SortOption) => void
    currentSortOption: SortOption | undefined
}

const sortOptions = [
    {name: "Rating", queryString: "rating"} as SortOption,
    {name: "Release Date", queryString: "first_release_date"} as SortOption,
    {name: "Hypes", queryString: "hypes"} as SortOption
]
function SortSelector({onSortSelector, currentSortOption}: Props) {
    return (
        <div className='menuList'>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    Sort By: {currentSortOption ? currentSortOption .name: ""}
                </MenuButton>
                <MenuList>
                    {sortOptions.map(option =>
                    <MenuItem key={option.name} onClick={() => onSortSelector(option)} 
                    backgroundColor={option.queryString == currentSortOption?.queryString ? 'green.300' : ''}>
                        {option.name}
                    </MenuItem>)}
                </MenuList>
            </Menu>
        </div>
    )
}

export default SortSelector