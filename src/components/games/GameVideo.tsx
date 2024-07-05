import { Box, Button, ButtonGroup, Container, Spinner, Text } from "@chakra-ui/react"
import useGameVideo from "../../hooks/useGameVideo"
import { useState } from "react"
import {ArrowRightIcon, ArrowLeftIcon} from "@chakra-ui/icons"

interface Props {
    videos: [number]
}

function GameVideo({videos}: Props) {
    const {data: gameVideos, isLoading} = useGameVideo(videos)
    const [currentVideo, setCurrentVideo] = useState(0)

    const handleNextVideo = () => {
        if (gameVideos)
            if (currentVideo == gameVideos?.length-1)
                setCurrentVideo(0)
            else
                setCurrentVideo(currentVideo+1)
    }

    const handlePreviousVideo = () => {
        if (gameVideos)
            if (currentVideo == 0)
                setCurrentVideo(gameVideos? gameVideos.length-1 : 0)
            else
                setCurrentVideo(currentVideo-1)
    }

    if (!gameVideos) {
        return (
            <Text>No Videos</Text>
        )
    }
    const videoUrl = `https://www.youtube.com/embed/${gameVideos[currentVideo].video_id}`
    return (
        <Container>
            {isLoading && <Box height="600px" width="800px" alignContent='center'><Spinner size='xl'/></Box>}
            {!isLoading && <iframe src={videoUrl} className="gameVideo"></iframe>}
            {gameVideos && 
            <ButtonGroup paddingLeft="320px" paddingTop={2} gap={10}>
                <Button><ArrowLeftIcon boxSize={6} onClick={() => handlePreviousVideo()}/></Button>
                <Button><ArrowRightIcon boxSize={6} onClick={() => handleNextVideo()}/></Button>
            </ButtonGroup> }
        </Container>
    )
}

export default GameVideo