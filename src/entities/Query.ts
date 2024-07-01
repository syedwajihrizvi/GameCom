import { SortOption } from "./SortOption";
import { GameMode } from "./GameMode";
import { Genre } from "./Genre";
import { Platform } from "./Platform";


export interface Query {
    search: string | undefined;
    genre: Genre;
    platform: Platform;
    gameMode: GameMode;
    sort: SortOption | undefined;
    order: string;
}
