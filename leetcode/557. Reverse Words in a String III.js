/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let reverseStr = "";
  let words = s.split(" ");

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (!word.length) continue;

    for (let j = word.length - 1; j >= 0; j--) {
      reverseStr += word[j];
    }

    if (words.length - 1 !== i) reverseStr += " ";
  }

  return reverseStr;
};
