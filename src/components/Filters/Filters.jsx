import React from 'react';
import PropTypes from 'prop-types';

import Regions from './Regions/Regions';
import TypeFilters from './TypeFilters/TypeFilters';

import './style.scss';

const Filters = (props) => {
  const {
    selectSpeciesRegion,
    filterEndangeredSpecies,
    filterMammalSpecies,
    species,
    regions,
    currentRegion,
    mammalsFilterSelected,
    crFilterSelected,
    regionSelected,
    setSelectedFilter,
  } = props;

  return (
    <div className="sidebar--container">
      <Regions
        regions={regions}
        currentRegion={currentRegion}
        setSelectedFilter={setSelectedFilter}
        selectSpeciesRegion={selectSpeciesRegion}
      />
      <TypeFilters
        filterEndangeredSpecies={filterEndangeredSpecies}
        filterMammalSpecies={filterMammalSpecies}
        species={species}
        currentRegion={currentRegion}
        mammalsFilterSelected={mammalsFilterSelected}
        crFilterSelected={crFilterSelected}
        setSelectedFilter={setSelectedFilter}
        regionSelected={regionSelected}
        selectSpeciesRegion={selectSpeciesRegion}
      />
    </div>
  )
};

const {
  func,
  arrayOf,
  string,
  shape,
  number,
  bool,
} = PropTypes;

Filters.propTypes = {
  selectSpeciesRegion: func.isRequired,
  filterEndangeredSpecies: func.isRequired,
  filterMammalSpecies: func.isRequired,
  species: arrayOf(shape({
    category: string,
    class_name: string,
    family_name: string,
    genus_name: string,
    kingdom_name: string,
    order_name: string,
    phylum_name: string,
    scientific_name: string,
    taxonid: number,
  })).isRequired,
  regions: arrayOf(shape({
    name: string,
    identifier: string,
  })).isRequired,
  currentRegion: shape({
    name: string,
    identifier: string,
  }).isRequired,
  mammalsFilterSelected: bool.isRequired,
  crFilterSelected: bool.isRequired,
  regionSelected: bool.isRequired,
  setSelectedFilter: func.isRequired,
};

export default Filters;
