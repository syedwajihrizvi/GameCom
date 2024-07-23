import { Cover } from "./Cover";
import { Video } from "./Video";

export interface GameDetails {
    name: string;
    id: number;
    summary: string;
    videos: Video[] | undefined;
    screenshots: Cover[] | undefined;
    involved_companies: [number];
    game_modes: [number],
    platforms: [number],
    themes: [number],
    storyline: string,
    aggregated_rating: number;
    rating: number;
    total_rating: number;
    first_release_date: number;
}
