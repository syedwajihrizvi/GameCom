import { Query } from "../entities/Query"

export const generateGameQuery = (params: Query) => {
    const {genre, search, platform, gameMode, sort, order} = params
    let queryString = `fields genres,platforms,name,cover,aggregated_rating,rating,total_rating,game_modes,slug;`
    if (platform.id > 0 || genre.id > 0 || gameMode.id > 0) {
        queryString += "where "
        if (platform.id > 0) {
            queryString += `platforms != n & platforms = (${platform.id})`  
            if (genre.id > 0 || gameMode.id > 0)
                queryString += ' & '   
        }
        if (genre.id > 0) {
            queryString += `genres != n & genres = (${genre.id})`
            if (gameMode.id > 0)
                queryString += ' & '
        }
        if (gameMode.id > 0) {
            queryString += `game_modes != n & game_modes = (${gameMode.id})`
        }
        queryString += ';'
    }

    if (search) {
        queryString += `search "${params.search}";`
    }
    else if (sort) {
        queryString += `sort ${sort.queryString} ${order}; limit 9;`
    }
    else {
        if (platform.id == 0 && genre.id == 0 && gameMode.id == 0)
            queryString += `sort rating_count desc;`
        else
        queryString += `sort hypes desc;`
        queryString += `limit 9;`
    }
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

export const generateImageQuery = (images: number[]) => {
    let queryString = "("
    images.forEach((imageID, index) => {
        if (index == images.length - 1)
            queryString += `${imageID.toString()});`
        else
            queryString += `${imageID.toString()},`
    })
    queryString += "limit 100;"
    console.log("Query String: " + queryString)
    return queryString
}