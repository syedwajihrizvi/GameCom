import { Container, Text } from "@chakra-ui/react"

interface Props {
    title: string,
    quality: string,
    partial: boolean
}

function PlanHeader({title, quality, partial}: Props) {
    return (
        <Container padding={5} className="plan-header" borderRadius={10} color='white'>                            
            <Text as='b' fontSize={partial ? '10' : '20'} display='block'>{title}</Text>
            <Text as='b' fontSize={partial ? '8' : '18'}>{quality}</Text>    
        </Container>
    )
}

export default PlanHeader