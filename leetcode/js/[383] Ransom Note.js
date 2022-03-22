/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const ransomNoteArr = [...new Set(ransomNote)], 
          magazineArr = [...new Set(magazine)];
    
    let hasAllAlpabet = false;
    
    for(let i = 0; i < ransomNoteArr.length; i++) {
        let hasAlpabet = false;
        for(let j = 0; j < magazineArr.length; j++) {
            if(ransomNoteArr[i] === magazineArr[j]){
                hasAlpabet = true;
            }
        }
        if(!hasAlpabet) return false;
    }
    return true;
};



/**
 *  ACCEPTED ANSWER
 */
var canConstruct = function(ransomNote, magazine) {
    let ransomNoteAlpha = {}, magazineAlpha = {};
    
    for(let i = 0; i < ransomNote.length; i++) {
        if(ransomNoteAlpha[ransomNote[i]]) {
            ransomNoteAlpha[ransomNote[i]]++;
        } else {
            ransomNoteAlpha[ransomNote[i]] = 1;
        }
    }
    
    for(let j = 0; j < magazine.length; j++) {
        if(magazineAlpha[magazine[j]]) {
          magazineAlpha[magazine[j]]++;  
        } else {
            magazineAlpha[magazine[j]] = 1;
        }
    }
    
    const alpha = Object.keys(ransomNoteAlpha);

    for(let k = 0; k < alpha.length; k++) {
        if(magazineAlpha[alpha[k]] < ransomNoteAlpha[alpha[k]] || !magazineAlpha[alpha[k]]) {
            return false;
        }
    }
    
    return true;

};
