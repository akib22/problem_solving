/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

/* Approach
-> First get length of the linked-list
-> Then find previous node of the targeted node
-> And remove the targeted node (prev.next = target.next)
*/

var removeNthFromEnd = function(head, n) {
  let length = 0
  let runner = head
  
  while(runner) {
    length += 1
    runner = runner.next
  }
  
  let count = 0;
  runner = head
  let prev = null

  while(count < length - n) {
    prev = runner
    runner = runner.next
    count += 1
  }
  
  if (count === 0) {
    head = head.next
  } else {
    prev.next = runner.next  
  }
  
  return head
};
