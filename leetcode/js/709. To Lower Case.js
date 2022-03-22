/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  let lowerCaseStr = "";

  for (let char of str) {
    let charCode = char.charCodeAt();

    if (charCode > 64 && charCode < 91) {
      lowerCaseStr += String.fromCharCode(charCode + 32);
    } else {
      lowerCaseStr += char;
    }
  }

  return lowerCaseStr;
};

toLowerCase("Hello");
toLowerCase("here");
toLowerCase("LUCKY");
