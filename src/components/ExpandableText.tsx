import { Button , Text} from "@chakra-ui/react"
import React from "react"
import { useState } from "react"

interface Props {
    summary: string
}

function ExpandableText({summary}: Props) {
    const [viewMore, setViewMore] = useState(false)

    const renderGameDetails = (summary: string) => {
        if (summary.length > 300)
            if (!viewMore)
                return <React.Fragment>
                        <Text fontSize='lg'>
                            {summary.slice(0,300)}...<Button onClick={() => setViewMore(true)} marginLeft={3} backgroundColor='red.500' size='xs'><Text as='b'>View More</Text></Button>
                        </Text>
                    </React.Fragment>
            else
                return <React.Fragment>
                    <Text fontSize='lg'>
                        {summary}
                        <Button onClick={() => setViewMore(false)} marginLeft={3} backgroundColor='red.500' size='xs'>
                            <Text as='b'>View Less</Text>
                        </Button>
                    </Text>
                </React.Fragment>    
        return <Text fontSize='2xl'>{summary}</Text>
    }

    return renderGameDetails(summary)
    
}

export default ExpandableText