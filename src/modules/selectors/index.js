export const selectRegions = (state) => state.regions || [];

export const selectIsFetching = (state) => state.isFetching || false;

export const selectSpecies = (state) => state.species || [];

export const selectCurrentRegion = (state) => state.filters.currentRegion || {};

export const selectMammalsFilterActive = (state) => state.filters.mammals || false;

export const selectCRFilterActive = (state) => state.filters.crSpecies || false;

export const selectRegionFilterActive = (state) => state.filters.regionSelected || false;

