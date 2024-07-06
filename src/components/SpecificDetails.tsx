import { Box, Heading, List, ListIcon, ListItem} from "@chakra-ui/react"
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
        <Box paddingStart={0} marginBottom={3}>
            <Heading as="h4" size='md' color='gray.600'>{heading}</Heading>
            { details && <List spacing={1}>
                {details.map(detail => 
                <ListItem>
                    <ListIcon as={MdCheckCircle} color='green.500' />
                    {detail.name}
                </ListItem>)}
            </List>}
        </Box>
    )
}

export default SpecificDetails