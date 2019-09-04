/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let reverseStr = '';
  let words = s.split(' ');

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (!word.length) continue;

    for (let j = word.length - 1; j >= 0; j--) {
      reverseStr += word[j];
    }

    if (words.length - 1 !== i) reverseStr += ' ';
  }

  return reverseStr;
};

//another way to solve this

/* PSEUDO CODE
# split the str with space to get word in array
# map through that return array with words
  # spilt the individual word with '' get word alpha in array
  # reverse that array
  # join that array with ''
# join the return array with space

GIVE A SHOT THEN SCROLL DOWN

*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  return s
    .split(' ')
    .map(word =>
      word
        .split('')
        .reverse()
        .join(''),
    )
    .join(' ');
};
