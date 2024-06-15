import { Image } from "@chakra-ui/react";
import { generate_image_url } from "../utils/image_utils";
import useCovers from "../hooks/useCovers";

interface Props {
    coverId: number | undefined
}
function GameImage({coverId}: Props) {
    const {data:cover} = useCovers(coverId)
    console.log("COVER: " + cover?.image_id)
    return (
        <Image objectFit='cover' src={generate_image_url(cover ? cover.image_id : '')}/>
    )
}

export default GameImage