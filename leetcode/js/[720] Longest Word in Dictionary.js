// worng approach #1

var longestWord = function(words) {
    let longestWord = '', temp = '', firstAlafa;
    if(words.every(e => e.length > 1)) return "";
    words.sort();
    for (let i = 0; i < words.length; i++) {
        if((!temp) && words[i].length > 2) {
            continue;
        } else if ((!temp) && words[i].length === 2 && (words[i][0] === firstAlafa)){
            temp = words[i];
        }else if ((!temp) && words[i].length === 2 && !(words[i][0] === firstAlafa)){
            continue;
        }
        else if (temp === words[i].slice(0, words[i].length - 1)) {
            if(words[i].length === 1) firstAlafa = words[i];
            temp = words[i];
        } else {
            temp = '';
            i--;
        }
        if(temp.length > longestWord.length)longestWord = temp;
    }
    return longestWord;
};

// worng approach #2
var longestWord = function(words) {
    let longestWord = '', temp = '';
    if(words.every(e => e.length > 1)) return "";
    words.sort();
    for (let i = 0; i < words.length; i++) {
        if((!temp) && words[i].length > 1) continue;
        else if (temp === words[i].slice(0, words[i].length - 1)) {
            temp = words[i];
        } else {
            temp = '';
            i--;
        }
        if(temp.length > longestWord.length)longestWord = temp;
    }
    return longestWord;
};
// worng approach #3
var longestWord = function(words) {
    words.sort();
    let temp = words[0],
        longestWords = [];
    
    for(let i = 0; i < words.length - 1; i++) {
        if (words[i].length < words[i+1].length) {
            if ((words[i+1].slice(0, words[i+1].length - 1) === (words[i]))) {
              temp = words[i + 1];
            }
            
        } else {
            longestWords.push(temp);
        };
    }

    longestWords.push(temp);
    console.log(longestWords);
    let longestWord = longestWords[0];

    for(let i = 0; i < longestWords.length - 1; i++) {
        if (longestWord.length < longestWords[i + 1].length) {
            longestWord = longestWords[i + 1];
        } else continue;         
    }
    
    return longestWord;
};
// worng approach #4
var longestWord = function(words) {
    words.sort();
    let longestWord = words[0]; 
    for(let i = 0; i < words.length - 1; i++) {
        if (words[i].length < words[i+1].length) {
            if(!words[i+1].includes(words[i])) {
                return longestWord;
            }
            longestWord = words[i + 1];
        } else return longestWord;
    }
    return longestWord;
};

// worng approach #5
var longestWord = function(words) {
    words.sort();
    let longestWord = words[0]; 
    for(let i = 0; i < words.length - 1; i++) {
        if (words[i].length < words[i+1].length) {
            if(!words[i+1].includes(words[i])) {
                return longestWord;
            }
            longestWord = words[i + 1];
        } else return longestWord;
    }
    return longestWord;
};
