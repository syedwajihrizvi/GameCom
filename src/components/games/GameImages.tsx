import { Card, SimpleGrid, Image, Skeleton } from "@chakra-ui/react"
import useGameScreenshots from "../../hooks/useGameScreenshots"
import { generate_image_url } from '../../utils/image_utils';

interface Props {
    images: [number]
}

function GameImages({images}: Props) {
    const {data:screenshots, isLoading} = useGameScreenshots(images)
    const skeletonImages = [1, 2, 3, 4]
    return (
        <SimpleGrid columns={{sm: 1, md: 3, lg: 4, xl: 4}} spacing={5} padding={5}>
            {isLoading && 
            skeletonImages.map(() => <Skeleton width="450" height="500px"/>)}
            {screenshots?.map(screenshot => 
            <Card>
                <Image width="450" height="500px" objectFit='cover' borderRadius={10} src={generate_image_url(screenshot.image_id)}/>
            </Card>
            )}
        </SimpleGrid>
    )
}

export default GameImages