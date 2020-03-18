const types = {
  GET_REGIONS: 'GET_REGIONS',
  SET_REGIONS: 'SET_REGIONS',
  GET_SPECIES_BY_REGION: 'GET_SPECIES_BY_REGION',
  SET_SPECIES: 'SET_SPECIES',
  GET_CR_SPECIES: 'GET_CR_SPECIES',
  GET_MAMMAL_SPECIES: 'GET_MAMMAL_SPECIES',
  SET_SELECTED_FILTER: 'SET_SELECTED_FILTER',
  SET_CURRENT_REGION: 'SET_CURRENT_REGION',
};

export const getSpeciesRegions = () => ({
  type: types.GET_REGIONS,
});

export const setRegions = (regions) => ({
  type: types.SET_REGIONS,
  payload: { regions },
});

export const getSpeciesByRegion = (region) => ({
  type: types.GET_SPECIES_BY_REGION,
  payload: { region },
});

export const setSpecies = (species) => ({
  type: types.SET_SPECIES,
  payload: { species },
});

export const getCRSpecies = (species) => ({
  type: types.GET_CR_SPECIES,
  payload: { species },
});

export const getMammalSpecies = (species) => ({
  type: types.GET_MAMMAL_SPECIES,
  payload: { species },
});

export const setSelectedFilter = (filter, selected) => ({
  type: types.SET_SELECTED_FILTER,
  payload: { filter, selected },
});

export const setCurrentRegion = (region) => ({
  type: types.SET_CURRENT_REGION,
  payload: { region },
});

export default types;
