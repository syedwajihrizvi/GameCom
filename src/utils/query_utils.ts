import { Platform } from "../hooks/usePlatforms"

export interface Query {
    search: string | undefined,
    genre: number,
    platform: Platform
}

export const generateGameQuery = (params: Query) => {
    const {genre, search, platform} = params
    let queryString = `fields genres,platforms,name,cover,aggregated_rating,rating,total_rating,game_modes;`
    console.log('Genre: ' + genre)
    console.log('Platform: ' + platform.id)
    if (platform.id > 0 || genre > 0) {
        queryString += "where "
        if (platform.id > 0 && genre == 0) {
            console.log("Ran If Statement")
            queryString += `platforms != n & platforms = (${platform.id});`         
        }
        else if (platform.id == 0 && genre > 0) {
            console.log("Ran Else IfStatement")
            queryString += `genres != n & genres = (${genre});`
        }
        else {
            console.log("Ran Else Statement")
            queryString += `platforms != n & platforms = (${platform.id}) & genres != n & genres = (${genre});`
        }
    }

    if (search)
        queryString += `search "${params.search}";`
    else
        queryString += `sort hypes desc; limit 9;`
    console.log(queryString)
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