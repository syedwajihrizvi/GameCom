import { Card, SimpleGrid, Image } from "@chakra-ui/react"
import useGameScreenshots from "../../hooks/useGameScreenshots"
import { generate_image_url } from '../../utils/image_utils';

interface Props {
    images: [number]
}

function GameImages({images}: Props) {
    const {data:screenshots} = useGameScreenshots(images)
    return (
        <SimpleGrid columns={{sm: 1, md: 3, lg: 4, xl: 4}} spacing={5} padding={5}>
            {screenshots?.map(screenshot => 
            <Card>
                <Image width="450" height="500px" objectFit='cover' borderRadius={10} src={generate_image_url(screenshot.image_id)}/>
            </Card>
            )}
        </SimpleGrid>
    )
}

export default GameImages