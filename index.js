function countVowels(text) {
  return text.match(/[ауоыиэяюёе]/ig).length;
}

function splitWords(text) {
  return text.match(/[а-я]+/ig);
}

function removePunctuation(text) {
  return text.replace(/[^а-я]/ig, '');
}

module.exports = {
  countVowels,
  splitWords,
  removePunctuation,
};
