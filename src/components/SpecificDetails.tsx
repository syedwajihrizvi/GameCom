import { Box, Heading, ListItem, UnorderedList } from "@chakra-ui/react"

export interface Detail {
    name: string;
}

interface Props {
    heading: string,
    details: Detail[]
}

function SpecificDetails({heading, details}: Props) {
    return (
        <Box paddingStart={0}>
            <Heading as="h4" size='md' color='gray.600'>{heading}</Heading>
            <UnorderedList spacing={1}>
                {details.map(detail => 
                <ListItem>
                    {detail.name}
                </ListItem>)}
            </UnorderedList>
        </Box>
    )
}

export default SpecificDetails