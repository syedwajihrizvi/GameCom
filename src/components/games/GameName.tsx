import { Heading } from "@chakra-ui/react";

interface Props {
    gameName: string
}
function GameName({gameName}: Props) {
    return (

            <Heading size='lg' width="100%" textAlign='center'>{gameName}</Heading>
    )
}

export default GameName