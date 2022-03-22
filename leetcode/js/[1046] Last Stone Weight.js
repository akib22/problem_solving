/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    stones.sort((a,b) => a - b);
   
    while(stones.length > 1) {
        let difference = stones.pop() - stones.pop();
        
        if(difference !== 0) {
            
            for(let i = 0; i < stones.length; i++) {
                
                if(difference <= stones[i]) {
                    let firstPart = stones.slice(0, i);
                    firstPart.push(difference);
                    difference = null;
                    let secondPart = stones.slice(i);
                    stones = firstPart.concat(secondPart);
                    break;
                }
                
            }
            
            if(difference) stones.push(difference);
        }
    }
    
    return stones[0] ? stones[0] : 0;
};

