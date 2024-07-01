import { Image, Skeleton } from "@chakra-ui/react";
import { generate_image_url } from "../../utils/image_utils";
import useCovers from "../../hooks/useCovers";

interface Props {
    coverId: number | undefined
}
function GameImage({coverId}: Props) {
    const {data:cover, isLoading} = useCovers(coverId)
    if (isLoading)
        return <Skeleton width={350} height={450}/>
    else
        return (
            <Image height={450} width={350} border={10} objectFit='cover' src={generate_image_url(cover ? cover.image_id : '')}/>
        )
}

export default GameImage