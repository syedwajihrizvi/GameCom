export interface Query {
    search: string | undefined
}

export const generateGameQuery = (params: Query) => {
    let queryString = `fields genres,platforms,name,slug,cover,aggregated_rating,rating,total_rating,game_modes;`
    if (params.search)
        queryString += `search "${params.search}";`
    else
        queryString += `sort hypes desc;`

        queryString += `limit 9;`
    return queryString
}