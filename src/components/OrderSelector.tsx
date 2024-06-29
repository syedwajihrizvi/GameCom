import { TriangleUpIcon, TriangleDownIcon } from "@chakra-ui/icons";
import { ButtonGroup, IconButton } from "@chakra-ui/react";
import useQueryStore from '../stores/useQueryStore';

function OrderSelector() {
    const {order: currentOrder, handleOrderSelect} = useQueryStore()
    return (
        <div className="menuList">
            <ButtonGroup size='md' isAttached variant='outline'>
                <IconButton aria-label='Ascending' 
                            icon={<TriangleUpIcon />} 
                            onClick={() => handleOrderSelect('asc')}
                            backgroundColor={currentOrder == 'asc'? 'green': ''}/>
                <IconButton aria-label='Descending' 
                            icon={<TriangleDownIcon/>} 
                            onClick={() => handleOrderSelect('desc')}
                            backgroundColor={currentOrder == 'desc'? 'red': ''}/>
            </ButtonGroup>
        </div>
    )
}

export default OrderSelector