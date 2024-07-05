export interface GameDetails {
    name: string;
    id: number;
    summary: string;
    videos: [number];
    screenshots: [number];
    involved_companies: [number];
    game_modes: [number],
    platforms: [number],
    themes: [number],
    storyline: string,
    aggregated_rating: number;
    rating: number;
    total_rating: number;
}
