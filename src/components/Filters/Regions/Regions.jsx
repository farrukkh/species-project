import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Regions = (props) => {
  const {
    regions,
    currentRegion,
    selectSpeciesRegion,
    setSelectedFilter,
  } = props;

  const setSelectedRegion = (selectedRegion, previousRegion) => {
    if (!previousRegion.identifier) {
      setSelectedFilter('regionSelected', true);
    }
    selectSpeciesRegion(selectedRegion);
  };

  return (
    <div className="regions--container">
      <label htmlFor="regions" className="filters--text">Choose a region:</label>
      <select id="regions"
        className="regions--dropdown filter-values--text"
        onChange={() => setSelectedRegion({
          name: document.getElementById('regions').options[document.getElementById('regions').selectedIndex].innerHTML,
          identifier: document.getElementById('regions').value,
        }, currentRegion)}
      >
        <option
          key={currentRegion.identifier}
          value={currentRegion.identifier}
          label={currentRegion.name}
        >
          {currentRegion.name}
        </option>
        {
          regions.map((region) => region.name !== currentRegion.name && (
            <option
              key={region.identifier}
              value={region.identifier}
              label={region.name}
            >
              {region.name}
            </option>
          ))
        }
      </select>
    </div>
  );
};

const {
  func,
  arrayOf,
  string,
  shape,
} = PropTypes;

Regions.propTypes = {
  regions: arrayOf(shape({
    name: string,
    identifier: string,
  })).isRequired,
  currentRegion: shape({
    name: string,
    identifier: string,
  }).isRequired,
  selectSpeciesRegion: func.isRequired,
  setSelectedFilter: func.isRequired,
};

export default Regions;
