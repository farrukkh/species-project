import types from '../actions';

const defaultState = {
  regions: [],
  species: [],
  filters: {
    crSpecies: false,
    mammals: false,
    regionSelected: false,
    currentRegion: { name: 'Select a region', identifier: '' },
  },
  isFetching: false,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.GET_REGIONS:
      return { ...state, isFetching: true };
    case types.SET_REGIONS:
      return { ...state, regions: action.payload.regions, isFetching: false };
    case types.GET_SPECIES_BY_REGION:
      return {
        ...state,
        isFetching: true,
        filters: { ...state.filters, crSpecies: false, mammals: false },
      };
    case types.GET_CR_SPECIES:
      return { ...state, isFetching: true };
    case types.SET_SPECIES:
      return { ...state, species: action.payload.species, isFetching: false };
    case types.SET_SELECTED_FILTER:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.payload.filter]: action.payload.selected,
        },
      };
    case types.SET_CURRENT_REGION:
      return {
        ...state,
        filters: { ...state.filters, currentRegion: action.payload.region },
      };
    default:
      return state;
  }
};

export default reducer;
