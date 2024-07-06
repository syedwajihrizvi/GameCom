import { Heading, List, ListIcon, ListItem} from "@chakra-ui/react"
import { MdCheckCircle } from "react-icons/md";

export interface Detail {
    name: string;
}

interface Props {
    heading: string,
    details: Detail[]
}

function SpecificDetails({heading, details}: Props) {
    return (
        <>
            <Heading fontSize={{md:22}} color='gray.600'>{heading}</Heading>
            { details && <List spacing={1}>
                {details.map(detail => 
                <ListItem fontSize={{md:16}}>
                    <ListIcon as={MdCheckCircle} color='red.500'/>
                    {detail.name}
                </ListItem>)}
            </List>}
        </>
    )
}

export default SpecificDetails