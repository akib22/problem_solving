/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
    const [ year, month, day ] = date.split('-');
    let numberOfDays = +day;
    let monthOfDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    // check leap year or not 
    if( (year % 100 === 0 && year % 400 === 0) || (year % 100 !== 0 && year % 4 === 0) ) {
        monthOfDays[1] = 29;
    }
    
    // calculate total days
    for(let i = 0; i < month - 1; i++) {
        numberOfDays += monthOfDays[i];    
    }
    
    return numberOfDays;
};
