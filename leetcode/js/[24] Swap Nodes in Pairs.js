/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/*Approach
-> loop through the list and swap
-> if node next present then swap the list and make track of new swapped head
-> then track the swap head and connect with new swap value
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
   let currentHead = head,
       newHead = null,
       newHeadRunner = null
   
   while(currentHead && currentHead.next) {
     let temp = currentHead.next
     currentHead.next = currentHead.next.next
     
     if (newHead) {
       temp.next = currentHead
       newHeadRunner.next = temp
       newHeadRunner = currentHead
     } else {
       temp.next = currentHead
       newHead = temp
       newHeadRunner = newHead.next
     } 
     
     currentHead = currentHead.next
   }
  
   return newHead || head
};
