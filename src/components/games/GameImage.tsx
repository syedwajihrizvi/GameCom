import { Box, Image} from "@chakra-ui/react";
import { generate_image_url } from "../../utils/image_utils";
import useQueryStore from "../../stores/useQueryStore";
import { Cover } from "../../entities/Cover";
import { Video } from "../../entities/Video";

interface Props {
    cover: Cover | undefined,
    showPreview: boolean,
    videos: Video[]
}
function GameImage({cover, showPreview, videos}: Props) {
    const {verticalLayout} = useQueryStore()

    const gameImageClass = verticalLayout ? "singleGameImage":"gameImage"
    if (showPreview && videos) {
        const preview = `https://www.youtube.com/embed/${videos[0].video_id}?controls=0&modestbranding=1&disablekb=1&rel=0&autoplay=1&mute=1&iv_load_policy=3&show_info=0&start=30&end=45&loop=1&playlist=${videos[0].video_id}`
        return  (
            <Box>
                <iframe width="264px" height="374px" src={preview} allow='autoplay' className={gameImageClass}></iframe> 
            </Box>
        )
    }
    return (
        <Image className={gameImageClass} border={10} src={generate_image_url(cover ? cover.image_id : '')}/>
    )
}

export default GameImage