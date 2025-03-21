import { Box, Flex, Text, Heading, Button, Spacer, Stack} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion"
import { useState } from "react";

interface Props {
    question: string,
    answer: string
}

const MotionBox = motion(Box)

function Faq({question, answer}: Props) {
    const [open, setOpen] = useState(false)

    const renderIcon = () => {
        if (open)
            return <MinusIcon boxSize={7} onClick={() => setOpen(!open)} color='white'/>
        else
            return <AddIcon boxSize={7} onClick={() => setOpen(!open)} color='white'/>
    }

    return (
        <Stack className="faq">
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
            <MotionBox
                initial={{maxHeight: 0, opacity: 0}}
                animate={open ? { maxHeight: "fit-content", opacity: 1 } : { maxHeight: 0, opacity: 0 }}
                transition={{duration: 0.3}}
                overflow="hidden"
                width="100%"
                >
                <Text width="100%">{answer}</Text>
            </MotionBox>
        </Stack>
    )
}

export default Faq