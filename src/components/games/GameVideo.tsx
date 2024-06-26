import { Container, Skeleton } from "@chakra-ui/react"
import useGameVideo from "../../hooks/useGameVideo"

interface Props {
    videos: [number]
}

function GameVideo({videos}: Props) {
    const {data:video, isLoading} = useGameVideo(videos)
    return (
        <Container>
            {isLoading && <Skeleton className="gameVideo"/>}
            {!isLoading && <iframe src={`https://www.youtube.com/embed/${video?.video_id}`} className="gameVideo"></iframe>}
        </Container>
    )
}

export default GameVideo