export interface CardInfo {
    cardNumber: string,
    expiryDate: string
}

export interface User {
    id: string,
    favoriteGames: string[],
    email: string,
    password: string,
    plan: string,
    cardInfo: CardInfo
}
