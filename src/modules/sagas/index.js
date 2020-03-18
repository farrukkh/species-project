import { put, takeLatest, all, call } from 'redux-saga/effects';

import types, { setRegions, setSpecies } from '../actions';
import addPunctuationMark from '../utils/helpers';

const TOKEN = 'e86db33aaef7e19f60502648d7a53e654f5ca084c4a4a11b933b5596d16613fd';
const BASE_URL = 'http://apiv3.iucnredlist.org/api/v3';

function* handleGetRegions() {
  const regionsResponse = yield fetch(
    `${BASE_URL}/region/list?token=${TOKEN}`
  ).then(response => response.json());

  yield put(setRegions(regionsResponse.results));
};

function* handleGetSpeciesByRegion(action) {
  const { payload: { region } } = action;

  /*
    As it was said in the requirements that we don't need pagination,
    we can have a default value 0 for the page parameter
  */
  const speciesResponse = yield fetch(
    `${BASE_URL}/species/region/${region.identifier}/page/0?token=${TOKEN}`
  ).then(response => response.json());

  yield put(setSpecies(speciesResponse.result));
};

function* handleGetSingleSpeciesConservation(specie) {
  const specieWithConservationInfo = specie;

  const specieConservationMehods = yield fetch(
    `${BASE_URL}/measures/species/id/${specie.taxonid}?token=${TOKEN}`
  ).then(response => response.json());

  if (specieConservationMehods.result.length) {
    specieConservationMehods.result.forEach(
      (conservationResult, conservationResultIndex) => {
        specieWithConservationInfo.text =
          (specieWithConservationInfo.text || '') +
          conservationResult.title +
          addPunctuationMark(
            specieConservationMehods.result.length,
            conservationResult.title,
            specieConservationMehods.result[conservationResultIndex + 1],
          );
      }
    );
  } else {
    specieWithConservationInfo.text = '';
  }

  return specieWithConservationInfo;
};

function* handleGetCRSpecies(action) {
  const { payload: { species } } = action;
  const filteredSpecies = species.filter(specie => specie.category === 'CR');

  const crSpeciesWithConservation = yield all(
    filteredSpecies.map(specie =>
      call(handleGetSingleSpeciesConservation, specie)
    )
  );

  yield put(setSpecies(crSpeciesWithConservation));
};

function* handleGetMammalSpecies(action) {
  const { payload: { species } } = action;

  const filteredSpecies = species.filter(
    specie => specie.class_name === 'MAMMALIA'
  );

  yield put(setSpecies(filteredSpecies));
};

export default function* rootSaga() {
  yield all([
    takeLatest(types.GET_REGIONS, handleGetRegions),
    takeLatest(types.GET_SPECIES_BY_REGION, handleGetSpeciesByRegion),
    takeLatest(types.GET_CR_SPECIES, handleGetCRSpecies),
    takeLatest(types.GET_MAMMAL_SPECIES, handleGetMammalSpecies)
  ]);
};
