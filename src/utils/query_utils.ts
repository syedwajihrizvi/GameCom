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