export interface Query {
    search: string | undefined,
    genre: number | undefined
}

export const generateGameQuery = (params: Query) => {
    const {genre, search} = params
    let queryString = `fields genres,platforms,name,slug,cover,aggregated_rating,rating,total_rating,game_modes;`
    if (genre)
        queryString += `where genres != n & genres = ${genre};`
    if (search)
        queryString += `search "${params.search}";`
    else
        queryString += `sort hypes desc; limit 9;`
    return queryString
}

export const generatePlatformsQuery = (platforms: number[]) => {
    let queryString = "("
    platforms.forEach((platformID, index) => {
        if (index == platforms.length - 1)
            queryString += `${platformID.toString()});`
        else
            queryString += `${platformID.toString()},`
    })
    queryString += "limit 100; sort name asc;"
    return queryString
}