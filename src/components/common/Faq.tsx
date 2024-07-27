import { Box, Flex, Text, Heading, Button, Spacer, Stack} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useState } from "react";

interface Props {
    question: string,
    answer: string
}

function Faq({question, answer}: Props) {
    const [open, setOpen] = useState(false)

    const renderIcon = () => {
        if (open)
            return <MinusIcon boxSize={7} onClick={() => setOpen(!open)} color='white'/>
        else
            return <AddIcon boxSize={7} onClick={() => setOpen(!open)} color='white'/>
    }

    return (
        <Stack width={{sm: "400px", md: "600px", lg: "650px"}} backgroundColor='gray.800' color="white" padding={5}>
            <Flex>
                <Box padding={2}>
                    <Heading as='h2' size='lg'>{question}</Heading>
                </Box>
                <Spacer/>
                <Box padding={2}>
                    <Button backgroundColor='transparent' onClick={() => setOpen(!open)}>
                        {renderIcon()}
                    </Button>
                </Box>
            </Flex>
            {open && <Text width="100%">{answer}</Text>}
        </Stack>
    )
}

export default Faq