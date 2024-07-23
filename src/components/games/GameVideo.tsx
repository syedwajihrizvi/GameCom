import { Box, Button, ButtonGroup, Text } from "@chakra-ui/react"
import { useState } from "react"
import {ArrowRightIcon, ArrowLeftIcon} from "@chakra-ui/icons"
import { Video } from "../../entities/Video"

interface Props {
    videos: Video[]
}

function GameVideo({videos}: Props) {
    const [currentVideo, setCurrentVideo] = useState(0)

    const handleNextVideo = () => {
        if (currentVideo == videos.length-1)
            setCurrentVideo(0)
        else
            setCurrentVideo(currentVideo+1)
    }

    const handlePreviousVideo = () => {
        if (currentVideo == 0)
            setCurrentVideo(videos ? videos.length-1 : 0)
        else
            setCurrentVideo(currentVideo-1)
    }

    if (!videos) {
        return (
            <Text>No Videos</Text>
        )
    }
    const videoUrl = `https://www.youtube.com/embed/${videos[currentVideo].video_id}`
    return (
        videos &&
        <Box overflow='hidden' textAlign='center'>
            <iframe src={videoUrl} width={750} height={600}></iframe>
            {videos && 
            <ButtonGroup paddingLeft="5%" paddingTop={2} gap={10}>
                <Button><ArrowLeftIcon boxSize={6} onClick={() => handlePreviousVideo()}/></Button>
                <Button><ArrowRightIcon boxSize={6} onClick={() => handleNextVideo()}/></Button>
            </ButtonGroup> }
        </Box>
    )
}

export default GameVideo