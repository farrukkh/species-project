const addPunctuationMark = (resultsLength, currentResult, nextResult) => {
  if (resultsLength === 1 || !currentResult || !nextResult) return '';
  return ', ';
};

export default addPunctuationMark;