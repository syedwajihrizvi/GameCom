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
    search: undefined
}

interface QueryStore {
    search: string | undefined,
    genre: Genre,
    platform: Platform,
    gameMode: GameMode,
    sort: SortOption | undefined
    order: string,
    handleSearch: (searchQuery: string) => void,
    handleGenre: (selectedGenre: Genre) => void,
    handlePlatform: (selectedPlatforn: Platform) => void,
    handleGameMode: (selectedGameMode: GameMode) => void,
    handleSortSelect: (selectedSort: SortOption) => void,
    handleOrderSelect: (selectedOrder: string) => void,
    resetQueryToDefault: () => void
}

const useQueryStore =  create<QueryStore>(set => ({
        search: undefined,
        genre: allGenre,
        platform: allPlatforms,
        gameMode: allGameModes,
        sort: undefined,
        order: 'asc',
        handleSearch: (searchQuery: string) => set(state => {
            if (searchQuery && searchQuery != state.search)
                return {...state, ...defaultSettings, search: searchQuery, }
            return state
        }),
        handleGenre: (selectedGenre: Genre) => set(state => {
            if (state.genre.id != selectedGenre.id)
                return {...state, genre: selectedGenre, search: undefined}
            return state
        }),
        handlePlatform: (selectedPlatform: Platform) => set(state => {
            if (state.platform.id != selectedPlatform.id)
                return {...state, platform: selectedPlatform}
            return state
        }),
        handleGameMode: (selectedGameMode: GameMode) => set(state => {
            if (selectedGameMode.id != state.gameMode.id)
                return {...state, gameMode: selectedGameMode}
            return state
        }),
        handleSortSelect: (selectedSort: SortOption) => set(state => {
            if (state.sort?.name == selectedSort.name)
                return {...state, sort: undefined}
            return {...state, sort: selectedSort, order: 'asc', search: ''}
        }),
        handleOrderSelect: (selectedOrder: string) => set(state => {
            if (selectedOrder != state.order)
                return {...state, order:selectedOrder}
            return state
        }),
        resetQueryToDefault: () => set(() => {
            console.log("Called Reset")
            return defaultSettings
        })

    }))

export default useQueryStore