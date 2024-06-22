import { GameMode } from "../hooks/useGameModes"
import { Platform } from "../hooks/usePlatforms"

export interface Query {
    search: string | undefined,
    genre: number,
    platform: Platform,
    gameMode: GameMode
}

export const generateGameQuery = (params: Query) => {
    const {genre, search, platform, gameMode} = params
    let queryString = `fields genres,platforms,name,cover,aggregated_rating,rating,total_rating,game_modes;`
    console.log('Genre: ' + genre)
    console.log('Platform: ' + platform.id)
    console.log('Game Modes: ' + gameMode.name)
    if (platform.id > 0 || genre > 0 || gameMode.id > 0) {
        queryString += "where "
        if (platform.id > 0) {
            console.log("Ran If Statement")
            queryString += `platforms != n & platforms = (${platform.id})`  
            if (genre > 0 || gameMode.id > 0)
                queryString += ' & '   
        }
        if (genre > 0) {
            queryString += `genres != n & genres = (${genre})`
            if (gameMode.id > 0)
                queryString += ' & '
        }
        if (gameMode.id > 0) {
            queryString += `game_modes != n & game_modes = (${gameMode.id})`
        }
        queryString += ';'
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