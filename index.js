const countVowels = (text) => text.match(/[АЕЁИОУЫЭЮЯаеёиоуыэюя]/gi).length;

const splitWords = (text) => text.slice()
  .split(/[^АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя]/gm)
  .filter((v) => v !== '');

const removePunctuation = (text) => text.slice()
  .replace(/[^АБВГДЕЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюя]/gm, '');

module.exports = {
  countVowels,
  splitWords,
  removePunctuation,
};
