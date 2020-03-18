import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SpeciesView from './SpeciesView';
import {
  getSpeciesRegions,
  getSpeciesByRegion,
  getCRSpecies,
  getMammalSpecies,
  setSelectedFilter,
  setCurrentRegion,
} from '../modules/actions';
import {
  selectRegions,
  selectIsFetching,
  selectSpecies,
  selectCurrentRegion,
  selectMammalsFilterActive,
  selectCRFilterActive,
  selectRegionFilterActive,
} from '../modules/selectors';

const mapStateToProps = state => ({
  regions: selectRegions(state),
  isFetching: selectIsFetching(state),
  species: selectSpecies(state),
  currentRegion: selectCurrentRegion(state),
  mammalsFilterSelected: selectMammalsFilterActive(state),
  crFilterSelected: selectCRFilterActive(state),
  regionSelected: selectRegionFilterActive(state),
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getSpeciesRegions,
      getSpeciesByRegion,
      getCRSpecies,
      getMammalSpecies,
      setSelectedFilter,
      setCurrentRegion,
    },
    dispatch,
  ),
});

const Species = connect(mapStateToProps, mapDispatchToProps)(SpeciesView);

export default Species;
