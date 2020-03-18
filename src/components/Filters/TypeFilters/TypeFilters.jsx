import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const TypeFilters = (props) => {
  const {
    filterEndangeredSpecies,
    filterMammalSpecies,
    species,
    mammalsFilterSelected,
    crFilterSelected,
    setSelectedFilter,
    regionSelected,
    selectSpeciesRegion,
    currentRegion,
  } = props;

  const filterSpecies = (filterId, speciesToFilter, filterSelected) => {
    setSelectedFilter(filterId, filterSelected);
    if (filterId === 'crSpecies' && filterSelected) {
      filterEndangeredSpecies(speciesToFilter);
    } else if (filterId === 'mammals' && filterSelected) {
      filterMammalSpecies(speciesToFilter);
    } else {
      selectSpeciesRegion(currentRegion);
    }
  };

  const filterIsDisabled = (otherFilterSelected, regionFilterSelected) => {
    if (!regionFilterSelected || otherFilterSelected) return true;
    return false;
  }

  return (
    <div className="filters--container">
      <span className="filters--text">Filter Species By:</span>
      <div className="single-filter--container">
        <input
          id="filterCRSpecies"
          className="ml10"
          type="checkbox"
          onChange={() => filterSpecies('crSpecies', species, !crFilterSelected)}
          disabled={filterIsDisabled(mammalsFilterSelected, regionSelected)}
          checked={crFilterSelected}
        />
        <label
          htmlFor="filterCRSpecies"
          className={`filter-values--text${filterIsDisabled(mammalsFilterSelected, regionSelected) ? ' disabled' : ''}`}
        >
          Critically Endangered
        </label>
        <input
          id="filterMammalSpecies"
          className="ml10"
          type="checkbox"
          onChange={() => filterSpecies('mammals', species, !mammalsFilterSelected)}
          disabled={filterIsDisabled(crFilterSelected, regionSelected)}
          checked={mammalsFilterSelected}
        />
        <label
          htmlFor="filterMammalSpecies"
          className={`filter-values--text${filterIsDisabled(crFilterSelected, regionSelected) ? ' disabled' : ''}`}
        >
          Mammals
        </label>
      </div>
    </div>
  )
};

const {
  func,
  arrayOf,
  shape,
  string,
  number,
  bool,
} = PropTypes;

TypeFilters.propTypes = {
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
  mammalsFilterSelected: bool.isRequired,
  crFilterSelected: bool.isRequired,
  setSelectedFilter: func.isRequired,
  regionSelected: bool.isRequired,
  selectSpeciesRegion: func.isRequired,
  currentRegion: shape({
    identifier: string,
    name: string,
  }).isRequired,
};

export default TypeFilters;
