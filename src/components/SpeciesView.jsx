import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import LoadingIcon from './Loading/Loading';
import SpeciesTable from './Table/SpeciesTable';
import Filters from './Filters/Filters';

import './style.scss';

const SpeciesView = (props) => {
  const {
    actions: {
      getSpeciesRegions,
      getSpeciesByRegion,
      getCRSpecies,
      getMammalSpecies,
      setSelectedFilter,
      setCurrentRegion,
    },
    regions,
    isFetching,
    species,
    currentRegion,
    mammalsFilterSelected,
    crFilterSelected,
    regionSelected,
  } = props;

  useEffect(() => {
    getSpeciesRegions();
  }, []);

  if (isFetching) {
    return <LoadingIcon width="200px" height="200px" />;
  }

  const selectSpeciesRegion = (region) => {
    const selectedRegion = {
      name: region.name,
      identifier: region.identifier,
    }

    setCurrentRegion(selectedRegion);
    getSpeciesByRegion(selectedRegion);   
  }

  const filterEndangeredSpecies = (allSpecies) => {
    if (document.getElementById('filterCRSpecies').checked) {
      getCRSpecies(allSpecies);
    } else {
      getSpeciesByRegion(document.getElementById('regions').value)
    }
  }

  const filterMammalSpecies = (allSpecies) => {
    if (document.getElementById('filterMammalSpecies').checked) {
      getMammalSpecies(allSpecies);
    } else {
      getSpeciesByRegion(document.getElementById('regions').value)
    }
  }

  return (
    <div className="species-view--container">
      <Filters
        getSpeciesByRegion={getSpeciesByRegion}
        filterEndangeredSpecies={filterEndangeredSpecies}
        filterMammalSpecies={filterMammalSpecies}
        species={species}
        regions={regions}
        currentRegion={currentRegion}
        mammalsFilterSelected={mammalsFilterSelected}
        crFilterSelected={crFilterSelected}
        regionSelected={regionSelected}
        setSelectedFilter={setSelectedFilter}
        setCurrentRegion={setCurrentRegion}
        selectSpeciesRegion={selectSpeciesRegion}
      />
      <SpeciesTable species={species} />
    </div>
  );
};

const {
  shape,
  func,
  arrayOf,
  bool,
  string,
  number,
} = PropTypes;

SpeciesView.propTypes = {
  actions: shape({
    getSpeciesRegions: func.isRequired,
    getSpeciesByRegion: func.isRequired,
    getCRSpecies: func.isRequired,
    getMammalSpecies: func.isRequired,
    setSelectedFilter: func.isRequired,
    setCurrentRegion: func.isRequired,
  }).isRequired,
  regions: arrayOf(shape({
    name: string,
    identifier: string,
  })).isRequired,
  isFetching: bool.isRequired,
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
  currentRegion: shape({
    name: string,
    identifier: string,
  }).isRequired,
  mammalsFilterSelected: bool.isRequired,
  crFilterSelected: bool.isRequired,
  regionSelected: bool.isRequired,
}

export default SpeciesView;
