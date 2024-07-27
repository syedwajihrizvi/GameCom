import { Query } from "../entities/Query"
import { User } from "../entities/User"

export const generateGameQuery = (params: Query, user: User | undefined, 
                                pageParam: number, specificIDs?: number[]) => {
    const {genre, platform, gameMode, sort, order, showOnlyFavorites} = params
    let queryString = `query games "Games-${pageParam}" {fields name,genres,platforms,
                       aggregated_rating,rating,total_rating,game_modes,slug,involved_companies,
                       themes,cover.image_id,videos.video_id;`
    if (showOnlyFavorites || specificIDs) {
        if (user) {
            const gameLength = showOnlyFavorites ? user.favoriteGames.length:specificIDs?.length
            const gameIDs = showOnlyFavorites ? user.favoriteGames : specificIDs

            if (gameLength &&gameLength > 0) {
                queryString += "where id = (";
                gameIDs?.forEach((gameID, index) => {
                    if (index == gameLength-1) {
                        queryString += `${gameID});`
                    } else {
                        queryString += `${gameID},`
                    }
                })
                queryString += `limit 25;offset ${pageParam};};`
            }
            else {
                queryString += 'limit 0;};'
            }
        }
    } else {
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
    
        if (sort) {
            queryString += `sort ${sort.queryString} ${order}; limit 9;`
        }
        else {
            if (platform.id == 0 && genre.id == 0 && gameMode.id == 0)
                queryString += `sort rating_count desc;`
            else
            queryString += `sort hypes desc;`
            queryString += `limit 25;`
        }
        queryString += `offset ${pageParam};};`
    }
    return queryString
}

export const generatePlatformsQuery = (platforms: number[]) => {
    let queryString = "fields name; "
    if (platforms.length > 0) {
        queryString += "where id=("
        platforms.forEach((platformID, index) => {
            if (index == platforms.length - 1)
                queryString += `${platformID.toString()});`
            else
                queryString += `${platformID.toString()},`
        })
    }
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
    return queryString
}

export const generateGameModeQuery = (gameModes: number[]) => {
    let queryString = "fields name;"
    if (gameModes.length > 0) {
        queryString += "("
        gameModes.forEach((gameModeID, index) => {
            if (index == gameModes.length - 1)
                queryString += `${gameModeID.toString()});`
            else
                queryString += `${gameModeID.toString()},`
        })
    }
    queryString += "limit 100;"
    return queryString
}

export const generateCompanyQuery = (involvedCompanies: number[]) => {
    let queryString = `query involved_companies "Company" {fields company.name;`
    if (involvedCompanies.length > 0) {
        queryString += "where id=("
        involvedCompanies.forEach((involvedCompany, index) => {
            if (index == involvedCompanies.length - 1)
                queryString += `${involvedCompany.toString()});`
            else
                queryString += `${involvedCompany.toString()},`
        })
    }
    queryString += "limit 100;};"
    return queryString
}

export const generateThemeQuery = (themes: number[]) => {
    let queryString = "fields name;"
    if (themes.length > 0) {
        queryString += "where id=("
        themes.forEach((theme, index) => {
            if (index == themes.length - 1)
                queryString += `${theme.toString()});`
            else
                queryString += `${theme.toString()},`
        })
    }
    queryString += 'limit 100;'
    return queryString
}

export const generateVideoQuery = (videos: number[]) => {
    if (videos.length > 0) {
        let queryString = "where id=("
        if (videos.length > 0)
            videos.forEach((video, index) => {
                if (index == videos.length - 1)
                    queryString += `${video.toString()});`
                else
                    queryString += `${video.toString()},`
            })
        return queryString 
    }  
}

export const generateGenreQuery = () => {
    return "fields name,slug; limit 30;"
}

export const generateGameDetailQuery = (gameName: string) => {
    return `query games "Game" {fields name,summary,involved_companies,
            platforms,game_modes,themes,storyline,aggregated_rating,rating,
            total_rating,first_release_date,videos.video_id,screenshots.image_id;
            where slug="${gameName}";};`
}

export const generateSearchQuery = (queryString: string) => {
    return `search "${queryString}";`
}