import { Box, Flex, Text, VStack, Heading, Button, HStack, Spacer} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useState } from "react";

function Faq() {
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
                        <Heading as='h2' size='lg'>How much does GameCom cost?</Heading>
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
                <Flex padding={2} width="100%">
                    <Text>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis eius perspiciatis adipisci temporibus molestiae illum voluptas rerum itaque ipsa quasi officia optio numquam expedita facere, atque, labore dolorum tempora vero!</Text>
                </Flex>}
            </VStack>
        </Flex>
    )
}

export default Faq