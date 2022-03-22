/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 

var middleNode = function(head) {
    let length = 0;
    let middleValue = head;
    
    while(head) {
        length++;
        head = head.next;
    }
    
    let middle = length % 2 === 0 ? (length / 2) + 1 : Math.ceil(length / 2);
    
    for(let i = 0; i < middle - 1; i++) {
        middleValue = middleValue.next;
    }
    
    return middleValue;
};
