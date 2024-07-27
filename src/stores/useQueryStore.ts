import { create } from "zustand";
import { allGenre } from "../hooks/useGenres";
import { Genre } from "../entities/Genre";
import { Platform } from "../entities/Platform";
import { GameMode } from "../entities/GameMode";
import { SortOption } from "../entities/SortOption";
import { allPlatforms } from "../components/platforms/PlatformSelector";
import { allGameModes } from "../components/games/GameModeSelector";

const defaultSettings = {
    genre: allGenre,
    platform: allPlatforms,
    gameMode: allGameModes,
    sort: undefined,
    order: 'asc',
    search: undefined,
    verticalLayout: false,
    showOnlyFavorites: false
}

interface QueryStore {
    search: string | undefined,
    genre: Genre,
    platform: Platform,
    gameMode: GameMode,
    sort: SortOption | undefined,
    order: string,
    verticalLayout: boolean,
    showOnlyFavorites: boolean,
    handleSearch: (searchQuery: string) => void,
    handleGenre: (selectedGenre: Genre) => void,
    handlePlatform: (selectedPlatforn: Platform) => void,
    handleGameMode: (selectedGameMode: GameMode) => void,
    handleSortSelect: (selectedSort: SortOption) => void,
    handleOrderSelect: (selectedOrder: string) => void,
    resetQueryToDefault: () => void,
    handleLayoutToggle: (useVerticalLayout: boolean) => void,
    handleFavoriteSelect: () => void
}

const useQueryStore =  create<QueryStore>(set => ({
        search: undefined,
        genre: allGenre,
        platform: allPlatforms,
        gameMode: allGameModes,
        sort: undefined,
        order: 'asc',
        verticalLayout: false,
        showOnlyFavorites: false,
        handleSearch: (searchQuery: string) => set(state =>
            searchQuery && searchQuery != state.search ? {...state, ...defaultSettings, search: searchQuery, }:state
        ),
        handleGenre: (selectedGenre: Genre) => set(state =>
            state.genre.id != selectedGenre.id ? {...state, genre: selectedGenre, search: undefined}:state
        ),
        handlePlatform: (selectedPlatform: Platform) => set(state =>
            state.platform.id != selectedPlatform.id ? {...state, platform: selectedPlatform}:state
        ),
        handleGameMode: (selectedGameMode: GameMode) => set(state =>
            selectedGameMode.id != state.gameMode.id ? {...state, gameMode: selectedGameMode}:state
        ),
        handleSortSelect: (selectedSort: SortOption) => set(state =>
            state.sort?.name == selectedSort.name ? {...state, sort: undefined}:{...state, sort: selectedSort, order: 'asc', search: ''}
        ),
        handleOrderSelect: (selectedOrder: string) => set(state =>
            selectedOrder != state.order ? {...state, order:selectedOrder} : state
        ),
        resetQueryToDefault: () => set(() => defaultSettings),
        handleLayoutToggle: (useVerticalLayout: boolean) => set(state => {
            return {...state, verticalLayout:useVerticalLayout}
        }),
        handleFavoriteSelect: () => set(state =>
            state.showOnlyFavorites ? {...state, showOnlyFavorites: false}:{...state, ...defaultSettings, showOnlyFavorites: true}
        )
    }))

export default useQueryStore