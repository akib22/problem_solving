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

/* Approach
We need to find the previous node of the targeted node. Then we can easily remove the node.
Algorithms to find previous node
-> loop though the list and count length of the list 
-> if count is greater than 'n' then assign head as previous node
-> and move previous node to the next until you reach to the end
-> finally remove the targeted node (prev.next = prev.next.next)
*/
var removeNthFromEnd = function(head, n) {
  let count = 0,
      runner = head,
      prev = null

  while(runner) {
    count += 1
    
    if (count > n) {
      if (!prev) {
        prev = head
      } else {
        prev = prev.next
      }
    }
    
    runner = runner.next
  }
  
  if (prev) {
    prev.next = prev.next.next
  } else {
    head = head.next
  }
  
  return head
};
