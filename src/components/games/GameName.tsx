import { Container, Heading } from "@chakra-ui/react";

interface Props {
    gameName: string
}
function GameName({gameName}: Props) {
    return (
        <Container textAlign='center'>
            <Heading>{gameName}</Heading>
        </Container> 
    )
}

export default GameName