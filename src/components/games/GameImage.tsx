import { Box, Image, Skeleton } from "@chakra-ui/react";
import { generate_image_url } from "../../utils/image_utils";
import useCovers from "../../hooks/useCovers";
import useGameVideo from "../../hooks/useGameVideo";

interface Props {
    coverId: number | undefined,
    isPreview: boolean,
    videos: number[]
}
function GameImage({coverId, isPreview, videos}: Props) {
    const {data:cover, isLoading} = useCovers(coverId)
    const {data:previews} = useGameVideo(videos)
    if (isLoading) {
        return <Skeleton className="gameImage"/>
    }
    else if (isPreview && previews) {
        const preview = `https://www.youtube.com/embed/${previews[0].video_id}?controls=0&modestbranding=1&disablekb=1&rel=0&autoplay=1&mute=1&iv_load_policy=3&show_info=0&start=30&end=45&loop=1&playlist=${previews[0].video_id}`
        return  (
            <Box overflow='hidden'>
                <iframe src={preview} allow='autoplay' className="gameImage"></iframe> 
            </Box>
        )
    }
    return (
        <Image className="gameImage" border={10} objectFit='cover' src={generate_image_url(cover ? cover.image_id : '')}/>
    )
}

export default GameImage