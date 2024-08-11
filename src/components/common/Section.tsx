import { Box, Heading, Image, Stack } from "@chakra-ui/react"

interface Props {
    inverted: boolean,
    image: string,
    mainHeading: string,
    subHeading: string
}

function Section({inverted, image, mainHeading, subHeading}:Props) {

    const renderImage = () => <Image src={image} height={300}/>

    const renderStack = () => 
    <Stack color="white" textAlign='center' gap={3}>
        <Heading as='h1' size='3xl' fontSize='5rem'>{mainHeading}</Heading>
        <Heading as='h6' size='sm' fontSize='2rem'>{subHeading}</Heading>
    </Stack>

    if (inverted)
        return (
            <Box className="main-section">
                {renderImage()}
                {renderStack()}
            </Box>
        )
    return (
        <Box className="main-section">
            {renderStack()}
            {renderImage()}
        </Box>
    )
}

export default Section