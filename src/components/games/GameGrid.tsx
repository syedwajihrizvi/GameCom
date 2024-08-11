import '../../App.css'
import React from "react"
import { Card, CardBody, SimpleGrid, Skeleton, Center, Box } from "@chakra-ui/react"
import useGames, { InfiniteQueryData } from "../../hooks/useGames"
import { Game } from "../../entities/Game"
import InfiniteScroll from "react-infinite-scroll-component"
import InfiniteLoader from "../common/InfiniteLoader"
import useQueryStore from '../../stores/useQueryStore'
import { User } from '../../entities/User'
import GameCard from './GameCard'

interface Props {
    user: User
}

function GameGrid({user}: Props) {
    const {verticalLayout} = useQueryStore()
    const {data:games, isLoading, fetchNextPage, hasNextPage} = useGames(user)
    const cardSkeletons = [1, 2, 3, 4, 5, 6, 7, 8]
    const numberOfGames = games ? games?.pages.reduce((total, currentValue) => total + currentValue.data.length, 0) : 0

    return (
        <Box height="90vh" overflowY='scroll'>
            <InfiniteScroll dataLength={numberOfGames} next={fetchNextPage} hasMore={!!hasNextPage} loader=<InfiniteLoader/>>
                <SimpleGrid columns={verticalLayout ? 1 : {sm:1, md:1, lg:2, xl: 4, '2xl': 5}} spacingX={5} spacingY={6}>
                    {isLoading && !verticalLayout && cardSkeletons.map(skeleton =>
                    <Center>
                        <Card className={verticalLayout ? 'singleGameCard':'gameCard'}  key={skeleton}>
                            <CardBody key={skeleton+1}>
                                <Skeleton key={skeleton+2} height="400px"/>
                            </CardBody>
                        </Card>
                    </Center>
                    )}
                    {!isLoading && games?.pages.map((page: InfiniteQueryData<Game>) => 
                        <React.Fragment>
                            {page.data.map(game =>
                            <Center>
                                <GameCard game={game} favorites={user.favoriteGames} userId={user.id}/>
                            </Center>
                            )}
                        </React.Fragment>
                    )}
                </SimpleGrid>
            </InfiniteScroll>
        </Box>
    )
}

export default GameGrid