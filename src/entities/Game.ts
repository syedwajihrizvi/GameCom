import { Cover } from "./Cover";
import { Video } from "./Video";

export interface Game {
    id: number;
    name: string;
    slug: string;
    cover: Cover | undefined;
    image_url: string | undefined;
    platforms: number[];
    aggregated_rating: number;
    rating: number;
    total_rating: number;
    game_modes: number[];
    involved_companies: number[],
    themes: number[],
    videos: Video[]
}
