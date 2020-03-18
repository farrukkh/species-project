# Species task

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Steps to run

Install all packages by running: `yarn install`

To start the project, run: `yarn start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Explanation by task requirements

### 1. Load the list of the available regions for species

- Added an useEffect which triggers on mount, dispatches an action `getSpeciesRegions` which is picked up by saga `handleGetRegions`.
- That saga makes a request to the IUCN api and add the response to the state, i.e. `state.regions`

### 2. Take a random region from the list

- Created a dropdown which has all the available regions so the user can choose whichever region they prefer.
- The dropdown has a default value which does not corresponds to any responses.
- When the user chooses a region, that region will be seen in the dropdown default option, and the other options will be filtered to not show the active region.

### 3. Load the list of all species in the selected region — the first page of the results would suffice, no need for pagination

- By clicking on a dropdown option, the `selectSpeciesRegion` action is triggered and picked up by `handleGetSpeciesByRegion`.
- That saga makes a request to the IUCN api and add the response to the state, i.e. `state.species`.
- These species are then show in the table.

### 4. Create a model for “Species” and map the results to an array of Species.

- This is done in requirement 3, i.e. the response is added to `state.species` as an array of objects.

### 5. Filter the results for Critically Endangered species (and all the sub-requirements)

- Created a checkbox with label "Endangered Species", which triggers the action `filterEndangeredSpecies` (when the checkbox is checked) picked up by `handleGetCRSpecies` saga.
- That saga makes a request to IUCN api for each specie by their taxonomyId, and stores the conservation measures response for each specie.
- After that, the saga dispatches the action `setSpecies` which add all the species (and their new information) to the state, i.e. `state.species`.
- If the user unchecks the checkbox, the process in requirement 3 is triggered again to get all the species for the active region (not only critically endangered species).
- Only one checkbox can be checked at the same time because that solves the requirement 6, where we filter all the species by Mammals. If both checkboxes could be checked at the same time, then that would create a possible bug in which a user could first filter Critically Endangered species and then filter these species to also be Mammals, which is against the requirement 6.
- `NOTE: As there are a lot of requests sent to the api, this step may take ~1-3 minutes depending on how many critically endangered species there are.`

### 6. Filter the results (from step 4) for the mammal class
- Created a checkbox with label "Mammals", which triggers the action `filterMammalSpecies` (when the checkbox is checked) picked up by `handleGetMammalSpecies` saga which filters all the species for mammals.
- After that, the saga dispatches the action `setSpecies` which add all the mammal species to the state, i.e. `state.species`.
- If the user unchecks the checkbox, the process in requirement 3 is triggered again to get all the species for the active region (not only critically endangered species).
- Only one checkbox can be checked at the same time because that solves the requirement 6, where we filter all the species by Mammals. If both checkboxes could be checked at the same time, then that would create a possible bug in which a user could first filter Critically Endangered species and then filter these species to also be Mammals, which is against the requirement 6.

#### Why use checkboxes instead of radio buttons

- The reason for using checkboxes is that they can be both unchecked so the user can see all the species for a region, contrary to radio buttons where one radio button should always be checked. Another option would be to have a third radio button which resets the filters, although it didn't feel good to me.