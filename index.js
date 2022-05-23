const countVowels = (text) => text.match(/[АЕЁИОУЫЭЮЯаеёиоуыэюя]/gi).length;

const splitWords = (text) => text
  .split(/[^АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя]/gm)
  .filter((v) => v !== '');

const removePunctuation = (text) => text
  .replace(/[^АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя]/gm, '');

module.exports = {
  countVowels,
  splitWords,
  removePunctuation,
};
