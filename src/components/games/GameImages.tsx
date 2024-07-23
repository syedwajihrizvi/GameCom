import { Card, SimpleGrid, Image } from "@chakra-ui/react"
import { generate_image_url } from '../../utils/image_utils';
import { Cover } from "../../entities/Cover";

interface Props {
    images: Cover[]
}

function GameImages({images}: Props) {
    return (
        <SimpleGrid columns={{sm: 1, md: 3, lg: 3, xl: 4}} spacing={5} padding={5}>
            {images?.map(image => 
            <Card>
                <Image width="450px" height="500px" objectFit='cover' borderRadius={5} src={generate_image_url(image.image_id, "1080p")}/>
            </Card>
            )}
        </SimpleGrid>
    )
}

export default GameImages