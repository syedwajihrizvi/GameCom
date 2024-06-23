import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { ButtonGroup, IconButton } from "@chakra-ui/react";

interface Props {
    onOrderSelector :(order: string) => void
    currentOrder: string
}

function OrderSelector({onOrderSelector, currentOrder}: Props) {

    return (
        <div className="menuList">
            <ButtonGroup size='md' isAttached variant='outline'>
                <IconButton aria-label='Ascending' 
                            icon={<TriangleUpIcon />} 
                            onClick={() => onOrderSelector('asc')}
                            backgroundColor={currentOrder == 'asc'? 'green': ''}/>
                <IconButton aria-label='Descending' 
                            icon={<TriangleDownIcon/>} 
                            onClick={() => onOrderSelector('desc')}
                            backgroundColor={currentOrder == 'desc'? 'green': ''}/>
            </ButtonGroup>
        </div>
    )
}

export default OrderSelector