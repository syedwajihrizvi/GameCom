import { Box, Flex, Text, VStack, Heading, Button, HStack, Spacer} from "@chakra-ui/react";
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
        <Flex width="110vh" backgroundColor='gray.800' color='white'>
            <VStack paddingTop="20px" paddingBottom="20px">
                <HStack className='accordian-head'>
                    <Box padding={2} className="accordian-question" width="100vh">
                        <Heading as='h2' size='lg'>{question}</Heading>
                    </Box>
                    <Spacer/>
                    <Spacer/>
                    <Box padding={2} className="accordian-icon">
                        <Button backgroundColor='transparent'>
                            {renderIcon()}
                        </Button>
                    </Box>
                </HStack>
                {open && 
                <Flex padding={2} width="100%" borderColor='black' borderTopWidth={2}>
                    <Text fontSize='xl' as='b'>{answer}</Text>
                </Flex>}
            </VStack>
        </Flex>
    )
}

export default Faq